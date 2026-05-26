"use client";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { TechnicalGrid } from "@/components/backgrounds/TechnicalGrid";
import { BrushedSteel } from "@/components/backgrounds/BrushedSteel";
import { AtmosphericHaze } from "@/components/backgrounds/AtmosphericHaze";
import { SmokeLayer } from "@/components/backgrounds/SmokeLayer";
import { WeldGlow } from "@/components/backgrounds/WeldGlow";
import { EmberField } from "@/components/industrial/EmberField";
import { CornerTicks } from "@/components/primitives/CornerTicks";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { reveal, revealStagger, viewport } from "@/lib/motion";

/* Stylized monochrome industrial wordmarks rendered as SVG so they
   inherit the metallic palette and feel integrated into the scene. */
type LogoProps = { className?: string };

const Logos: { name: string; sector: string; mark: (p: LogoProps) => React.ReactElement }[] = [
  {
    name: "NORTEL ANDINA",
    sector: "TLC",
    mark: ({ className }) => (
      <svg viewBox="0 0 200 40" className={className} aria-label="Nortel Andina">
        <g fill="currentColor">
          <path d="M2 30V10h4l10 14V10h4v20h-4L6 16v14H2z" />
          <text x="46" y="26" fontFamily="Archivo, sans-serif" fontWeight="800" fontSize="14" letterSpacing="2">
            NORTEL
          </text>
          <text x="46" y="36" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing="3" opacity="0.7">
            ANDINA · TLC
          </text>
        </g>
      </svg>
    ),
  },
  {
    name: "FERROMEC",
    sector: "IND",
    mark: ({ className }) => (
      <svg viewBox="0 0 200 40" className={className} aria-label="Ferromec">
        <g fill="currentColor">
          <rect x="2" y="10" width="20" height="20" />
          <rect x="6" y="14" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
          <text x="30" y="24" fontFamily="Archivo, sans-serif" fontWeight="900" fontSize="16" letterSpacing="1">
            FERROMEC
          </text>
          <text x="30" y="34" fontFamily="JetBrains Mono, monospace" fontSize="6.5" letterSpacing="3" opacity="0.65">
            HEAVY STEEL
          </text>
        </g>
      </svg>
    ),
  },
  {
    name: "SALUD VITAL",
    sector: "HSP",
    mark: ({ className }) => (
      <svg viewBox="0 0 200 40" className={className} aria-label="Salud Vital">
        <g fill="currentColor">
          <path d="M12 6l8 4v8c0 6-4 11-8 14-4-3-8-8-8-14v-8l8-4z" opacity="0.85" />
          <path d="M12 12v12M6 18h12" stroke="oklch(0.16 0.005 240)" strokeWidth="2" />
          <text x="32" y="24" fontFamily="Archivo, sans-serif" fontWeight="700" fontSize="15" letterSpacing="2">
            SALUD VITAL
          </text>
          <text x="32" y="34" fontFamily="JetBrains Mono, monospace" fontSize="6.5" letterSpacing="3" opacity="0.65">
            CLINICAL · HSP
          </text>
        </g>
      </svg>
    ),
  },
  {
    name: "ANDES MINERA",
    sector: "MIN",
    mark: ({ className }) => (
      <svg viewBox="0 0 200 40" className={className} aria-label="Andes Minera">
        <g fill="currentColor">
          <path d="M2 30L12 12l6 10 4-6 8 14H2z" />
          <text x="38" y="24" fontFamily="Archivo, sans-serif" fontWeight="800" fontSize="14" letterSpacing="2">
            ANDES
          </text>
          <text x="38" y="34" fontFamily="JetBrains Mono, monospace" fontSize="6.5" letterSpacing="3" opacity="0.65">
            MINERA · MIN
          </text>
        </g>
      </svg>
    ),
  },
  {
    name: "PACÍFICO ENERGY",
    sector: "ENR",
    mark: ({ className }) => (
      <svg viewBox="0 0 200 40" className={className} aria-label="Pacifico Energy">
        <g fill="currentColor">
          <circle cx="12" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M14 10l-4 10h5l-3 10 7-12h-5l3-8z" />
          <text x="30" y="24" fontFamily="Archivo, sans-serif" fontWeight="800" fontSize="13" letterSpacing="1.5">
            PACÍFICO
          </text>
          <text x="30" y="34" fontFamily="JetBrains Mono, monospace" fontSize="6.5" letterSpacing="3" opacity="0.65">
            ENERGY · ENR
          </text>
        </g>
      </svg>
    ),
  },
  {
    name: "TORRENORTE",
    sector: "TLC",
    mark: ({ className }) => (
      <svg viewBox="0 0 200 40" className={className} aria-label="Torrenorte">
        <g fill="currentColor">
          <path d="M12 4l8 26H4L12 4z" opacity="0.85" />
          <path d="M8 22h8M9 16h6" stroke="oklch(0.16 0.005 240)" strokeWidth="1.2" />
          <text x="30" y="24" fontFamily="Archivo, sans-serif" fontWeight="900" fontSize="14" letterSpacing="1.5">
            TORRENORTE
          </text>
          <text x="30" y="34" fontFamily="JetBrains Mono, monospace" fontSize="6.5" letterSpacing="3" opacity="0.65">
            TOWERS · TLC
          </text>
        </g>
      </svg>
    ),
  },
  {
    name: "INDUMETAL",
    sector: "IND",
    mark: ({ className }) => (
      <svg viewBox="0 0 200 40" className={className} aria-label="Indumetal">
        <g fill="currentColor">
          <rect x="2" y="14" width="4" height="16" />
          <rect x="9" y="10" width="4" height="20" />
          <rect x="16" y="6" width="4" height="24" />
          <text x="28" y="24" fontFamily="Archivo, sans-serif" fontWeight="800" fontSize="15" letterSpacing="2">
            INDUMETAL
          </text>
          <text x="28" y="34" fontFamily="JetBrains Mono, monospace" fontSize="6.5" letterSpacing="3" opacity="0.65">
            FAB · IND
          </text>
        </g>
      </svg>
    ),
  },
  {
    name: "CLÍNICA SUR",
    sector: "HSP",
    mark: ({ className }) => (
      <svg viewBox="0 0 200 40" className={className} aria-label="Clinica Sur">
        <g fill="currentColor">
          <circle cx="12" cy="20" r="10" />
          <path d="M12 14v12M6 20h12" stroke="oklch(0.16 0.005 240)" strokeWidth="2.4" />
          <text x="30" y="24" fontFamily="Archivo, sans-serif" fontWeight="700" fontSize="14" letterSpacing="2">
            CLÍNICA SUR
          </text>
          <text x="30" y="34" fontFamily="JetBrains Mono, monospace" fontSize="6.5" letterSpacing="3" opacity="0.65">
            HEALTHCARE · HSP
          </text>
        </g>
      </svg>
    ),
  },
  {
    name: "PETROCOSTA",
    sector: "ENR",
    mark: ({ className }) => (
      <svg viewBox="0 0 200 40" className={className} aria-label="Petrocosta">
        <g fill="currentColor">
          <path d="M12 4c4 6 8 10 8 16a8 8 0 11-16 0c0-6 4-10 8-16z" />
          <text x="28" y="24" fontFamily="Archivo, sans-serif" fontWeight="800" fontSize="14" letterSpacing="2">
            PETROCOSTA
          </text>
          <text x="28" y="34" fontFamily="JetBrains Mono, monospace" fontSize="6.5" letterSpacing="3" opacity="0.65">
            OIL & GAS · ENR
          </text>
        </g>
      </svg>
    ),
  },
  {
    name: "VIALSA",
    sector: "INF",
    mark: ({ className }) => (
      <svg viewBox="0 0 200 40" className={className} aria-label="Vialsa">
        <g fill="currentColor">
          <path d="M2 30L22 10M2 22L14 10M10 30L22 18" stroke="currentColor" strokeWidth="2.5" />
          <text x="32" y="24" fontFamily="Archivo, sans-serif" fontWeight="800" fontSize="15" letterSpacing="2">
            VIALSA
          </text>
          <text x="32" y="34" fontFamily="JetBrains Mono, monospace" fontSize="6.5" letterSpacing="3" opacity="0.65">
            INFRA · INF
          </text>
        </g>
      </svg>
    ),
  },
  {
    name: "AGROINDUSTRIAL EL VALLE",
    sector: "AGR",
    mark: ({ className }) => (
      <svg viewBox="0 0 200 40" className={className} aria-label="Agroindustrial El Valle">
        <g fill="currentColor">
          <path d="M12 4c-6 4-8 10-8 14 0 4 2 8 8 12 6-4 8-8 8-12 0-4-2-10-8-14z" opacity="0.85" />
          <path d="M12 8v22" stroke="oklch(0.16 0.005 240)" strokeWidth="1.2" />
          <text x="28" y="22" fontFamily="Archivo, sans-serif" fontWeight="800" fontSize="11" letterSpacing="1.5">
            AGROINDUSTRIAL
          </text>
          <text x="28" y="34" fontFamily="JetBrains Mono, monospace" fontSize="6.5" letterSpacing="3" opacity="0.65">
            EL VALLE · AGR
          </text>
        </g>
      </svg>
    ),
  },
  {
    name: "MARÍTIMA CALLAO",
    sector: "MAR",
    mark: ({ className }) => (
      <svg viewBox="0 0 200 40" className={className} aria-label="Maritima Callao">
        <g fill="currentColor">
          <path d="M2 22h20l-4 8H6l-4-8zM12 6v14M6 12l6-4 6 4" stroke="currentColor" strokeWidth="1.6" fill="none" />
          <text x="30" y="22" fontFamily="Archivo, sans-serif" fontWeight="800" fontSize="12" letterSpacing="2">
            MARÍTIMA
          </text>
          <text x="30" y="34" fontFamily="JetBrains Mono, monospace" fontSize="6.5" letterSpacing="3" opacity="0.65">
            CALLAO · MAR
          </text>
        </g>
      </svg>
    ),
  },
];

export function Clients() {
  return (
    <Section className="border-t border-border/60 bg-graphite">
      {/* Atmosphere */}
      <div aria-hidden className="absolute inset-0 -z-40 bg-background" />
      <BrushedSteel className="opacity-20" />
      <TechnicalGrid />
      <AtmosphericHaze />
      <SmokeLayer />
      <WeldGlow size={520} className="-top-20 -left-32" flicker={false} />
      <WeldGlow size={420} className="bottom-[-10%] right-[-8%]" flicker={false} />
      <EmberField count={18} />

      {/* Soft top/bottom gradients to fade into adjacent sections */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-30 h-40"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.10 0.01 240 / 0.95), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-30 h-40"
        style={{
          background:
            "linear-gradient(0deg, oklch(0.10 0.01 240 / 0.95), transparent)",
        }}
      />

      {/* Header */}
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          variants={revealStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="lg:col-span-7"
        >
          <motion.div variants={reveal}>
            <Eyebrow number="02">Confianza · Operaciones reales</Eyebrow>
          </motion.div>
          <motion.h2
            variants={reveal}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            Empresas que confiaron
            <br />
            en <span className="text-accent">GIAM SAC</span>.
          </motion.h2>
          <motion.p
            variants={reveal}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Soluciones metálicas y proyectos industriales desarrollados para
            diversos sectores especializados.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end lg:col-span-5"
        >
          <div className="ml-auto flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse bg-accent" />
              ACTIVE PARTNERS
            </span>
            <span className="hidden md:inline">REG · 2024 / GIAM-CL-0042</span>
          </div>
        </motion.div>
      </div>

      {/* Logo grid */}
      <motion.div
        variants={revealStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="relative mt-12 grid grid-cols-2 gap-px overflow-hidden border border-border/60 bg-border/60 sm:grid-cols-3 md:grid-cols-4"
      >
        {Logos.map(({ name, sector, mark: Mark }) => (
          <motion.div
            key={name}
            variants={reveal}
            className="group relative flex h-28 items-center justify-center bg-background/80 px-6 transition-colors duration-500 hover:bg-surface md:h-32"
          >
            <CornerTicks color="border-accent/0 group-hover:border-accent/50 transition-colors duration-500" />

            {/* Metallic sheen sweep */}
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(115deg, transparent 40%, oklch(1 0 0 / 0.06) 50%, transparent 60%)",
              }}
            />

            {/* Soft accent bloom on hover */}
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(ellipse at center, oklch(0.72 0.099 88 / 0.10), transparent 70%)",
              }}
            />

            {/* Sector micro-tag */}
            <span className="absolute left-3 top-3 font-mono text-[9px] uppercase tracking-[0.28em] text-muted-foreground/60 transition-colors duration-500 group-hover:text-accent/80">
              {sector}
            </span>

            {/* Logo with brushed-metal text gradient */}
            <Mark
              className="h-9 w-auto max-w-[170px] text-steel-300 opacity-65 transition-all duration-500 group-hover:opacity-100 group-hover:text-steel-100 group-hover:[filter:drop-shadow(0_0_12px_oklch(0.72_0.16_55/0.35))]"
            />

            {/* Bottom hairline that lights on hover */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-6 bottom-3 h-px origin-left scale-x-0 bg-gradient-to-r from-accent/0 via-accent/60 to-accent/0 transition-transform duration-700 group-hover:scale-x-100"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Footer strip */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-border/50 pt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground"
      >
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-border-strong" />
          <span>+120 proyectos entregados desde 1998</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-foreground/70">Telecom · Hospitalario · Industria · Energía</span>
        </div>
      </motion.div>
    </Section>
  );
}
