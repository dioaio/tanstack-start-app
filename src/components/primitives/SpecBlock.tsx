import { cn } from "@/lib/utils";

export function SpecBlock({
  rows,
  className,
}: {
  rows: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <dl className={cn("font-mono text-sm", className)}>
      {rows.map((r, i) => (
        <div
          key={i}
          className="flex items-baseline gap-3 border-b border-border/60 py-3 first:border-t"
        >
          <dt className="text-muted-foreground uppercase tracking-wider text-xs">{r.label}</dt>
          <span
            className="flex-1 translate-y-[-3px] border-b border-dotted border-border/60"
            aria-hidden
          />
          <dd className="text-foreground">{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}
