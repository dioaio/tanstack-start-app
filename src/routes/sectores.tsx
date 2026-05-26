import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { GraphiteBackdrop } from "@/components/backgrounds/GraphiteBackdrop";
import { BrushedSteel } from "@/components/backgrounds/BrushedSteel";
import { TechnicalGrid } from "@/components/backgrounds/TechnicalGrid";
import { SmokeLayer } from "@/components/backgrounds/SmokeLayer";
import { AtmosphericHaze } from "@/components/backgrounds/AtmosphericHaze";
import { WeldGlow } from "@/components/backgrounds/WeldGlow";
import { EmberField } from "@/components/industrial/EmberField";
import { SparksLayer } from "@/components/industrial/SparksLayer";
import { CornerTicks } from "@/components/primitives/CornerTicks";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { IndustrialButton } from "@/components/primitives/IndustrialButton";
import { reveal, revealStagger, viewport } from "@/lib/motion";
import telecomImg from "@/assets/division-telecom.jpg";
import hospitalImg from "@/assets/division-hospital.jpg";
import industrialImg from "@/assets/division-industrial.jpg";
import specialImg from "@/assets/division-special.jpg";
import heroIndustrial from "@/assets/hero-industrial.jpg";

const easeIndustrial = [0.22, 1, 0.36, 1] as const;

export const Route = createFileRoute("/sectores")({
  head: () => ({
    meta: [
      { title: "Sectores — GIAM SAC" },
      {
        name: "description",
        content:
          "Soluciones metálicas desarrolladas para telecomunicaciones, sector hospitalario, industria y servicios especiales.",
      },
      { property: "og:title", content: "Sectores — GIAM SAC" },
      {
        property: "og:description",
        content:
          "Cuatro frentes industriales bajo una sola disciplina operativa: telecom, hospitalario, industrial y servicios especiales.",
      },
    ],
  }),
  component: SectoresPage,
});

type Sector = {
  n: string;
  code: string;
  title: string;
  tagline: string;
  desc: string;
  capabilities: string[];
  specs: { label: string; value: string }[];
  image: string;
};

const SECTORS: Sector[] = [
  {
    n: "01",
    code: "SEC-A / TLC",
    title: "TELECOMUNICACIONES",
    tagline: "INFRAESTRUCTURA METÁLICA PARA SEÑAL CRÍTICA",
    desc:
      "Diseño, fabricación galvanizada y despliegue en campo de torres autosoportadas, ventadas y monopolos para operadores de telecomunicaciones. Ingeniería estructural verificada y montaje certificado en sitio.",
    capabilities: ["TORRES AUTOSOPORTADAS", "MONOPOLOS", "GALVANIZADO EN CALIENTE", "MONTAJE EN CAMPO"],
    specs: [
      { label: "Norma", value: "ANSI/TIA-222-H" },
      { label: "Alturas", value: "12 – 90 m" },
      { label: "Recubrimiento", value: "ASTM A123 / 85 μm" },
    ],
    image: telecomImg,
  },
  {
    n: "02",
    code: "SEC-B / HSP",
    title: "HOSPITALARIO",
    tagline: "ACERO INOXIDABLE DE GRADO CLÍNICO",
    desc:
      "Mobiliario, equipamiento y elementos sanitarios en AISI 304 y 316L para entornos clínicos exigentes. Soldadura TIG continua, pulido espejo y trazabilidad documentada por lote y por colada.",
    capabilities: ["AISI 316L", "SOLDADURA TIG", "PULIDO SANITARIO", "TRAZABILIDAD POR LOTE"],
    specs: [
      { label: "Acabado", value: "Ra ≤ 0.4 μm" },
      { label: "Referencia", value: "ISO 13485 / NSF" },
      { label: "Material", value: "AISI 304 / 316L" },
    ],
    image: hospitalImg,
  },
  {
    n: "03",
    code: "SEC-C / IND",
    title: "INDUSTRIAL",
    tagline: "ESTRUCTURAS PESADAS Y PLANTAS A GRAN ESCALA",
    desc:
      "Fabricación de estructuras pesadas, ductería, recipientes y equipos a medida para minería, energía e industria pesada. Capacidad de planta y obra en sitio bajo planos del cliente.",
    capabilities: ["VIGAS PESADAS", "DUCTERÍA", "RECIPIENTES", "MONTAJE EN SITIO"],
    specs: [
      { label: "Clase ejecución", value: "EN 1090-2 EXC4" },
      { label: "Soldadura", value: "ASME Sec. IX" },
      { label: "Capacidad", value: "Hasta 32 t / pieza" },
    ],
    image: industrialImg,
  },
  {
    n: "04",
    code: "SEC-D / SVE",
    title: "SERVICIOS ESPECIALES",
    tagline: "FABRICACIÓN TÉCNICA Y SOLUCIONES A MEDIDA",
    desc:
      "Soldadura certificada, mecanizado de precisión y proyectos custom bajo planos del cliente. Intervención rápida, obra a medida y soporte técnico en planta o en sitio del cliente.",
    capabilities: ["MIG / TIG / SAW", "CNC ±0.05 MM", "INTERVENCIÓN ON-SITE", "PROYECTOS CUSTOM"],
    specs: [
      { label: "Soldadura", value: "AWS D1.1 / ASME IX" },
      { label: "Tolerancia", value: "ISO 2768-fH" },
      { label: "Respuesta", value: "Obra a medida" },
    ],
    image: specialImg,
  },
];

const RELATED_CAPABILITIES = [
  "Fabricación metálica",
  "Corte láser",
  "CNC",
  "Soldadura certificada",
  "Acero inoxidable",
  "Instalación industrial",
];

function SectoresPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <GraphiteBackdrop />
      <Navbar />
      <main className="pt-16 md:pt-[72px]">
        <InternalHero />
        <SectorsGrid />
        <RelatedCapabilities />
        <SectoresCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ───────────────────── Internal hero ───────────────────── */

function InternalHero() {
  return (
    <section className="relative isolate flex min-h-[44vh] w-full items-center overflow-hidden border-b border-border/60 bg-graphite md:min-h-[48vh]">
      {/* background plate */}
      <div aria-hidden className="absolute inset-0 -z-50">
        <motion.img
          src={heroIndustrial}
          alt=""
          width={1920}
          height={1080}
          fetchPriority="high"
          className="h-full w-full object-cover"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1.02, opacity: 1 }}
          transition={{ duration: 2, ease: easeIndustrial }}
        />
      </div>

      {/* cinematic darkening */}
      <div
        aria-hidden
        className="absolute inset-0 -z-40"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.10 0.01 240 / 0.78) 0%, oklch(0.10 0.01 240 / 0.45) 45%, oklch(0.08 0.01 240 / 0.95) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-40"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.08 0.01 240 / 0.85) 0%, oklch(0.10 0.01 240 / 0.35) 55%, transparent 85%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-30"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, oklch(0.06 0.01 240 / 0.9) 100%)",
        }}
      />

      <BrushedSteel className="opacity-20" />
      <TechnicalGrid />
      <AtmosphericHaze />
      <SmokeLayer />
      <WeldGlow size={420} className="bottom-[10%] right-[14%]" />
      <WeldGlow size={260} className="top-[18%] left-[-80px]" flicker={false} />
      <SparksLayer count={10} originX={68} originY={70} />
      <EmberField count={26} />

      {/* horizontal accent scanline */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/3 h-px -z-10"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.118 88 / 0.55), transparent)",
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: [0, 1, 0.4] }}
        transition={{ duration: 1.4, delay: 0.3, ease: easeIndustrial }}
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 py-14 md:px-10 md:py-20">
        {/* breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeIndustrial }}
          className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground"
        >
          <Link to="/" className="transition-colors hover:text-accent">
            Inicio
          </Link>
          <span className="text-border-strong">/</span>
          <span className="text-foreground">Sectores</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: easeIndustrial }}
          className="mb-5"
        >
          <Eyebrow number="02">Sectores · Operaciones</Eyebrow>
        </motion.div>

        <motion.h1
          variants={revealStagger}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 0.3, staggerChildren: 0.08 }}
          className="font-display text-[34px] font-bold uppercase leading-[1.05] tracking-[-0.015em] text-foreground sm:text-[42px] md:text-[54px] lg:text-[62px]"
        >
          <motion.span variants={reveal} className="block">
            Sectores
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: easeIndustrial }}
          className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:text-base"
        >
          Soluciones metálicas desarrolladas para distintos sectores industriales
          y operaciones especializadas.
        </motion.p>

        {/* technical strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: easeIndustrial }}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground"
        >
          <span className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 animate-pulse bg-accent" />
            <span className="text-foreground">04 FRENTES OPERATIVOS</span>
          </span>
          <span className="hidden h-3 w-px bg-border-strong md:block" />
          <span>REG · 2024 / GIAM-SEC-0042</span>
          <span className="hidden h-3 w-px bg-border-strong md:block" />
          <span>ISO 9001 · ASME · AWS D1.1</span>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────── Sectors grid ───────────────────── */

function SectorsGrid() {
  return (
    <Section className="relative border-t border-border/60 bg-graphite py-14 md:py-18 lg:py-20">
      <TechnicalGrid />
      <SmokeLayer />
      <div aria-hidden className="ember-rule absolute inset-x-0 top-0 opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.8, ease: easeIndustrial }}
        className="mb-10 flex flex-col gap-3 border-b border-border/50 pb-6 md:flex-row md:items-end md:justify-between"
      >
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <span className="text-accent">—</span>
          <span>Índice operativo</span>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/70">
          04 SECTORES / FAB · MONTAJE · QA
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 md:gap-6">
        {SECTORS.map((s, i) => (
          <SectorRow key={s.n} sector={s} index={i} />
        ))}
      </div>
    </Section>
  );
}

function SectorRow({ sector, index }: { sector: Sector; index: number }) {
  const reversed = index % 2 === 1;
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.8, delay: index * 0.06, ease: easeIndustrial }}
      whileHover="hover"
      animate="rest"
      className="group relative isolate grid grid-cols-1 overflow-hidden border border-border-strong bg-surface md:grid-cols-12"
    >
      {/* visual */}
      <div
        className={`relative h-[260px] overflow-hidden md:col-span-6 md:h-[420px] ${
          reversed ? "md:order-2" : ""
        }`}
      >
        <motion.div
          aria-hidden
          className="absolute inset-0"
          variants={{ rest: { scale: 1.02 }, hover: { scale: 1.07 } }}
          transition={{ duration: 1.4, ease: easeIndustrial }}
        >
          <img
            src={sector.image}
            alt=""
            loading="lazy"
            width={1280}
            height={1600}
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* overlays */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.10 0.01 240 / 0.35) 0%, oklch(0.08 0.01 240 / 0.75) 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(ellipse at 60% 70%, oklch(0.72 0.099 88 / 0.22) 0%, transparent 65%)",
          }}
        />

        {/* metallic sheen */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
          variants={{ rest: { x: "-120%" }, hover: { x: "120%" } }}
          transition={{ duration: 1.5, ease: easeIndustrial }}
          style={{
            background:
              "linear-gradient(115deg, transparent 42%, oklch(1 0 0 / 0.10) 50%, transparent 58%)",
          }}
        />

        {/* corner code */}
        <div className="absolute left-5 top-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-foreground/80">
          <span className="h-1.5 w-1.5 bg-accent" />
          <span>{sector.code}</span>
        </div>
        <div className="absolute right-5 top-5 font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
          {sector.n}
        </div>
      </div>

      {/* content */}
      <div
        className={`relative flex flex-col justify-center p-6 md:col-span-6 md:p-10 lg:p-12 ${
          reversed ? "md:order-1" : ""
        }`}
      >
        <CornerTicks color="border-accent/0 group-hover:border-accent/60 transition-colors duration-700" />

        <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
          {sector.tagline}
        </div>
        <h2 className="font-display text-2xl font-bold uppercase leading-[1.05] tracking-[-0.01em] text-foreground md:text-3xl lg:text-[36px]">
          {sector.title}
        </h2>

        <div className="my-5 h-px w-10 bg-accent" />

        <p className="max-w-xl text-sm leading-relaxed text-foreground/75 md:text-[15px]">
          {sector.desc}
        </p>

        {/* specs */}
        <div className="mt-6 grid grid-cols-1 gap-px border border-border/60 bg-border/60 sm:grid-cols-3">
          {sector.specs.map((sp) => (
            <div key={sp.label} className="bg-background/60 p-3">
              <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                {sp.label}
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground">
                {sp.value}
              </div>
            </div>
          ))}
        </div>

        {/* capability chips */}
        <div className="mt-5 flex flex-wrap gap-2">
          {sector.capabilities.map((cap) => (
            <span
              key={cap}
              className="border border-border-strong/80 bg-background/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/80 backdrop-blur-sm"
            >
              {cap}
            </span>
          ))}
        </div>

        <div className="mt-7 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/70 transition-colors duration-500 group-hover:text-accent">
          <span>VER CAPACIDADES</span>
          <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </motion.article>
  );
}

/* ───────────────────── Related capabilities ───────────────────── */

function RelatedCapabilities() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 bg-background px-6 py-12 md:px-10 md:py-14">
      <TechnicalGrid />
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <span className="text-accent">—</span>
          <span>Capacidades relacionadas</span>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={revealStagger}
          className="flex flex-wrap items-center gap-x-3 gap-y-3 md:justify-end"
        >
          {RELATED_CAPABILITIES.map((cap) => (
            <motion.span
              key={cap}
              variants={reveal}
              className="group flex items-center gap-2 border border-border-strong/80 bg-surface/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:border-accent/60 hover:text-accent"
            >
              <span className="h-1 w-1 bg-accent/80 transition-transform duration-500 group-hover:scale-150" />
              {cap}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────── Final CTA (compact) ───────────────────── */

function SectoresCTA() {
  return (
    <section className="relative isolate overflow-hidden border-t border-border/60 bg-graphite px-6 py-16 md:px-10 md:py-20">
      <BrushedSteel className="opacity-25" />
      <TechnicalGrid />
      <AtmosphericHaze />
      <SmokeLayer />
      <WeldGlow size={420} className="bottom-[10%] right-[18%]" />
      <EmberField count={20} />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, transparent 45%, oklch(0.06 0.01 240 / 0.85) 100%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1100px]">
        <div className="relative border border-border-strong/60 bg-background/30 p-7 backdrop-blur-sm md:p-10 lg:p-12">
          <CornerTicks color="border-accent/60" />

          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={{ duration: 1.2, ease: easeIndustrial }}
            className="absolute left-0 right-0 top-0 h-px origin-left"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.72 0.118 88 / 0.6), transparent)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease: easeIndustrial }}
          >
            <Eyebrow number="05">Contacto · Cotización</Eyebrow>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.9, delay: 0.1, ease: easeIndustrial }}
            className="mt-5 max-w-3xl font-display text-[24px] font-bold uppercase leading-[1.1] tracking-[-0.01em] text-foreground sm:text-[30px] md:text-[36px] lg:text-[42px]"
          >
            Soluciones metálicas para sectores que exigen{" "}
            <span className="text-accent">precisión y continuidad operativa.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: 0.3, ease: easeIndustrial }}
            className="mt-8 flex flex-wrap items-center gap-6"
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
        </div>
      </div>
    </section>
  );
}
