"use client"
import { Fragment, useState } from "react";
import Hard from "../Assets/LokiTitle.jsx";
import {link} from "node:fs";

// Define the props interface for the Card component
interface CardProps {
    company: string;
    title: string;
    years: string;
    description: string;
    image: string;
    link?: string;
}

function Card({ company, title, years, description, image,link }: CardProps) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className={`card ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
            <div className="card-inner">
                <div className="card-front">
                    <img src={image} alt={`${company} logo`} className="card-image" />
                    <div className="card-content">
                        <h3>{company}</h3>
                        <p>{title}</p>
                    </div>
                </div>
                <div className="card-back">
                    <div className="card-content">
                        <p>{years}</p>
                        <p>{description}</p>
                        {link && (
                            <a href={link} target="_blank" rel="noopener noreferrer">Find out More!</a>
                        )}
                    </div>
                </div>
            </div>
            <style jsx>{`
                .card {
                    width: 300px;
                    height: 200px;
                    perspective: 1000px;
                    margin: 20px;
                    transition: transform 0.2s, box-shadow 0.2s;
                    box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
                    cursor: pointer;
                }
                .card:hover {
                    transform: translateY(-0.3125rem);
                    box-shadow: 0 0.375rem 0.9375rem rgba(255, 255, 255, 0.2);
                }
                .card-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    transition: transform 0.6s;
                    transform-style: preserve-3d;
                }
                .card.flipped .card-inner {
                    transform: rotateY(180deg);
                }
                .card-front, .card-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    backface-visibility: hidden;
                    border: 1px solid #555;
                    border-radius: 8px;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #000;
                    color: #fff;
                }
                .card-front {
                    z-index: 2;
                    transform: rotateY(0deg);
                }
                .card-back {
                    transform: rotateY(180deg);
                }
                .card-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.3;
                }
                .card-content {
                    position: absolute;
                    padding: 20px;
                    text-align: center;
                }
                .card-content h3 {
                    margin: 10px 0;
                }
                .card-content p {
                    margin: 5px 0;
                    color: #ccc;
                }
            `}</style>
        </div>
    );
}

export default function Home() {
    const experienceData: CardProps[] = [
        {
            company: "University of Florida",
            title: "Research Assistant",
            years: "Aug 2021 - Present",
            description: "Development of 5+ Unity applications utilizing Vive Pro Eye, Meta VR API's and Chat Gpt integration.",
            image: "https://dcp.ufl.edu/rinker/wp-content/uploads/sites/40/2021/09/FullColor_RinkerSeal-1.png",
            link: "/RinkerLab"
        },
        {
            company: "UF Esports Club",
            title: "Founder, Community Coordinator, Vice President, President",
            years: "2022 - Apr 2024",
            description: "Led a club of 120 Esports players managing their competition and community partners",
            image: "/GatorEsports.svg"
        },
        {
            company: "Summit Wash Holdings",
            title: "Research and Development Intern",
            years: "May 2023 - Aug 2023",
            description: "Researched and developed a localized integration of a large language model with access to the company's internal data. ",
            image: "https://media.licdn.com/dms/image/D4E0BAQEtK2Zw8iWQNQ/company-logo_200_200/0/1710291980252/summit_wash_holdings_logo?e=1724889600&v=beta&t=81EQBpoge-A9Wnd_pBToXqI21pyBNkGsUbMb4v-_r2k"
        },
        {
            company: "Dance Marathon",
            title: "Captain - Assistant Director of Design and Technology",
            years: "Aug 2019 - Apr 2023",
            description: "Developed an application and the design of the website for Dance Marathon at the University of Florida",
            image: "https://media.licdn.com/dms/image/C4E0BAQGGqjGZSx-6kg/company-logo_200_200/0/1630609564675/dance_marathon_at_the_university_of_florida_logo?e=1724889600&v=beta&t=xJfoiXAePIM7ey-g7F6u1p6LI3adZHRP9zGhToJnMO0"
        },
        {
            company: "Code Wiz",
            title: "Code Coach (Tutor)",
            years: "Aug 2021 - Sep 2022",
            description: "Taught children ranging in age 7-16 video game development focusing on Unity and Roblox Tools",
            image: "https://media.licdn.com/dms/image/C560BAQG0f9wmL9NAAw/company-logo_200_200/0/1674675949043/code_wiz_logo?e=1724889600&v=beta&t=oXjVEb42NYZTofbYIHZ4jxDEiXkdDpQhTVbC884URNI"
        },
        {
            company: "Agritisan - Singapore ",
            title: "Digital Marketing and Software Development Intern",
            years: "Jun 2022 - Aug 2022 ",
            description: "Internship abroad with UF focused on social good. Developed Website and learning application for Agritisan.",
            image: "https://agritisan.sg/wp-content/uploads/2023/01/IMG-20230414-WA0003-1024x767.png"
        },
        {
            company: "Chick-fil-A",
            title: "Team Member - Trainer ",
            years: "Feb 2018 - Aug 2021",
            description: "Front of House Employee that served and taught multiple roles regarding service to guests.",
            image: "https://media.licdn.com/dms/image/C560BAQGN5CO-aQIA-w/company-logo_200_200/0/1656423785939/chick_fil_a_franchise_logo?e=1724889600&v=beta&t=m5-3Zthq8NJopmEXDyIhJusYIlqfS9F_9K26vxEE81k"
        },
    ];

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ backgroundColor: "#111", color: "#fff" }}>
            <Hard text="Experience" />
            <div className="cards-container">
                {experienceData.map((exp, index) => (
                    <Card
                        key={index}
                        company={exp.company}
                        title={exp.title}
                        years={exp.years}
                        description={exp.description}
                        image={exp.image}
                        link={exp.link}
                    />
                ))}
            </div>
            <style jsx>{`
                .cards-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 20px;
                }
            `}</style>
        </main>
    );
}
