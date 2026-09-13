import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Coins, KeyRound, Sparkles, Crown, Swords, Heart } from "lucide-react";
import { IpCopy } from "@/components/ip-copy";
import { Reveal } from "@/components/reveal";
import { DiscordDialog } from "@/components/discord-dialog";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Store — Drox SMP" },
      {
        name: "description",
        content:
          "Drox SMP store — ranks, crate keys and coin bundles for Survival and Lifesteal. Buy through our Discord in minutes.",
      },
      { property: "og:title", content: "Store — Drox SMP" },
      {
        property: "og:description",
        content: "Ranks, crate keys and coins for Drox SMP Survival and Lifesteal.",
      },
      { property: "og:url", content: "/shop" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: ShopPage,
});

// Edit names, prices and perks any time — the hierarchy below is highest first.
const ranks = [
  {
    name: "Droxer",
    price: "$45",
    tag: "Top tier",
    featured: true,
    perks: ["Animated Droxer prefix", "/kit droxer weekly", "Unlimited homes", "/fly in claims", "Custom join message"],
  },
  {
    name: "Immortal",
    price: "$30",
    tag: "Elite",
    featured: false,
    perks: ["Immortal chat prefix", "/kit immortal weekly", "12 home slots", "/ec and /wb access", "Particle trails"],
  },
  {
    name: "Ace",
    price: "$18",
    tag: "Best value",
    featured: false,
    perks: ["Ace chat prefix", "/kit ace weekly", "8 home slots", "/feed and /heal", "Queue priority"],
  },
  {
    name: "Prime",
    price: "$10",
    tag: "Popular start",
    featured: false,
    perks: ["Prime chat prefix", "/kit prime weekly", "4 home slots", "/nick access", "1 extra claim"],
  },
  {
    name: "Hero",
    price: "$4",
    tag: "Starter",
    featured: false,
    perks: ["Hero chat prefix", "/kit hero weekly", "2 home slots", "Coloured chat"],
  },
];

const crateKeys = ranks.map((r) => ({
  name: `${r.name} Key`,
  price: r.featured ? "$9" : r.name === "Immortal" ? "$7" : r.name === "Ace" ? "$5" : r.name === "Prime" ? "$3" : "$2",
  tag: r.tag,
  featured: r.featured,
  perks: ["Guaranteed rare loot", "Bonus XP inside", "Chance at cosmetics", "Stackable — never expires"],
}));

const coinBundles = [
  { name: "Pouch", coins: "1,000", price: "$2", tag: "Starter", featured: false },
  { name: "Bag", coins: "3,000", price: "$5", tag: "Saver", featured: false },
  { name: "Chest", coins: "7,500", price: "$10", tag: "Best value", featured: true },
  { name: "Vault", coins: "18,000", price: "$20", tag: "Popular", featured: false },
  { name: "Fortune", coins: "50,000", price: "$45", tag: "Whale", featured: false },
];

const categories = [
  { id: "ranks", label: "Ranks", icon: Crown },
  { id: "keys", label: "Crate Keys", icon: KeyRound },
  { id: "coins", label: "Coins", icon: Coins },
] as const;

type Category = (typeof categories)[number]["id"];
type Mode = "survival" | "lifesteal";

function BuyButton({ label, title, intent }: { label: string; title: string; intent: string }) {
  return (
    <DiscordDialog title={title} intent={intent}>
      <button className="soft mt-6 w-full rounded-xl bg-[image:var(--gradient-brand)] px-4 py-3 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 hover:shadow-[var(--glow-brand)] active:translate-y-0">
        {label}
      </button>
    </DiscordDialog>
  );
}

function ItemCard({
  item,
  index,
  meta,
  perks,
  mode,
  kind,
}: {
  item: { name: string; price: string; tag: string; featured: boolean };
  index: number;
  meta?: string;
  perks: string[];
  mode: Mode;
  kind: string;
}) {
  return (
    <Reveal delay={index * 90}>
      <div
        className={`glow-panel relative h-full rounded-2xl p-6 transition-colors duration-300 hover:border-primary/40 ${item.featured ? "ring-1 ring-primary" : ""}`}
      >
        <div className="flex h-full flex-col">
          {item.featured && (
            <span className="absolute -top-3 right-4 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">
              <Sparkles className="h-3 w-3" /> Popular
            </span>
          )}
          <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{item.tag}</span>
          <h3 className="brand-gradient-text mt-2 text-4xl">{item.name}</h3>
          {meta && <p className="mt-1 text-sm font-medium text-primary">{meta}</p>}
          <p className="mt-1 text-2xl font-semibold">{item.price}</p>
          <ul className="mt-5 flex-1 space-y-2 text-sm text-muted-foreground">
            {perks.map((p, pi) => (
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
          <BuyButton
            label={`Buy ${item.name}`}
            title={`Buy ${item.name}`}
            intent={`To buy ${item.name} (${kind}, ${mode === "survival" ? "Survival" : "Lifesteal"}), join the Drox SMP Discord and create a ticket. Our team will apply it to your username.`}
          />
        </div>
      </TiltCard>
    </Reveal>
  );
}

function ShopPage() {
  const [mode, setMode] = useState<Mode>("survival");
  const [category, setCategory] = useState<Category>("ranks");

  return (
    <div className="relative">
      <div
        aria-hidden
        className="animate-aurora pointer-events-none absolute left-1/3 top-0 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[130px]"
      />
      <Particles className="opacity-60" />
      <div className="relative mx-auto max-w-6xl px-5 py-16">
        <h1 className="animate-slide-left text-3d text-5xl md:text-6xl">Store</h1>
        <p className="animate-fade-up mt-3 max-w-xl text-muted-foreground" style={{ animationDelay: "140ms" }}>
          Ranks, crate keys and coin bundles for both game modes. Purchases apply to your username on
          Java and Bedrock. Edit any name, price or perk any time.
        </p>
        <Reveal className="mt-8">
          <IpCopy className="max-w-md" />
        </Reveal>

        {/* Game mode switcher */}
        <Reveal className="mt-10">
          <div className="glow-panel inline-flex rounded-2xl p-1.5">
            {(
              [
                { id: "survival", label: "Survival", icon: Swords },
                { id: "lifesteal", label: "Lifesteal", icon: Heart },
              ] as const
            ).map((m) => (
              <button
                key={m.id}
                onClick={() => setMode(m.id)}
                className={`soft flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold ${
                  mode === m.id
                    ? "bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--glow-brand)]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <m.icon className="h-4 w-4" />
                {m.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Category switcher */}
        <Reveal className="mt-5" delay={80}>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={`soft flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium ${
                  category === c.id
                    ? "border-primary/60 bg-primary/15 text-foreground"
                    : "border-border/70 bg-background/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                <c.icon className="h-4 w-4 text-primary" />
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div key={`${mode}-${category}`} className="animate-fade-up mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {category === "ranks" &&
            ranks.map((r, i) => (
              <ItemCard key={r.name} item={r} index={i} perks={r.perks} mode={mode} kind="rank" />
            ))}
          {category === "keys" &&
            crateKeys.map((k, i) => (
              <ItemCard key={k.name} item={k} index={i} perks={k.perks} mode={mode} kind="crate key" />
            ))}
          {category === "coins" &&
            coinBundles.map((b, i) => (
              <ItemCard
                key={b.name}
                item={{ name: b.name, price: b.price, tag: b.tag, featured: b.featured }}
                index={i}
                meta={`${b.coins} coins`}
                perks={["Delivered instantly via ticket", "Spend in-game at /shop", "Works on Java and Bedrock"]}
                mode={mode}
                kind="coin bundle"
              />
            ))}
        </div>
      </div>
    </div>
  );
}
