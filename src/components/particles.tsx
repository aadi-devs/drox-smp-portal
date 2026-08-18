const seeds = Array.from({ length: 26 }, (_, i) => ({
  left: (i * 37) % 100,
  delay: (i * 0.63) % 9,
  dur: 9 + ((i * 1.7) % 11),
  size: 2 + ((i * 3) % 5),
  op: 0.25 + ((i * 7) % 5) / 10,
}));

export function Particles({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {seeds.map((s, i) => (
        <span
          key={i}
          className="animate-rise absolute bottom-[-20px] rounded-[2px] bg-primary"
          style={{
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            opacity: s.op,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.dur}s`,
          }}
        />
      ))}
    </div>
  );
}
