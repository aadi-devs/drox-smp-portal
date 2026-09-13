import { Link } from "@tanstack/react-router";
import { SERVER_IP, SERVER_PORT } from "@/lib/server-info";
import { DiscordDialog } from "@/components/discord-dialog";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-surface/60">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-3d text-xl tracking-widest text-foreground transition-transform duration-500 hover:scale-105">
            DROX SMP
          </p>
          <p className="mt-1">
            {SERVER_IP} : {SERVER_PORT} — Java & Bedrock
          </p>
        </div>
        <div className="flex gap-4">
          <Link to="/shop" className="story-link transition-colors duration-300 hover:text-foreground">
            Shop
          </Link>
          <Link to="/rules" className="story-link transition-colors duration-300 hover:text-foreground">
            Rules
          </Link>
          <Link to="/how-to-play" className="story-link transition-colors duration-300 hover:text-foreground">
            How to Play
          </Link>
          <DiscordDialog
            title="Need support?"
            intent="Join the Drox SMP Discord and create a ticket — for purchases, appeals or any help you need."
          >
            <button className="story-link soft text-left hover:text-foreground">Support</button>
          </DiscordDialog>
        </div>
      </div>
      <p className="pb-6 text-center text-xs text-muted-foreground/70">
        Not affiliated with Mojang or Microsoft.
      </p>
    </footer>
  );
}