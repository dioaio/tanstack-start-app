export function LightingShaft() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute -top-1/2 right-0 h-[200%] w-[60%] opacity-[0.08]"
        style={{
          background:
            "linear-gradient(115deg, transparent 40%, oklch(1 0 0 / 0.6) 50%, transparent 60%)",
          transform: "rotate(8deg)",
        }}
      />
    </div>
  );
}
