import { cn } from "@/lib/utils";

export function TechnicalGrid({
  className,
  fade = true,
}: {
  className?: string;
  fade?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-30 technical-grid",
        fade && "mask-radial-fade",
        className,
      )}
    />
  );
}
