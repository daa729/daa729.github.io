"use client"
import { Fragment, useState } from "react";
import Hard from "../Assets/LokiTitle.jsx";
import { Card, CardBody } from "@nextui-org/card";

// Define the props interface for the GameCard component
interface GameCardProps {
    src: string;
    width: number;
    height: number;
    fallbackText: string;
}

function GameCard({ src, width, height, fallbackText }: GameCardProps) {
    const [loaded, setLoaded] = useState(false);

    const handleLoad = () => setLoaded(true);
    const handleError = () => setLoaded(false);

    return (
        <div className="game-card">
            {loaded ? null : <div className="fallback">{fallbackText}</div>}
            <iframe
                src={src}
                width={width}
                height={height}
                onLoad={handleLoad}
                onError={handleError}
                style={{ display: loaded ? 'block' : 'none' }}
            />
            <style jsx>{`
                .game-card {
                    position: relative;
                    width: ${width}px;
                    height: ${height}px;
                    perspective: 1000px;
                    margin: 20px;
                    transition: transform 0.2s, box-shadow 0.2s;
                    box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
                }
                .game-card:hover {
                    transform: translateY(-0.3125rem);
                    box-shadow: 0 0.375rem 0.9375rem rgba(255, 255, 255, 0.2);
                }
                .fallback {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #000;
                    color: #fff;
                    border: 1px solid #555;
                    border-radius: 8px;
                }
            `}</style>
        </div>
    );
}

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center " style={{ backgroundColor: "#000", color: "#fff" }}>
            <Hard text="Games" />
            <div className="gap-2 row-auto">
                <Card>
                    <CardBody>
                        <GameCard
                            src="https://itch.io/embed/2722500?linkback=true&amp;border_width=0&amp;bg_color=afbfd2&amp;fg_color=222222&amp;link_color=fa5c5c&amp;border_color=b86a11"
                            width={550}
                            height={165}
                            fallbackText="Apartment Apocalypse by Danderson.Allen"
                        />
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <GameCard
                            src="https://itch.io/embed/2722473?bg_color=000000&amp;fg_color=505050&amp;link_color=505050&amp;border_color=333333"
                            width={552}
                            height={167}
                            fallbackText="Absent Light by Danderson.Allen"
                        />
                    </CardBody>
                </Card>
            </div>
            <style jsx>{`
                .grid {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 20px;
                }
                .card {
                    background: #000;
                    border: 1px solid #555;
                    border-radius: 0.5rem;
                    box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
                    transition: transform 0.2s, box-shadow 0.2s;
                    width: 18.75rem;
                    overflow: hidden;
                    color: #fff;
                }
                .card:hover {
                    transform: translateY(-0.3125rem);
                    box-shadow: 0 0.375rem 0.9375rem rgba(255, 255, 255, 0.2);
                }
            `}</style>
        </main>
    );
}
