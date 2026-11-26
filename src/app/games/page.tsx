import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import GameEmbed from "@/components/GameEmbed";

export const metadata: Metadata = {
  title: "Games",
  description: "Games by Anderson Allen.",
};

const games = [
  {
    title: "Apartment Apocalypse",
    src: "https://itch.io/embed/2722500?linkback=true&border_width=0&bg_color=151B25&fg_color=E9EDF3&link_color=FA4616&border_color=263042",
  },
  {
    title: "Absent Light",
    src: "https://itch.io/embed/2722473?linkback=true&border_width=0&bg_color=151B25&fg_color=E9EDF3&link_color=FA4616&border_color=263042",
  },
];

export default function GamesPage() {
  return (
    <PageShell title="Games" intro="Games I've made, playable on itch.io.">
      <div className="grid gap-6 lg:grid-cols-2">
        {games.map((game) => (
          <GameEmbed key={game.src} {...game} />
        ))}
      </div>
    </PageShell>
  );
}
