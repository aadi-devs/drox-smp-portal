import { Link } from "@tanstack/react-router";
import { SERVER_IP, SERVER_PORT } from "@/lib/server-info";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-surface/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-xl tracking-widest text-foreground">DROX SMP</p>
          <p className="mt-1">
            {SERVER_IP} : {SERVER_PORT} — Java & Bedrock
          </p>
        </div>
        <div className="flex gap-4">
          <Link to="/shop" className="hover:text-foreground">
            Shop
          </Link>
          <Link to="/rules" className="hover:text-foreground">
            Rules
          </Link>
          <Link to="/how-to-play" className="hover:text-foreground">
            How to Play
          </Link>
        </div>
      </div>
      <p className="pb-6 text-center text-xs text-muted-foreground/70">
        Not affiliated with Mojang or Microsoft.
      </p>
    </footer>
  );
}