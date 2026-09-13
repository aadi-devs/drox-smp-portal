import { createFileRoute, Link } from "@tanstack/react-router";
import { Swords, Users, ShieldCheck, ArrowRight, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-characters.png";
import smokeImg from "@/assets/smoke.jpg";
import { IpCopy } from "@/components/ip-copy";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Drox SMP — Java & Bedrock Minecraft Server" },
      {
        name: "description",
        content:
          "Join Drox SMP at play.droxsmp.fun:19150. A survival multiplayer world for Java and Bedrock players with ranks, events and a friendly community.",
      },
      { property: "og:title", content: "Drox SMP — Java & Bedrock Minecraft Server" },
      {
        property: "og:description",
        content: "Survival multiplayer on play.droxsmp.fun:19150. Java and Bedrock supported.",
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

const stats = [
  { n: 24, suffix: "/7", body: "Always online, low ping hardware for Java and Bedrock." },
  { n: 40, suffix: "K", body: "Blocks of claimable land and a map that keeps expanding." },
  { n: 15, suffix: "+", body: "Custom events, ranks and quality-of-life plugins." },
  { n: 100, suffix: "%", body: "No pay-to-win. Every rank is cosmetic and convenience only." },
];

function Index() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[image:var(--gradient-hero)]">
        <img
          src={smokeImg}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -right-10 top-0 h-full w-[75%] object-cover opacity-60 mix-blend-screen"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-accent/20 blur-[120px]"
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 pb-16 pt-14 md:grid-cols-2 md:pb-24 md:pt-20">
          <div>
            <h1 className="animate-slide-left text-3d text-5xl leading-[1.05] md:text-6xl">
              Adventures
              <br />
              are waiting for you
            </h1>
            <p
              className="animate-fade-up mt-6 max-w-sm text-sm text-muted-foreground"
              style={{ animationDelay: "150ms" }}
            >
              Discover huge worlds without any boundaries, full of fun and thousands of friends on
              Drox SMP.
            </p>
            <div className="animate-fade-up mt-9" style={{ animationDelay: "250ms" }}>
              <Link
                to="/how-to-play"
                className="group inline-flex items-center gap-16 rounded-xl border border-primary/40 bg-background/40 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] backdrop-blur-xl transition-colors duration-300 hover:border-primary/70 hover:bg-primary/15"
              >
                Play now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div
              className="animate-fade-up mt-8 flex items-center gap-3 text-sm text-muted-foreground"
              style={{ animationDelay: "350ms" }}
            >
              <span className="relative grid h-4 w-4 place-items-center">
                <span className="absolute h-4 w-4 animate-ping rounded-full bg-primary/60" />
                <span className="h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="tracking-[0.2em]">
                Players online <CountUp value={871} className="text-foreground" />
              </span>
            </div>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
            <img
              src={heroImg}
              alt="Drox SMP Minecraft characters in purple smoke"
              width={1280}
              height={1024}
              className="w-full drop-shadow-[0_30px_60px_oklch(0.58_0.24_300_/_0.35)]"
            />
          </div>
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-8 px-5 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((st, i) => (
            <Reveal key={st.suffix + i} delay={i * 100}>
              <div className="p-2">
                <p className="text-3xl font-bold md:text-4xl">
                  <CountUp value={st.n} suffix={st.suffix} />
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{st.body}</p>
                <span className="mt-3 block h-px w-10 bg-[image:var(--gradient-brand)]" />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="relative flex items-center justify-center gap-3 pb-10 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <ChevronDown className="h-4 w-4" />
          Scroll down
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <Reveal className="pt-16">
          <IpCopy className="mx-auto max-w-xl" />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 120}>
              <div className="glow-panel h-full rounded-2xl p-6 transition-colors duration-300 hover:border-primary/40">
                <f.icon className="h-6 w-6 text-primary" />
                <h2 className="mt-4 text-2xl">{f.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="glow-panel rounded-3xl px-6 py-14">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3d text-4xl md:text-5xl">Ready to spawn in?</h2>
              <p className="mt-3 max-w-lg text-muted-foreground">
                Grab a rank in the shop or read the rules first — either way, the world is already
                running.
              </p>
              <div className="mt-7 flex gap-3">
                <Link
                  to="/shop"
                  className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors duration-300 hover:bg-primary/90"
                >
                  View ranks
                </Link>
                <Link
                  to="/rules"
                  className="inline-block rounded-lg border border-border px-6 py-3 text-sm font-semibold transition-colors duration-300 hover:bg-secondary"
                >
                  Read rules
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
