import { cn } from "@/lib/utils";
import logoLight from "@/assets/logo-giam-light.png";
import logoDark from "@/assets/logo-giam.png";

type LogoSize = "navbar" | "hero" | "footer";

type LogoProps = {
  variant?: "light" | "dark";
  size?: LogoSize;
  className?: string;
  priority?: boolean;
};

/**
 * GIAM SAC image logo.
 *
 * Swap the brand asset by replacing the files at:
 *   - src/assets/logo-giam-light.png  (for dark backgrounds)
 *   - src/assets/logo-giam.png        (for light backgrounds)
 */
const SIZE_CLASSES: Record<LogoSize, string> = {
  // Prominent, readable in the header
  navbar: "w-[140px] sm:w-[156px] md:w-[190px] lg:w-[210px] xl:w-[224px]",
  // Hero — larger, visually important
  hero: "w-[200px] sm:w-[230px] md:w-[270px] lg:w-[300px]",
  // Footer — medium, readable
  footer: "w-[140px] sm:w-[156px] md:w-[172px] lg:w-[184px]",
};

export function Logo({
  variant = "light",
  size = "navbar",
  className,
  priority = false,
}: LogoProps) {
  const src = variant === "light" ? logoLight : logoDark;
  return (
    <img
      src={src}
      alt="GIAM SAC"
      width={1248}
      height={832}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={cn(
        "h-auto select-none object-contain",
        SIZE_CLASSES[size],
        className,
      )}
      draggable={false}
    />
  );
}
