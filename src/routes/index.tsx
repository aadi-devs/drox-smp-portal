import { createFileRoute, Link } from "@tanstack/react-router";
import { Swords, Users, ShieldCheck, ArrowRight, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-characters.png";
import smokeImg from "@/assets/smoke.jpg";
import { IpCopy } from "@/components/ip-copy";
import { Reveal } from "@/components/reveal";

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

const stats = [
  { value: "Update", body: "We regularly monitor updates, so the world never goes stale." },
  { value: "40K", body: "Blocks of claimable land and a map that keeps expanding." },
  { value: "15+", body: "Custom events, ranks and quality-of-life plugins." },
  { value: "24/7", body: "Always online, low ping hardware for Java and Bedrock." },
];

function Index() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[image:var(--gradient-hero)]">
        <img
          src={smokeImg}
          alt=""
          aria-hidden
          className="animate-drift pointer-events-none absolute -right-10 top-0 h-full w-[75%] object-cover opacity-70 mix-blend-screen"
        />
        <div
          aria-hidden
          className="animate-glow-pulse pointer-events-none absolute right-[20%] top-1/3 h-72 w-72 rounded-full bg-primary/50"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 pb-16 pt-14 md:grid-cols-2 md:pb-24 md:pt-20">
          <div>
            <h1 className="animate-slide-left text-5xl leading-[1.05] md:text-6xl">
              Adventures
              <br />
              are waiting <span className="shimmer-text">for you</span>
            </h1>
            <p
              className="animate-fade-up mt-6 max-w-sm text-sm text-muted-foreground"
              style={{ animationDelay: "180ms" }}
            >
              Discover huge worlds without any boundaries, full of fun and thousands of friends on
              Drox SMP.
            </p>
            <Link
              to="/how-to-play"
              className="animate-fade-up group mt-9 inline-flex items-center gap-16 rounded-md border border-primary/40 bg-background/50 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] backdrop-blur transition-all duration-300 hover:border-primary hover:bg-primary/20 hover:shadow-[var(--glow-brand)]"
              style={{ animationDelay: "300ms" }}
            >
              Play now
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
            <div
              className="animate-fade-up mt-8 flex items-center gap-3 text-sm text-muted-foreground"
              style={{ animationDelay: "420ms" }}
            >
              <span className="relative grid h-4 w-4 place-items-center">
                <span className="absolute h-4 w-4 animate-ping rounded-full bg-primary/60" />
                <span className="h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="tracking-[0.2em]">Players online 871</span>
            </div>
          </div>
          <img
            src={heroImg}
            alt="Drox SMP Minecraft characters in purple smoke"
            width={1280}
            height={1024}
            className="animate-float w-full drop-shadow-[0_30px_60px_oklch(0.58_0.24_300_/_0.45)]"
          />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-8 px-5 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 120}>
              <div className="group cursor-default">
                <p className="text-3xl font-bold transition-colors duration-300 group-hover:text-primary md:text-4xl">
                  {s.value}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.body}</p>
                <span className="mt-3 block h-px w-0 bg-[image:var(--gradient-brand)] transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="relative flex items-center justify-center gap-3 pb-10 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <ChevronDown className="animate-bounce-down h-4 w-4" />
          Scroll down
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <Reveal className="pt-16">
          <IpCopy className="mx-auto max-w-xl" />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 140}>
              <div className="glow-panel hover-lift group h-full rounded-2xl p-6">
                <f.icon className="h-6 w-6 text-primary transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6" />
                <h2 className="mt-4 text-2xl">{f.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal animation="scale-in" className="mt-14">
          <div className="glow-panel hover-lift flex flex-col items-center rounded-3xl px-6 py-14 text-center">
            <h2 className="text-4xl md:text-5xl">Ready to spawn in?</h2>
            <p className="mt-3 max-w-lg text-muted-foreground">
              Grab a rank in the shop or read the rules first — either way, the world is already
              running.
            </p>
            <div className="mt-7 flex gap-3">
              <Link
                to="/shop"
                className="hover-grow rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[var(--glow-brand)]"
              >
                View ranks
              </Link>
              <Link
                to="/rules"
                className="hover-grow rounded-lg border border-border px-6 py-3 text-sm font-semibold transition-colors duration-300 hover:bg-secondary"
              >
                Read rules
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
