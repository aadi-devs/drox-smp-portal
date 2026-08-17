import { Link } from "@tanstack/react-router";
import { Play } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/rules", label: "Rules" },
  { to: "/how-to-play", label: "How to Play" },
] as const;

export function SiteNav() {
  return (
    <header className="animate-fade-in sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <nav className="flex h-[70px] items-stretch">
        <Link
          to="/"
          className="hover-grow flex w-[180px] shrink-0 items-center justify-center bg-[image:var(--gradient-brand)] px-4 text-lg font-bold tracking-wide text-primary-foreground"
        >
          Drox SMP
        </Link>
        <div className="flex flex-1 items-center gap-2 px-5 sm:gap-6 sm:px-10">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              style={{ animationDelay: `${120 + i * 70}ms` }}
              className="story-link animate-fade-up text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/how-to-play"
            className="animate-fade-up ml-auto hidden items-center gap-3 md:flex"
            style={{ animationDelay: "420ms" }}
          >
            <span className="animate-glow-pulse grid h-8 w-8 place-items-center rounded-sm bg-primary text-primary-foreground [animation-duration:2.5s] [filter:none]">
              <Play className="h-4 w-4 fill-current" />
            </span>
            <span className="text-sm font-medium uppercase tracking-wide underline underline-offset-4 transition-colors duration-300 hover:text-primary">
              How to play ?
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}