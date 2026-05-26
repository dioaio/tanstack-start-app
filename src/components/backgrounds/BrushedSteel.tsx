import { cn } from "@/lib/utils";

export function BrushedSteel({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-40 bg-brushed opacity-60",
        className,
      )}
    >
      <svg className="h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <filter id="brushed-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="4" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#brushed-noise)" />
      </svg>
    </div>
  );
}
