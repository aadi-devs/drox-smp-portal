import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in";
  className?: string;
};

const map = {
  "fade-up": "animate-fade-up",
  "fade-in": "animate-fade-in",
  "slide-left": "animate-slide-left",
  "slide-right": "animate-slide-right",
  "scale-in": "animate-scale-in",
} as const;

export function Reveal({ children, delay = 0, animation = "fade-up", className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${shown ? map[animation] : "opacity-0"} ${className}`}
      style={shown ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}