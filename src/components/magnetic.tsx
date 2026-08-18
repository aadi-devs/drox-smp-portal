import { useRef, type ReactNode } from "react";

export function Magnetic({
  children,
  className = "",
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <span
      ref={ref}
      className={`inline-block will-change-transform transition-transform duration-300 ease-out ${className}`}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) * strength;
        const y = (e.clientY - (r.top + r.height / 2)) * strength;
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }}
      onMouseLeave={() => {
        const el = ref.current;
        if (el) el.style.transform = "translate3d(0,0,0)";
      }}
    >
      {children}
    </span>
  );
}
