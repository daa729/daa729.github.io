// Build-time GitHub data. Imported only by server components, so the token
// (if any) is never included in client-side JavaScript.

export type RepoSummary = {
  owner: string;
  name: string;
  url: string;
  description: string;
  /** Language name -> percentage (0-100), largest first. Empty if unavailable. */
  languages: { name: string; percent: number }[];
};

type RepoInput = { url: string; description: string };

const API = "https://api.github.com";

function headers(): HeadersInit {
  const h: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  // GITHUB_TOKEN is optional: public repos work without it, but the token
  // avoids the low unauthenticated rate limit on shared CI runners.
  const token = process.env.GITHUB_TOKEN;
  if (token) h.Authorization = `Bearer ${token}`;
  return h;
}

function parseRepoUrl(url: string): { owner: string; name: string } | null {
  const match = url.match(/^https:\/\/github\.com\/([\w.-]+)\/([\w.-]+?)\/?$/);
  return match ? { owner: match[1], name: match[2] } : null;
}

async function fetchLanguages(owner: string, name: string) {
  try {
    const res = await fetch(`${API}/repos/${owner}/${name}/languages`, {
      headers: headers(),
      cache: "force-cache",
    });
    if (!res.ok) return [];
    const data = (await res.json()) as Record<string, number>;
    const total = Object.values(data).reduce((a, b) => a + b, 0);
    if (!total) return [];
    return Object.entries(data)
      .map(([lang, bytes]) => ({ name: lang, percent: (bytes / total) * 100 }))
      .sort((a, b) => b.percent - a.percent);
  } catch {
    return [];
  }
}

/**
 * Resolve the curated repo list. Never throws: if GitHub is unreachable or
 * rate-limited the repo is still shown, just without its language breakdown,
 * so a flaky API can't break the deploy.
 */
export async function getRepos(inputs: RepoInput[]): Promise<RepoSummary[]> {
  const results = await Promise.all(
    inputs.map(async ({ url, description }) => {
      const parsed = parseRepoUrl(url);
      if (!parsed) return null;
      const languages = await fetchLanguages(parsed.owner, parsed.name);
      return { ...parsed, url, description, languages };
    }),
  );
  return results.filter((r): r is RepoSummary => r !== null);
}
