import { cn } from "@/lib/utils";

export function CornerTicks({
  className,
  size = 14,
  color = "border-foreground/40",
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  const s = `${size}px`;
  const corner = "absolute border-current";
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0", color, className)}>
      <span className={cn(corner, "top-0 left-0 border-t border-l")} style={{ width: s, height: s }} />
      <span className={cn(corner, "top-0 right-0 border-t border-r")} style={{ width: s, height: s }} />
      <span className={cn(corner, "bottom-0 left-0 border-b border-l")} style={{ width: s, height: s }} />
      <span className={cn(corner, "bottom-0 right-0 border-b border-r")} style={{ width: s, height: s }} />
    </div>
  );
}
