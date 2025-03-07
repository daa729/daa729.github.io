// src/app/games/page.tsx
"use client";

import Head from 'next/head';
import Link from 'next/link';
import Hard from '../Assets/LokiTitle.jsx';
import { useState } from 'react';

interface GameCardProps {
  src: string;
  width: number;
  height: number;
  fallbackText: string;
}

function GameCard({ src, width, height, fallbackText }: GameCardProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative m-5 shadow-md transition-transform hover:-translate-y-1">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black text-white border border-gray-600 rounded">
          {fallbackText}
        </div>
      )}
      <iframe
        src={src}
        width={width}
        height={height}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
        style={{ display: loaded ? 'block' : 'none' }}
        className="rounded"
      />
    </div>
  );
}

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Head>
        <title>Games | Anderson Allen</title>
        <meta name="description" content="Games by Anderson Allen" />
      </Head>
      <header className="mb-8 text-center">
        <Hard text="Games" />
      </header>
      <main className="flex flex-wrap justify-center">
        <GameCard
          src="https://itch.io/embed/2722500?linkback=true&amp;border_width=0&amp;bg_color=afbfd2&amp;fg_color=222222&amp;link_color=fa5c5c&amp;border_color=b86a11"
          width={550}
          height={165}
          fallbackText="Apartment Apocalypse by Danderson.Allen"
        />
        <GameCard
          src="https://itch.io/embed/2722473?bg_color=000000&amp;fg_color=505050&amp;link_color=505050&amp;border_color=333333"
          width={552}
          height={167}
          fallbackText="Absent Light by Danderson.Allen"
        />
      </main>
      <footer className="mt-8 text-center">
        <Link href="/">
          <p className="underline">← Back to Home</p>
        </Link>
      </footer>
    </div>
  );
}
