import { createFileRoute } from "@tanstack/react-router";
import { Check, Sparkles } from "lucide-react";
import { IpCopy } from "@/components/ip-copy";
import { Reveal } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";
import { Magnetic } from "@/components/magnetic";
import { Particles } from "@/components/particles";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Ranks & Shop — Drox SMP" },
      {
        name: "description",
        content:
          "Browse the five Drox SMP ranks — Stone, Iron, Diamond, Netherite and Drox — with perks, kits and pricing.",
      },
      { property: "og:title", content: "Ranks & Shop — Drox SMP" },
      {
        property: "og:description",
        content: "Five ranks with cosmetic and quality-of-life perks on Drox SMP.",
      },
      { property: "og:url", content: "/shop" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: ShopPage,
});

const ranks = [
  {
    name: "Stone",
    price: "$3",
    tag: "Starter",
    featured: false,
    perks: ["Stone chat prefix", "/kit stone weekly", "2 home slots", "Coloured chat"],
  },
  {
    name: "Iron",
    price: "$7",
    tag: "Popular start",
    featured: false,
    perks: ["Iron chat prefix", "/kit iron weekly", "4 home slots", "/nick access", "1 extra claim"],
  },
  {
    name: "Diamond",
    price: "$14",
    tag: "Best value",
    featured: true,
    perks: [
      "Diamond chat prefix",
      "/kit diamond weekly",
      "8 home slots",
      "/feed and /heal",
      "Queue priority",
    ],
  },
  {
    name: "Netherite",
    price: "$24",
    tag: "Advanced",
    featured: false,
    perks: [
      "Netherite chat prefix",
      "/kit netherite weekly",
      "12 home slots",
      "/ec and /wb access",
      "Particle trails",
    ],
  },
  {
    name: "Drox",
    price: "$45",
    tag: "Top tier",
    featured: false,
    perks: [
      "Animated Drox prefix",
      "/kit drox weekly",
      "Unlimited homes",
      "/fly in claims",
      "Custom join message",
    ],
  },
];

function ShopPage() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="animate-aurora pointer-events-none absolute left-1/3 top-0 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[130px]"
      />
      <Particles className="opacity-60" />
      <div className="relative mx-auto max-w-6xl px-5 py-16">
        <h1 className="animate-slide-left text-3d text-5xl md:text-6xl">Ranks</h1>
        <p className="animate-fade-up mt-3 max-w-xl text-muted-foreground" style={{ animationDelay: "140ms" }}>
          Five ranks, all cosmetic and quality-of-life. Purchases apply to your username on both
          Java and Bedrock. Edit these names, prices and perks any time.
        </p>
        <Reveal className="mt-8">
          <IpCopy className="max-w-md" />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ranks.map((r, i) => (
            <Reveal key={r.name} delay={i * 110} animation="scale-in">
              <TiltCard
                className={`glow-panel rounded-2xl p-6 ${r.featured ? "ring-1 ring-primary" : ""}`}
              >
                <div className="group flex h-full flex-col">
                  {r.featured && (
                    <span className="animate-glow-pulse absolute -top-3 right-4 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground [animation-duration:2.5s] [filter:none]">
                      <Sparkles className="h-3 w-3" /> Popular
                    </span>
                  )}
                  <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    {r.tag}
                  </span>
                  <h2 className="brand-gradient-text mt-2 text-4xl transition-transform duration-500 group-hover:translate-x-1">
                    {r.name}
                  </h2>
                  <p className="mt-1 text-2xl font-semibold">{r.price}</p>
                  <ul className="mt-5 flex-1 space-y-2 text-sm text-muted-foreground">
                    {r.perks.map((p, pi) => (
                      <li
                        key={p}
                        className="flex gap-2 transition-all duration-300 hover:translate-x-1 hover:text-foreground"
                        style={{ transitionDelay: `${pi * 20}ms` }}
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Magnetic className="mt-6 block" strength={0.2}>
                    <button className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[var(--glow-brand)]">
                      Buy {r.name}
                    </button>
                  </Magnetic>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
