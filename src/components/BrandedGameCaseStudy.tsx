import Facts from "./Facts";
import { brandedGame } from "@/data/projects";

/** Featured client build with its headline results. */
export default function BrandedGameCaseStudy() {
  const g = brandedGame;

  return (
    <article className="border-t border-line pt-6">
      <h3 className="font-display text-3xl font-semibold leading-tight text-fg">{g.title}</h3>
      <p className="mt-1 font-medium text-fg/90">{g.client}</p>
      <p className="mt-3 max-w-2xl text-fg/80">{g.summary}</p>

      <div className="mt-6">
        <Facts items={g.headline} />
      </div>
    </article>
  );
}
