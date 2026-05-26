import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  number,
}: {
  children: React.ReactNode;
  className?: string;
  number?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3 text-eyebrow", className)}>
      {number && <span className="text-accent">{number}</span>}
      <span className="h-px w-8 bg-accent" />
      <span>{children}</span>
    </div>
  );
}
