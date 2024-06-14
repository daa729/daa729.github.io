// components/ProjectCards.tsx
import styles from "/styles/ProjectCards.module.css";

interface SubProject {
    title: string;
    link?: string;
    abstract?: string;
}

interface Project {
    id: number;
    title: string;
    sponsor: string;
    role: string;
    details: string;
    link?: string;
    subProjects?: SubProject[];
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Working Safely with UAVs: Training Workers on Heights',
        sponsor: 'US Department of Labor',
        role: 'VR Developer',
        details: 'This project aimed at training workers on safety protocols when working with unmanned aerial vehicles (UAVs) at heights. The VR training module developed provides an interactive experience, enabling workers to practice and understand safety measures in a controlled environment.',
        link: 'https://ascelibrary.org/doi/10.1061/JCCEE5.CPENG-5140',
    },
    {
        id: 2,
        title: 'Investigating the Safety Challenges of Co-drones in Future Construction Workplaces',
        sponsor: 'National Science Foundation',
        role: 'VR Developer',
        details: 'This project included two experiments focusing on safety challenges of co-drones in construction sites.',
        subProjects: [
            {
                title: 'Experiment 1',
                link: 'https://www.sciencedirect.com/science/article/pii/S092658052300359X',
            },
            {
                title: 'Experiment 2',
                link: 'https://doi.org/10.1061/JCCEE5.CPENG-5225',
            },
        ],
    },
    {
        id: 3,
        title: 'VR NCCER: Virtual Orientation for Construction Professionals',
        sponsor: 'National Center for Construction Education & Research',
        role: 'Lead VR Developer',
        details: 'Developed a virtual orientation program for construction professionals, adhering to NCCER standards. This project is currently ongoing, with a focus on creating comprehensive VR training modules to improve safety and efficiency on construction sites.',
    },
    {
        id: 4,
        title: 'Safety Challenges of UAV Integration for Workers on Heights',
        sponsor: 'NIOSH-funded Center for Construction Research and Training (CPWR)',
        role: 'VR Developer',
        details: 'Developed a VR training module addressing safety challenges when integrating UAVs for workers at heights, focusing on risk mitigation and safe operational practices.',
        link: 'https://ascelibrary.org/doi/abs/10.1061/JCEMD4.COENG-13861',
    },
    {
        id: 5,
        title: 'Bi-Directional Human-Drone Communication',
        sponsor: 'National Science Foundation',
        role: 'VR Developer',
        details: 'This project involved two experiments on human-drone communication in construction sites.',
        subProjects: [
            {
                title: 'Safe Human-Drone Interaction in Construction Using Gesture and Speech Modalities',
                abstract: 'Explored the effectiveness of gesture-based communication over speech for ensuring safety and reducing cognitive load.',
            },
            {
                title: 'Bi-directional Communication Between Humans and Drones',
                abstract: 'Investigated the impacts of drone-initiated communication on safety and worker perceptions.',
            },
        ],
    },
    {
        id: 6,
        title: 'VirtuAI: LLM Powered Interactive VR Safety Training for Construction Workers',
        sponsor: 'TBD',
        role: 'Lead VR Developer',
        details: 'Currently developing an interactive VR safety training program powered by large language models (LLM) for construction workers. This project aims to create a highly responsive and immersive training environment to enhance learning and safety protocols.',
    },
];

const ProjectCards = () => {
    return (
        <div className={styles.container}>
            {projects.map((project) => (
                <div key={project.id} className={styles.card}>
                    <h2>{project.title}</h2>
                    <p><strong>Sponsor:</strong> {project.sponsor}</p>
                    <p><strong>Role:</strong> {project.role}</p>
                    <p>{project.details}</p>
                    {project.link && (
                        <p><a href={project.link} target="_blank" rel="noopener noreferrer">Find Out More</a></p>
                    )}
                    {project.subProjects && (
                        <ul>
                            {project.subProjects.map((subProject, index) => (
                                <li key={index}>
                                    <p><strong>{subProject.title}</strong></p>
                                    {subProject.link && (
                                        <p><a href={subProject.link} target="_blank" rel="noopener noreferrer">Find Out More</a></p>
                                    )}
                                    {subProject.abstract && (
                                        <p>{subProject.abstract}</p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProjectCards;
