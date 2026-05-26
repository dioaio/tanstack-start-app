import { motion } from "framer-motion";
import { BrushedSteel } from "@/components/backgrounds/BrushedSteel";
import { TechnicalGrid } from "@/components/backgrounds/TechnicalGrid";
import { AtmosphericHaze } from "@/components/backgrounds/AtmosphericHaze";
import { SmokeLayer } from "@/components/backgrounds/SmokeLayer";
import { WeldGlow } from "@/components/backgrounds/WeldGlow";
import { EmberField } from "@/components/industrial/EmberField";
import { SparksLayer } from "@/components/industrial/SparksLayer";
import { CornerTicks } from "@/components/primitives/CornerTicks";
import { IndustrialButton } from "@/components/primitives/IndustrialButton";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { viewport } from "@/lib/motion";

const easeIndustrial = [0.22, 1, 0.36, 1] as const;

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden border-t border-border/60 bg-graphite px-6 py-20 md:px-10 md:py-24 lg:py-28">
      {/* atmospheric layers */}
      <BrushedSteel className="opacity-25" />
      <TechnicalGrid />
      <AtmosphericHaze />
      <SmokeLayer />

      {/* cinematic top/bottom fades */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.08 0.01 240 / 0.95) 0%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(0deg, oklch(0.06 0.01 240 / 0.95) 0%, transparent 100%)",
        }}
      />

      {/* vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, transparent 40%, oklch(0.06 0.01 240 / 0.85) 100%)",
        }}
      />

      {/* ambient weld glows */}
      <WeldGlow size={520} className="bottom-[10%] right-[18%]" />
      <WeldGlow size={360} className="top-[18%] left-[-80px]" flicker={false} />

      {/* restrained particles */}
      <EmberField count={28} />
      <SparksLayer count={8} originX={70} originY={72} />

      {/* slow drifting light shift */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 2 }}
        style={{
          background:
            "radial-gradient(800px 400px at 30% 40%, oklch(0.72 0.118 88 / 0.07), transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1200px]">
        {/* top technical strip */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: easeIndustrial }}
          className="mb-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 animate-pulse bg-accent" />
          <span className="text-accent">Contacto</span>
        </motion.div>

        <div className="relative border border-border-strong/60 bg-background/30 p-8 backdrop-blur-sm md:p-12 lg:p-14">
          <CornerTicks color="border-accent/60" />

          {/* internal hairline */}
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={{ duration: 1.4, ease: easeIndustrial }}
            className="absolute left-0 right-0 top-0 h-px origin-left"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.72 0.118 88 / 0.6), transparent)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease: easeIndustrial }}
          >
            <Eyebrow number="05">Contacto · Cotización</Eyebrow>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.9, delay: 0.1, ease: easeIndustrial }}
            className="mt-6 max-w-4xl font-display text-[28px] font-bold uppercase leading-[1.05] tracking-[-0.015em] text-foreground sm:text-[34px] md:text-[42px] lg:text-[50px]"
          >
            Soluciones metálicas para
            <br />
            <span className="text-foreground/85">operaciones que </span>
            <span className="text-accent">no pueden detenerse.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: 0.25, ease: easeIndustrial }}
            className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:text-base"
          >
            Ingeniería aplicada al metal para proyectos industriales, fabricación
            especializada y operaciones que exigen precisión.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: 0.4, ease: easeIndustrial }}
            className="mt-10 flex flex-wrap items-center gap-8"
          >
            <IndustrialButton
              variant="secondary"
              size="lg"
              className="group/cta relative overflow-hidden border-border-strong"
            >
              <span className="relative z-10">Cotizar proyecto</span>
              <span
                aria-hidden
                className="relative z-10 transition-transform duration-500 group-hover/cta:translate-x-1"
              >
                →
              </span>
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(115deg, transparent 42%, oklch(1 0 0 / 0.18) 50%, transparent 58%)",
                }}
                initial={{ x: "-120%" }}
                animate={{ x: ["-120%", "120%"] }}
                transition={{
                  duration: 3.6,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: easeIndustrial,
                }}
              />
            </IndustrialButton>

            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-10 bg-border-strong" />
              ISO 9001 · ASME · AWS D1.1
            </div>
          </motion.div>

          {/* bottom hairline */}
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={{ duration: 1.4, delay: 0.2, ease: easeIndustrial }}
            className="absolute bottom-0 left-0 right-0 h-px origin-right bg-border/60"
          />
        </div>
      </div>
    </section>
  );
}
