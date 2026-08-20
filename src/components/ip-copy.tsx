import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { SERVER_IP, SERVER_PORT } from "@/lib/server-info";

export function IpCopy({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <div
      className={`glow-panel hover-lift group flex flex-wrap items-center gap-3 rounded-xl px-4 py-3 ${className}`}
    >
      <div className="text-left">
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Server IP</p>
        <p className="font-mono text-base text-foreground transition-colors duration-300 group-hover:text-primary">{SERVER_IP}</p>
      </div>
      <div className="text-left">
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Port</p>
        <p className="font-mono text-base text-foreground">{SERVER_PORT}</p>
      </div>
      <button
        onClick={() => {
          navigator.clipboard.writeText(`${SERVER_IP}:${SERVER_PORT}`);
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        }}
        className="soft ml-auto inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-4 py-2 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 hover:shadow-[var(--glow-brand)] active:translate-y-0"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        {copied ? "Copied" : "Copy IP"}
      </button>
    </div>
  );
}