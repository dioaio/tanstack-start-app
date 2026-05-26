import { cn } from "@/lib/utils";

export function WeldGlow({
  className,
  size = 600,
  flicker = true,
}: {
  className?: string;
  size?: number;
  flicker?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -z-20 rounded-full bg-weld blur-2xl",
        flicker && "animate-weld-flicker",
        className,
      )}
      style={{ width: size, height: size }}
    />
  );
}
