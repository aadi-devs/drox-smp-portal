export function FloatingCube({ className = "", size = 120 }: { className?: string; size?: number }) {
  const faces = ["front", "back", "right", "left", "top", "bottom"] as const;
  return (
    <div
      aria-hidden
      className={`cube-scene pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    >
      <div className="cube" style={{ ["--cube" as string]: `${size}px` }}>
        {faces.map((f) => (
          <span key={f} className={`cube-face cube-${f}`} />
        ))}
      </div>
    </div>
  );
}
