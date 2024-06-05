"use client";
import React, { useEffect, useState } from "react";
import { Octokit } from "octokit";
import Hard from "../Assets/LokiTitle.jsx";
import Image from "next/image";

const octokit = new Octokit({

    auth: process.env.NEXT_PUBLIC_API_KEY // Replace with your actual token
});

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

export default function Home() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        const fetchRepositories = async () => {
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

                setRepositories(filteredRepositories as Repository[]);
            } catch (error) {
                console.error("Error fetching repositories:", error);
            }
        };

        fetchRepositories();
    }, []);

    const getTotalBytes = (languages: { [key: string]: number }) => {
        return Object.values(languages).reduce((acc, bytes) => acc + bytes, 0);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-6" style={{ backgroundColor: "#000", color: "#fff" }}>
            <div className="Loki">
                <Hard text={"Projects"} />
            </div>
            <div className="repositories-container">
                {repositories.map((repo) => {
                    const totalBytes = getTotalBytes(repo.languages);
                    return (
                        <div key={repo.id} className="repository-card">
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={repo.owner.avatar_url}
                                    alt={`${repo.owner.login}'s avatar`}
                                    className="avatar"
                                />
                                <div className="repo-details">
                                    <h3>{repo.name}</h3>
                                    <p>{repo.description}</p>
                                    <div className="languages">
                                        {Object.entries(repo.languages).map(([language, bytes]) => {
                                            const percentage = ((bytes / totalBytes) * 100).toFixed(2);
                                            return (
                                                <div key={language} className="language-wrapper">
                                                    <div className="language-bar" style={{ width: `${percentage}%`, backgroundColor: getColorForLanguage(language) }} />
                                                    <span className="language-label">{language} ({percentage}%)</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </a>
                        </div>
                    );
                })}
            </div>
            <style jsx>{`
                /* Add your custom font here */
                @import url('https://fonts.googleapis.com/css2?family=YourFontName:wght@400;700&display=swap');

                body {
                    font-family: 'YourFontName', sans-serif;
                }
                .repositories-container {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 2rem;
                    justify-content: center;
                }
                .repository-card {
                    background: #000;
                    border: 1px solid #555;
                    border-radius: 0.5rem;
                    box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
                    transition: transform 0.2s, box-shadow 0.2s;
                    width: 18.75rem;
                    overflow: hidden;
                    color: #fff;
                }
                .repository-card:hover {
                    transform: translateY(-0.3125rem);
                    box-shadow: 0 0.375rem 0.9375rem rgba(255, 255, 255, 0.2);
                }
                .repository-card a {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-decoration: none;
                    color: inherit;
                    padding: 1.25rem;
                }
                .avatar {
                    width: 3.125rem;
                    height: 3.125rem;
                    border-radius: 50%;
                    margin-bottom: 0.625rem;
                }
                .repo-details {
                    text-align: center;
                }
                .repo-details h3 {
                    margin: 0.625rem 0 0.3125rem;
                    font-size: 1.125rem;
                }
                .repo-details p {
                    margin: 0;
                    color: #ccc;
                }
                .languages {
                    width: 100%;
                    margin-top: 0.625rem;
                }
                .language-wrapper {
                    display: flex;
                    align-items: center;
                    margin-bottom: 0.3125rem;
                }
                .language-bar {
                    height: 1.25rem;
                    flex-grow: 1;
                    margin-right: 0.3125rem;
                    border-radius: 0.25rem;
                }
                .language-label {
                    white-space: nowrap;
                    font-size: 0.75rem;
                    color: #fff;
                }
            `}</style>
        </main>
    );
}

// Helper function to get a color for a given programming language
const getColorForLanguage = (language: string) => {
    const colors: { [key: string]: string } = {
        JavaScript: "#f1e05a",
        Python: "#3572A5",
        Java: "#b07219",
        C: "#555555",
        "C++": "#f34b7d",
        TypeScript: "#2b7489",
        Ruby: "#701516",
        Go: "#00ADD8",
        PHP: "#4F5D95",
        Swift: "#ffac45",
        // Add more languages and colors as needed
    };
    return colors[language] || "#ccc"; // Default color if the language is not found
};
