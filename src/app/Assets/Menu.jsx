// src/components/Menu.tsx

"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";// Ensure you're using the correct import
import styles from "/styles/menu.module.css";

export default function Menu() {
   const currentPath = usePathname()

    console.log("Current Path:", currentPath); // Debugging statement

    if (currentPath === "/") {
        return null; // Hide the menu on the home page
    }

    return (
        <nav className={styles.menu}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/experience">Experience</Link></li>
                <li><Link href="/games">Games</Link></li>
            </ul>
        </nav>
    );
}
