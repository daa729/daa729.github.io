"use client";

import { useEffect } from "react";
import localFont from "next/font/local";

const quicky = localFont({
    src: [
        {
            path: '/fonts/quicky-story-font/QuickyStory-8Oa82.otf',
            weight: '400'
        }
    ],
    variable: '--font-quicky'
});
const diaclone = localFont({
    src: [
        {
            path: '/fonts/dia-clone-font/DiacloneGradient-KV7a7.otf',
            weight: '400'
        }
    ],
    variable: '--font-diaclone'
});
const runtoe = localFont({
    src: [
        {
            path: '/fonts/runtoe-font/Runtoe-R9vKo.otf',
            weight: '400'
        }
    ],
    variable: '--font-runtoe'
});
const superpen = localFont({
    src: [
        {
            path: '/fonts/super-pencil-font/SuperPencil-ARGw7.ttf',
            weight: '400'
        }
    ],
    variable: '--font-superpen'
});
const youchat = localFont({
    src: [
        {
            path: '/fonts/youchat-font/Youchat-DYYP9.otf',
            weight: '400'
        }
    ],
    variable: '--font-youchat'
});

export default function Hard({ text }) {
    useEffect(() => {
        const fonts = [quicky, diaclone, runtoe, superpen, youchat];

        const applyRandomFonts = () => {
            const letters = document.getElementsByClassName('letter');
            Array.from(letters).forEach(letter => {
                const randomFontIndex = Math.floor(Math.random() * fonts.length);
                const randomFont = fonts[randomFontIndex];
                letter.style.fontFamily = randomFont.style.fontFamily;
            });
        };

        const startIntroAnimation = () => {
            applyRandomFonts();
            let introAnimation = setInterval(applyRandomFonts, 500); // Change fonts every second
            return () => clearInterval(introAnimation); // Clear interval on cleanup
        };

        const cleanup = startIntroAnimation();
        return cleanup; // Cleanup function to clear the interval
    }, []);

    return (
        <div className="Loki">
            {text.split("").map((char, index) => (
                <span key={index} className="letter">{char}</span>
            ))}
            <style jsx>{`
                .Loki {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    width: 100%;
                    height: 20vh; /* Set a fixed height */
                    overflow: hidden; /* Hide overflow */
                }
                .letter {
                    font-size: calc(2vw + 2vh + 1.5vmin); // Responsive font size
                    transition: font-size 0.3s ease;
                }
                @media (max-width: 768px) {
                    .letter {
                        font-size: calc(4vw + 4vh + 1.5vmin); // Larger font size for smaller screens
                    }
                }
                @media (max-width: 480px) {
                    .letter {
                        font-size: calc(6vw + 6vh + 1.5vmin); // Even larger font size for very small screens
                    }
                }
            `}</style>
        </div>
    );
}
