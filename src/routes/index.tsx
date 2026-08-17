import { createFileRoute, Link } from "@tanstack/react-router";
import { Swords, Users, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-characters.png";
import smokeImg from "@/assets/smoke.jpg";
import { IpCopy } from "@/components/ip-copy";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Drox SMP — Java & Bedrock Minecraft Server" },
      {
        name: "description",
        content:
          "Join Drox SMP at play.droxsmp.fun:25585. A survival multiplayer world for Java and Bedrock players with ranks, events and a friendly community.",
      },
      { property: "og:title", content: "Drox SMP — Java & Bedrock Minecraft Server" },
      {
        property: "og:description",
        content: "Survival multiplayer on play.droxsmp.fun:25585. Java and Bedrock supported.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const features = [
  {
    icon: Swords,
    title: "Pure Survival",
    body: "Lifesteal-free vanilla-plus survival with land claims, quality-of-life plugins and zero pay-to-win.",
  },
  {
    icon: Users,
    title: "Cross Platform",
    body: "Java and Bedrock players share the same world on the same IP and port. No mods required.",
  },
  {
    icon: ShieldCheck,
    title: "Active Staff",
    body: "Griefing, cheating and toxicity handled fast by a staff team online almost every hour.",
  },
];

function Index() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <img
          src={smokeImg}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-screen"
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Java + Bedrock
            </p>
            <h1 className="mt-4 text-5xl leading-[0.95] md:text-7xl">
              Adventures that <span className="brand-gradient-text">wait for you</span>
            </h1>
            <p className="mt-5 max-w-md text-muted-foreground">
              Drox SMP is a long-term survival world built for players who want to stay. Build,
              trade, fight and rise through the ranks.
            </p>
            <IpCopy className="mt-8 max-w-md" />
            <div className="mt-6 flex gap-3">
              <Link
                to="/how-to-play"
                className="rounded-lg bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/70"
              >
                How to join
              </Link>
            </div>
          </div>
          <img
            src={heroImg}
            alt="Drox SMP Minecraft characters in purple smoke"
            width={1280}
            height={1024}
            className="w-full drop-shadow-[0_30px_60px_oklch(0.58_0.24_300_/_0.45)]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="glow-panel rounded-2xl p-6">
              <f.icon className="h-6 w-6 text-primary" />
              <h2 className="mt-4 text-2xl">{f.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>

        <div className="glow-panel mt-14 flex flex-col items-center rounded-3xl px-6 py-14 text-center">
          <h2 className="text-4xl md:text-5xl">Ready to spawn in?</h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            Grab a rank in the shop or read the rules first — either way, the world is already
            running.
          </p>
          <div className="mt-7 flex gap-3">
            <Link
              to="/shop"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              View ranks
            </Link>
            <Link
              to="/rules"
              className="rounded-lg border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Read rules
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
