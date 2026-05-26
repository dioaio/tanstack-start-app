"use client";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { TechnicalGrid } from "@/components/backgrounds/TechnicalGrid";
import { SmokeLayer } from "@/components/backgrounds/SmokeLayer";
import { CornerTicks } from "@/components/primitives/CornerTicks";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { viewport } from "@/lib/motion";
import telecomImg from "@/assets/division-telecom.jpg";
import hospitalImg from "@/assets/division-hospital.jpg";
import industrialImg from "@/assets/division-industrial.jpg";
import specialImg from "@/assets/division-special.jpg";

type Division = {
  n: string;
  code: string;
  title: string;
  tagline: string;
  desc: string;
  capabilities: string[];
  image: string;
  coords: string;
};

const DIVISIONS: Division[] = [
  {
    n: "01",
    code: "DIV-A / TLC",
    title: "TELECOMUNICACIONES",
    tagline: "INFRAESTRUCTURA PARA SEÑAL CRÍTICA",
    desc:
      "Torres autosoportadas, ventadas y monopolos. Diseño estructural, fabricación galvanizada y despliegue en campo para operadores de telecom.",
    capabilities: ["TORRES", "MÁSTILES", "GALVANIZADO", "MONTAJE"],
    image: telecomImg,
    coords: "12°03'S · 77°02'W",
  },
  {
    n: "02",
    code: "DIV-B / HSP",
    title: "HOSPITALARIO",
    tagline: "ACERO INOXIDABLE DE GRADO CLÍNICO",
    desc:
      "Mobiliario y equipamiento en AISI 304 / 316L para entornos hospitalarios. Acabado sanitario Ra 0.4 μm y trazabilidad por lote.",
    capabilities: ["AISI 316L", "RA 0.4 ΜM", "SOLDADURA TIG", "PULIDO ESPEJO"],
    image: hospitalImg,
    coords: "ISO 13485 · NSF",
  },
  {
    n: "03",
    code: "DIV-C / IND",
    title: "INDUSTRIAL",
    tagline: "ESTRUCTURAS Y PLANTAS A GRAN ESCALA",
    desc:
      "Estructuras pesadas, ductos, silos y equipos a medida para minería, energía e industria pesada. Capacidad de fabricación y montaje en sitio.",
    capabilities: ["VIGAS PESADAS", "DUCTERÍA", "RECIPIENTES", "MONTAJE"],
    image: industrialImg,
    coords: "EN 1090 EXC4",
  },
  {
    n: "04",
    code: "DIV-D / SVE",
    title: "SERVICIOS ESPECIALES",
    tagline: "FABRICACIÓN TÉCNICA ESPECIALIZADA",
    desc:
      "Soldadura certificada, mecanizado de precisión y proyectos a medida bajo planos del cliente. Intervención rápida y obra a medida.",
    capabilities: ["MIG / TIG / SAW", "CNC ±0.05 MM", "ON-SITE", "CUSTOM"],
    image: specialImg,
    coords: "AWS D1.1 · ASME IX",
  },
];

export function Divisions() {
  return (
    <Section className="relative border-t border-border/60 bg-graphite">
      <TechnicalGrid />
      <SmokeLayer />

      {/* faint ember rule above the section */}
      <div aria-hidden className="ember-rule absolute inset-x-0 top-0 opacity-50" />

      <SectionHeader
        eyebrow="SECTORES"
        number="01"
        title={
          <>
            Cuatro frentes industriales.
            <br />
            <span className="text-accent">Una sola disciplina operativa.</span>
          </>
        }
        lead={
          <span className="whitespace-pre-line font-mono text-sm tracking-widest text-accent/90">
            CLIENTES ACTIVOS{"\n\n"}
            REG · 2024 / GIAM-CL-0042
          </span>
        }
        className="mb-12 md:mb-14"
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 lg:gap-6">
        {DIVISIONS.map((d, i) => (
          <DivisionCard key={d.n} division={d} index={i} />
        ))}
      </div>

      {/* Trust strip */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-12 border-t border-border/60 pt-6"
      >
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="text-accent">— </span>
            CERTIFICACIONES &amp; ESTÁNDARES OPERATIVOS
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/70">
            {[
              { code: "ISO 9001", label: "GESTIÓN DE CALIDAD" },
              { code: "ASME", label: "SEC. VIII / IX" },
              { code: "AWS D1.1", label: "SOLDADURA ESTRUCTURAL" },
            ].map((c) => (
              <div key={c.code} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-accent" />
                <span className="text-foreground">{c.code}</span>
                <span className="hidden text-muted-foreground sm:inline">/ {c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

function DivisionCard({ division, index }: { division: Division; index: number }) {
  const isOffset = index % 2 === 1;
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover"
      animate="rest"
      className={`group relative isolate flex h-[420px] flex-col overflow-hidden border border-border-strong bg-surface md:h-[480px] lg:h-[520px] ${
        isOffset ? "md:translate-y-6" : ""
      }`}
    >
      {/* Image plate with cinematic parallax */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-30"
        variants={{
          rest: { scale: 1.02 },
          hover: { scale: 1.08 },
        }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={division.image}
          alt=""
          loading="lazy"
          width={1280}
          height={1600}
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Cinematic overlays */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.10 0.01 240 / 0.55) 0%, oklch(0.10 0.01 240 / 0.25) 35%, oklch(0.10 0.01 240 / 0.75) 75%, oklch(0.08 0.01 240 / 0.96) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse at 70% 80%, oklch(0.72 0.099 88 / 0.25) 0%, transparent 60%)",
        }}
      />

      {/* Subtle moving metallic sheen on hover */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 group-hover:opacity-100"
        variants={{
          rest: { x: "-120%" },
          hover: { x: "120%" },
        }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background:
            "linear-gradient(115deg, transparent 42%, oklch(1 0 0 / 0.10) 50%, transparent 58%)",
        }}
      />

      <CornerTicks color="border-accent/0 group-hover:border-accent/70 transition-colors duration-700" />

      {/* spacer pushes content to bottom */}
      <div className="flex-1" />


      {/* Content well */}
      <div className="relative z-10 p-6 md:p-8 lg:p-10">
        <motion.div
          variants={{
            rest: { y: 14 },
            hover: { y: 0 },
          }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
            {division.tagline}
          </div>
          <h3 className="font-display text-3xl font-bold uppercase leading-[1.05] tracking-[-0.01em] text-foreground md:text-4xl lg:text-[42px]">
            {division.title}
          </h3>

          {/* hairline divider */}
          <div className="my-5 h-px w-12 bg-accent" />

          <p className="max-w-md text-sm leading-relaxed text-foreground/75 md:text-[15px]">
            {division.desc}
          </p>

          {/* capability chips — appear on hover */}
          <motion.div
            variants={{
              rest: { opacity: 0, y: 8 },
              hover: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {division.capabilities.map((cap) => (
              <span
                key={cap}
                className="border border-border-strong/80 bg-background/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80 backdrop-blur-sm"
              >
                {cap}
              </span>
            ))}
          </motion.div>

          <div className="mt-7 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/70 transition-colors duration-500 group-hover:text-accent">
            <span>VER DIVISIÓN</span>
            <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}
