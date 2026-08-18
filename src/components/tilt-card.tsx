import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
};

export function TiltCard({ children, className = "", max = 12, glare = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const move = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - py) * max * 2}deg`);
    el.style.setProperty("--ry", `${(px - 0.5) * max * 2}deg`);
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };

  const leave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div className="tilt-scene h-full">
      <div ref={ref} onMouseMove={move} onMouseLeave={leave} className={`tilt-body ${className}`}>
        {glare && <span aria-hidden className="tilt-glare" />}
        <div className="tilt-inner">{children}</div>
      </div>
    </div>
  );
}
