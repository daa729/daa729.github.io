// Repos.tsx
import { GetStaticProps } from 'next';
import { Octokit } from 'octokit';

const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_API_KEY // Replace with your actual token
});

const desiredRepositories = [
    { url: "https://github.com/zachtyson/cnt4007-project", description: "Programmed a Bit-Torrent program using java and virtual machines to simulate a UDP download network." },
    { url: "https://github.com/zshenkman/grooveguru", description: "Created a prototype for an AI music suggestion tool utilizing Chat-GPT. " },
    { url: "https://github.com/daa729/AccidentProject", description: "Created a Accident Heat Map application utilizing public crash data and keying it into Google Maps API" },
    { url: "https://github.com/Musketeers-CEN/Gator-Round-Up", description: "Used Flutter to create a Club Check in Application Utilizing a Firebase keyed into users Google Accounts." },
    { url: "https://github.com/daa729/AVLTrees", description: "Practice projects building my first AVL Tree" },
    { url: "https://github.com/daa729/ProgrammingLangaugeConcepts", description: "Built a custom programming language on top of the existing java code base." },
    { url: "https://github.com/Dance-Marathon/DM-Website", description: "Customized and optimized a large scale web project that has been passed down for nearly a decade" },
];

const getRepoOwnerAndName = (url: string) => {
    const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (match) {
        return { owner: match[1], repo: match[2] };
    }
    return null;
};

export const getStaticProps: GetStaticProps = async () => {
    try {
        const repoPromises = desiredRepositories.map(async ({ url, description }) => {
            const { owner, repo } = getRepoOwnerAndName(url) || {};
            if (owner && repo) {
                const response = await octokit.rest.repos.get({ owner, repo });
                const languagesResponse = await octokit.rest.repos.listLanguages({ owner, repo });
                return { ...response.data, description, languages: languagesResponse.data };
            }
            return null;
        });

        const repos = await Promise.all(repoPromises);
        const filteredRepositories = repos.filter(repo => repo !== null);

        return {
            props: {
                repositories: filteredRepositories,
            },
        };
    } catch (error) {
        console.error("Error fetching repositories:", error);
        return {
            props: {
                repositories: [],
            },
        };
    }
};

type Repository = {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    html_url: string;
    description: string | null;
    fork: boolean;
    url: string;
    owner: {
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        gravatar_id: string | null;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string;
        site_admin: boolean;
    };
    languages: { [key: string]: number };
};

export type { Repository };
