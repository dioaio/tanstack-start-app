import { cn } from "@/lib/utils";

function Bolt({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden>
      <polygon
        points="12,2 21,7 21,17 12,22 3,17 3,7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

export function BoltCluster({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("absolute grid grid-cols-4 gap-6 text-foreground/25", className)}
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} style={{ opacity: 0.4 + (i % 3) * 0.2 }}>
          <Bolt size={20 + (i % 3) * 4} />
        </div>
      ))}
    </div>
  );
}
