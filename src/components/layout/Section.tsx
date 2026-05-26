import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
  innerClassName,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden px-6 py-16 md:px-10 md:py-20 lg:py-24", className)}
    >
      <div className={cn("relative mx-auto w-full max-w-[1440px]", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
