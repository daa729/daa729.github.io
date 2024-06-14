// pages/index.js
import Head from 'next/head';
import ProjectCards from './ProjectCards'
import Hard from "@/app/Assets/LokiTitle";
import React from "react";

export default function Home() {
    return (
        <div>
            <Head>
                <title>My Portfolio</title>
                <meta name="description" content="Portfolio showcasing my VR development projects" />
            </Head>
            <main className="flex min-h-screen flex-col items-center justify-between p-6"
                  style={{backgroundColor: "#111", color: "#fff"}}>
                <div className="Loki">
                    <Hard text={"Rinker"}/>
                </div>


                <ProjectCards/>
            </main>
        </div>
    );
}
