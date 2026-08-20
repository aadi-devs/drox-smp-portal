import { cloneElement, isValidElement, type ReactElement, type ReactNode, useState } from "react";
import { Crown, MessageSquarePlus, Ticket, ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DISCORD_OWNER, DISCORD_URL } from "@/lib/server-info";

export function DiscordDialog({
  children,
  title = "Join our Discord to continue",
  intent = "To buy a rank, join the Drox SMP Discord and create a ticket. Our team will set you up in minutes.",
}: {
  children: ReactNode;
  title?: string;
  intent?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {isValidElement(children)
        ? cloneElement(children as ReactElement<{ onClick?: () => void }>, {
            onClick: () => setOpen(true),
          })
        : children}
      <DialogContent className="glow-panel overflow-hidden rounded-3xl border-border/70 p-0 sm:max-w-md">
        <div
          aria-hidden
          className="animate-aurora pointer-events-none absolute -top-24 left-1/2 h-56 w-72 -translate-x-1/2 rounded-full bg-primary/25 blur-[90px]"
        />
        <div className="relative p-7">
          <DialogHeader>
            <DialogTitle className="text-2xl tracking-tight">{title}</DialogTitle>
            <DialogDescription className="mt-1 leading-relaxed">{intent}</DialogDescription>
          </DialogHeader>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex items-center gap-3 rounded-xl border border-border/70 bg-background/40 px-4 py-3">
              <Crown className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-muted-foreground">
                Owner <span className="font-medium text-foreground">{DISCORD_OWNER}</span>
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-border/70 bg-background/40 px-4 py-3">
              <MessageSquarePlus className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-muted-foreground">Join the server, then open #create-a-ticket</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-border/70 bg-background/40 px-4 py-3">
              <Ticket className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-muted-foreground">Tell us your username, edition and rank</span>
            </div>
          </div>

          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="soft mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-5 py-3.5 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 hover:shadow-[var(--glow-brand)] active:translate-y-0"
          >
            Join Discord Server
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <p className="mt-3 text-center text-xs text-muted-foreground/80">
            Tickets are usually answered within a few hours.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
