import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { IpCopy } from "@/components/ip-copy";

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
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="text-5xl md:text-6xl">Ranks</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Five ranks, all cosmetic and quality-of-life. Purchases apply to your username on both Java
        and Bedrock. Edit these names, prices and perks any time.
      </p>
      <IpCopy className="mt-8 max-w-md" />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ranks.map((r) => (
          <div
            key={r.name}
            className={`glow-panel relative flex flex-col rounded-2xl p-6 ${
              r.featured ? "ring-1 ring-primary" : ""
            }`}
          >
            <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              {r.tag}
            </span>
            <h2 className="mt-2 text-4xl brand-gradient-text">{r.name}</h2>
            <p className="mt-1 text-2xl font-semibold">{r.price}</p>
            <ul className="mt-5 flex-1 space-y-2 text-sm text-muted-foreground">
              {r.perks.map((p) => (
                <li key={p} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {p}
                </li>
              ))}
            </ul>
            <button className="mt-6 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
              Buy {r.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}