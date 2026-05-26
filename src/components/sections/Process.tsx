"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { CornerTicks } from "@/components/primitives/CornerTicks";
import { BrushedSteel } from "@/components/backgrounds/BrushedSteel";
import { TechnicalGrid } from "@/components/backgrounds/TechnicalGrid";
import { SmokeLayer } from "@/components/backgrounds/SmokeLayer";
import { AtmosphericHaze } from "@/components/backgrounds/AtmosphericHaze";
import { WeldGlow } from "@/components/backgrounds/WeldGlow";
import { EmberField } from "@/components/industrial/EmberField";
import { reveal, revealStagger, viewport, easeIndustrial } from "@/lib/motion";

import p01 from "@/assets/process-01-diagnostico.jpg";
import p02 from "@/assets/process-02-diseno.jpg";
import p03 from "@/assets/process-03-fabricacion.jpg";
import p04 from "@/assets/process-04-calidad.jpg";
import p05 from "@/assets/process-05-instalacion.jpg";
import p06 from "@/assets/process-06-soporte.jpg";

type Step = {
  n: string;
  code: string;
  title: string;
  desc: string;
  image: string;
  tag: string;
};

const STEPS: Step[] = [
  {
    n: "01",
    code: "PRC-01 / DIAG",
    title: "Diagnóstico técnico",
    desc: "Levantamiento en campo, análisis de cargas y definición del alcance operativo.",
    image: p01,
    tag: "Site survey",
  },
  {
    n: "02",
    code: "PRC-02 / DSGN",
    title: "Diseño y planificación",
    desc: "Ingeniería de detalle en CAD/CAM, cálculo estructural y planos de taller.",
    image: p02,
    tag: "AISC · EN 1090",
  },
  {
    n: "03",
    code: "PRC-03 / FAB",
    title: "Fabricación",
    desc: "Corte CNC, conformado y soldadura certificada con trazabilidad total.",
    image: p03,
    tag: "MIG · TIG · SAW",
  },
  {
    n: "04",
    code: "PRC-04 / QC",
    title: "Control de calidad",
    desc: "Inspección dimensional y ensayos no destructivos bajo norma.",
    image: p04,
    tag: "AWS D1.1 · ASME IX",
  },
  {
    n: "05",
    code: "PRC-05 / INSTL",
    title: "Instalación",
    desc: "Montaje en sitio con izajes controlados y alineación de precisión.",
    image: p05,
    tag: "Rigging · HSE",
  },
  {
    n: "06",
    code: "PRC-06 / SUP",
    title: "Soporte",
    desc: "Mantenimiento preventivo y asistencia técnica continua 24/7.",
    image: p06,
    tag: "MRO · SLA",
  },
];

export function Process() {
  return (
    <Section
      id="procesos"
      className="border-t border-border/60 bg-graphite"
      innerClassName="relative"
    >
      <BrushedSteel className="opacity-20" />
      <TechnicalGrid />
      <AtmosphericHaze />
      <SmokeLayer />
      <WeldGlow size={460} className="top-[18%] -left-32" flicker={false} />
      <WeldGlow size={380} className="bottom-[8%] -right-24" />
      <EmberField count={20} />

      <SectionHeader
        eyebrow="Capacidades y procesos"
        number="03"
        title={
          <>
            Procesos industriales,
            <br />
            <span className="text-accent">de la idea a la operación.</span>
          </>
        }
        lead="Flujo operativo modular: seis etapas conectadas por trazabilidad técnica y control de calidad continuo."
        className="mb-12"
      />

      <motion.div
        variants={revealStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="relative grid grid-cols-1 gap-px bg-border/70 sm:grid-cols-2 lg:grid-cols-3"
      >
        {STEPS.map((step) => (
          <ProcessCard key={step.n} step={step} />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.7, ease: easeIndustrial }}
        className="relative mt-8 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground md:flex-row md:items-center"
      >
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 animate-pulse bg-accent" />
          <span>Flujo operativo</span>
        </div>
        <div className="flex items-center gap-5">
          <span>06 etapas</span>
          <span className="h-px w-8 bg-border-strong" />
          <span className="text-accent">ISO 9001 · AWS D1.1</span>
        </div>
      </motion.div>
    </Section>
  );
}

function ProcessCard({ step }: { step: Step }) {
  return (
    <motion.article
      variants={reveal}
      whileHover="hover"
      className="group relative isolate aspect-[4/5] overflow-hidden bg-surface"
    >
      <CornerTicks color="border-foreground/25" />

      {/* Image with cinematic parallax zoom */}
      <motion.img
        src={step.image}
        alt={step.title}
        loading="lazy"
        variants={{
          hover: { scale: 1.06 },
        }}
        transition={{ duration: 1.1, ease: easeIndustrial }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Tonal industrial overlay — heavy bottom for text legibility */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.10 0.01 240 / 0.25) 0%, oklch(0.10 0.01 240 / 0.55) 45%, oklch(0.06 0.01 240 / 0.94) 100%)",
        }}
      />

      {/* Cinematic light shift on hover */}
      <motion.div
        aria-hidden
        variants={{
          hover: { opacity: 1, x: "120%" },
        }}
        initial={{ opacity: 0, x: "-40%" }}
        transition={{ duration: 1.1, ease: easeIndustrial }}
        className="absolute inset-y-0 -left-1/3 w-1/2 mix-blend-overlay"
        style={{
          background:
            "linear-gradient(115deg, transparent 30%, oklch(0.95 0.01 80 / 0.18) 50%, transparent 70%)",
        }}
      />

      {/* Warm ember edge */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: "var(--gradient-ember-line)" }}
      />

      {/* Top number marker */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-end p-4 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/55">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 bg-accent" />
          Etapa {step.n}
        </span>
      </div>

      {/* Bottom content overlay */}
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <span className="text-accent">{step.n}</span>
          <span className="h-px w-8 bg-accent/70" />
          <span>Etapa</span>
        </div>
        <h3 className="mt-3 font-display text-2xl font-bold leading-[1.05] tracking-tight text-foreground md:text-[26px]">
          {step.title}
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground/95">
          {step.desc}
        </p>

        {/* Hover hairline */}
        <motion.div
          aria-hidden
          variants={{ hover: { scaleX: 1 } }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.7, ease: easeIndustrial }}
          className="mt-5 h-px origin-left bg-accent/80"
          style={{ boxShadow: "0 0 10px var(--accent)" }}
        />
      </div>
    </motion.article>
  );
}
