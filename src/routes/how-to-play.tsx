import { createFileRoute } from "@tanstack/react-router";
import { IpCopy } from "@/components/ip-copy";
import { Reveal } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";
import { FloatingCube } from "@/components/floating-cube";
import { SERVER_IP, SERVER_PORT } from "@/lib/server-info";

export const Route = createFileRoute("/how-to-play")({
  head: () => ({
    meta: [
      { title: "How to Play — Drox SMP" },
      {
        name: "description",
        content:
          "Step-by-step join guide for Drox SMP on Java and Bedrock using play.droxsmp.fun with port 25585.",
      },
      { property: "og:title", content: "How to Play — Drox SMP" },
      {
        property: "og:description",
        content: "Connect on Java or Bedrock with play.droxsmp.fun port 25585.",
      },
      { property: "og:url", content: "/how-to-play" },
    ],
    links: [{ rel: "canonical", href: "/how-to-play" }],
  }),
  component: HowToPlayPage,
});

const java = [
  "Open Minecraft Java Edition (1.20 or newer).",
  "Click Multiplayer, then Add Server.",
  `Set the server address to ${SERVER_IP}:${SERVER_PORT}.`,
  "Save, then double-click Drox SMP to join.",
];

const bedrock = [
  "Open Minecraft Bedrock (mobile, console or Windows).",
  "Go to Play, then Servers, then Add Server.",
  `Enter ${SERVER_IP} as the address and ${SERVER_PORT} as the port.`,
  "Save and tap Join Server.",
];

function HowToPlayPage() {
  return (
    <div className="relative mx-auto max-w-5xl px-5 py-16">
      <FloatingCube className="animate-float absolute right-4 top-8 hidden lg:block" size={70} />
      <h1 className="animate-slide-left text-3d text-5xl md:text-6xl">How to play</h1>
      <p className="animate-fade-up mt-3 max-w-xl text-muted-foreground" style={{ animationDelay: "140ms" }}>
        Same IP, same port, same world — whichever edition you play on.
      </p>
      <Reveal className="mt-8">
        <IpCopy className="max-w-md" />
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {[
          { title: "Java Edition", steps: java },
          { title: "Bedrock Edition", steps: bedrock },
        ].map((col, ci) => (
          <Reveal key={col.title} delay={ci * 150} animation={ci ? "slide-right" : "slide-left"}>
            <TiltCard className="glow-panel rounded-2xl p-6">
              <div>
                <h2 className="text-3xl">{col.title}</h2>
                <ol className="mt-5 space-y-4">
                  {col.steps.map((st, i) => (
                    <li
                      key={st}
                      className="group flex gap-3 text-sm text-muted-foreground transition-all duration-300 hover:translate-x-1 hover:text-foreground"
                    >
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                        {i + 1}
                      </span>
                      {st}
                    </li>
                  ))}
                </ol>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <Reveal animation="scale-in" className="mt-8">
        <TiltCard max={5} className="glow-panel rounded-2xl p-6">
          <div>
            <h2 className="text-3xl">First steps in game</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Run <code className="font-mono text-foreground">/kit starter</code> at spawn, walk a
              few thousand blocks out, then claim your base with a golden shovel. Use{" "}
              <code className="font-mono text-foreground">/sethome</code> so you never lose it.
            </p>
          </div>
        </TiltCard>
      </Reveal>
    </div>
  );
}
