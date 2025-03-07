import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import styles from "/styles/menu.module.css";
import "./globals.css";
import Menu from "./Assets/Menu"; // Import the client-side Menu component

const inter = Inter({ subsets: ["latin"] });
const quicky = localFont({
  src:[
    {
      path: '/Assets/fonts/quicky-story-font/QuickyStory-8Oa82.otf',
      weight:'400'
    }
  ],
  variable: '--font-quicky'
});
const diaclone = localFont({
  src:[
    {
      path: '/Assets/fonts/dia-clone-font/DiacloneWide-KV7ay.otf',
      weight:'500'
    }
  ],
  variable: '--font-diaclone'
});
const runtoe = localFont({
  src:[
    {
      path: '/Assets/fonts/runtoe-font/Runtoe-R9vKo.otf',
      weight:'400'
    }
  ],
  variable: '--font-runtoe'
});
const superpen = localFont({
  src:[
    {
      path: '/Assets/fonts/super-pencil-font/SuperPencil-ARGw7.ttf',
      weight:'400'
    }
  ],
  variable: '--font-superpen'
});
const youchat = localFont({
  src:[
    {
      path: '/Assets/fonts/youchat-font/Youchat-DYYP9.otf',
      weight:'400'
    }
  ],
  variable: '--font-youchat'
});

export const metadata: Metadata = {
  title: "Anderson Allen's Portfolio",
  description: "A Collection of work and experience.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={inter.className}>
      {children}
      </body>
      </html>
  );
}
