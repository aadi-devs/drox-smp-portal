import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/rules")({
  head: () => ({
    meta: [
      { title: "Server Rules — Drox SMP" },
      {
        name: "description",
        content:
          "The rules every Drox SMP player agrees to: no griefing, no cheating, no harassment. Read before you join play.droxsmp.fun.",
      },
      { property: "og:title", content: "Server Rules — Drox SMP" },
      {
        property: "og:description",
        content: "No griefing, no cheating, no harassment — the full Drox SMP rulebook.",
      },
      { property: "og:url", content: "/rules" },
    ],
    links: [{ rel: "canonical", href: "/rules" }],
  }),
  component: RulesPage,
});

const rules = [
  { title: "No griefing or stealing", body: "Do not break, burn or loot builds and chests that aren't yours, claimed or not." },
  { title: "No cheating", body: "X-ray, kill aura, auto-clickers, fly hacks and any unfair client mod result in a permanent ban." },
  { title: "Be respectful", body: "No harassment, slurs, hate speech or targeted toxicity in chat, DMs or voice." },
  { title: "No spam or advertising", body: "Keep chat clean. Advertising other servers or shops is an instant mute." },
  { title: "No lag machines", body: "Massive redstone clocks, mob farms without hoppers and entity stacking will be removed." },
  { title: "One account per player", body: "Alt accounts used to bypass punishments or duplicate rewards will be banned." },
  { title: "Keep builds appropriate", body: "No offensive builds, skins or signs. Leave space between your base and others." },
  { title: "Staff decisions are final", body: "Appeal calmly in Discord instead of arguing in public chat." },
];

function RulesPage() {
  return (
    <div className="relative mx-auto max-w-4xl px-5 py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-10 h-[380px] w-[380px] rounded-full bg-accent/15 blur-[130px]"
      />
      <h1 className="animate-slide-left text-3d relative text-5xl md:text-6xl">Rules</h1>
      <p className="animate-fade-up relative mt-3 text-muted-foreground" style={{ animationDelay: "120ms" }}>
        Joining Drox SMP means you accept these rules. Ignorance isn't a defence.
      </p>
      <ol className="relative mt-10 space-y-4">
        {rules.map((r, i) => (
          <li key={r.title}>
            <Reveal delay={i * 60}>
              <div className="glow-panel flex gap-4 rounded-2xl p-5 transition-colors duration-300 hover:border-primary/40">
                <span className="font-display text-3xl leading-none text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-2xl">{r.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{r.body}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
