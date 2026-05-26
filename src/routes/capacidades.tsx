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
import heroCnc from "@/assets/hero-cnc.jpg";
import heroIndustrial from "@/assets/hero-industrial.jpg";
import fabImg from "@/assets/division-industrial.jpg";
import weldImg from "@/assets/division-special.jpg";
import stainlessImg from "@/assets/division-hospital.jpg";
import structureImg from "@/assets/division-telecom.jpg";
import cncImg from "@/assets/process-03-fabricacion.jpg";
import designImg from "@/assets/process-02-diseno.jpg";
import installImg from "@/assets/process-05-instalacion.jpg";
import qaImg from "@/assets/process-04-calidad.jpg";

const easeIndustrial = [0.22, 1, 0.36, 1] as const;

export const Route = createFileRoute("/capacidades")({
  head: () => ({
    meta: [
      { title: "Capacidades — GIAM SAC" },
      {
        name: "description",
        content:
          "Procesos, fabricación y soluciones metálicas desarrolladas con precisión técnica y capacidad operativa real.",
      },
      { property: "og:title", content: "Capacidades — GIAM SAC" },
      {
        property: "og:description",
        content:
          "Fabricación metálica, corte láser, CNC, soldadura especializada, acero inoxidable, estructuras, diseño técnico e instalación industrial.",
      },
    ],
  }),
  component: CapacidadesPage,
});

type Capability = {
  n: string;
  code: string;
  title: string;
  tagline: string;
  desc: string;
  tags: string[];
  image: string;
};

const CAPABILITIES: Capability[] = [
  {
    n: "01",
    code: "CAP-A / FAB",
    title: "FABRICACIÓN METÁLICA",
    tagline: "ENSAMBLE INDUSTRIAL A ESCALA",
    desc:
      "Líneas de fabricación de estructuras y equipos metálicos en taller, con trazabilidad por colada y control dimensional en cada etapa.",
    tags: ["TALLER", "TRAZABILIDAD", "QA POR LOTE"],
    image: fabImg,
  },
  {
    n: "02",
    code: "CAP-B / LSR",
    title: "CORTE LÁSER",
    tagline: "PRECISIÓN DE BORDE EN CHAPA TÉCNICA",
    desc:
      "Corte láser CNC de chapa hasta 20 mm con bordes limpios, repetibilidad ±0.1 mm y mínimo afectado térmico para piezas técnicas.",
    tags: ["≤ 20 MM", "±0.1 MM", "FIBRA CNC"],
    image: heroCnc,
  },
  {
    n: "03",
    code: "CAP-C / CNC",
    title: "CNC",
    tagline: "MECANIZADO DE PRECISIÓN",
    desc:
      "Fresado, torneado y mecanizado CNC bajo planos del cliente. Tolerancias ISO 2768-fH y producción continua para series técnicas.",
    tags: ["±0.05 MM", "ISO 2768-fH", "MULTI-EJE"],
    image: cncImg,
  },
  {
    n: "04",
    code: "CAP-D / WLD",
    title: "SOLDADURA ESPECIALIZADA",
    tagline: "PROCESOS CERTIFICADOS",
    desc:
      "Soldadura MIG, TIG y SAW bajo procedimientos calificados AWS D1.1 y ASME Sec. IX, con soldadores homologados y registro WPS/PQR.",
    tags: ["MIG · TIG · SAW", "AWS D1.1", "ASME IX"],
    image: weldImg,
  },
  {
    n: "05",
    code: "CAP-E / SST",
    title: "ACERO INOXIDABLE",
    tagline: "GRADO TÉCNICO Y SANITARIO",
    desc:
      "Fabricación en AISI 304 y 316L con soldadura TIG continua, pulido sanitario y trazabilidad documentada para industria y salud.",
    tags: ["AISI 304 / 316L", "PULIDO Ra ≤ 0.4", "TIG CONTINUO"],
    image: stainlessImg,
  },
  {
    n: "06",
    code: "CAP-F / STR",
    title: "ESTRUCTURAS METÁLICAS",
    tagline: "INGENIERÍA Y FABRICACIÓN PESADA",
    desc:
      "Vigas, columnas, torres y estructuras pesadas calculadas y fabricadas bajo EN 1090 y normativa local, con galvanizado por inmersión.",
    tags: ["EN 1090 EXC4", "GALV. ASTM A123", "HASTA 32 T"],
    image: structureImg,
  },
  {
    n: "07",
    code: "CAP-G / ENG",
    title: "DISEÑO TÉCNICO",
    tagline: "INGENIERÍA DE DETALLE Y PLANOS",
    desc:
      "Modelado 3D, cálculo estructural e ingeniería de detalle. Entrega de planos de fabricación, ensamble y montaje listos para taller.",
    tags: ["MODELADO 3D", "CÁLCULO ESTRUCTURAL", "PLANOS FAB"],
    image: designImg,
  },
  {
    n: "08",
    code: "CAP-H / INS",
    title: "INSTALACIÓN INDUSTRIAL",
    tagline: "MONTAJE Y EJECUCIÓN EN SITIO",
    desc:
      "Montaje en campo con cuadrillas certificadas, izaje, soldadura on-site y puesta en servicio bajo protocolos QA/QC y seguridad industrial.",
    tags: ["MONTAJE EN CAMPO", "ON-SITE WELDING", "QA / QC"],
    image: installImg,
  },
];

const STRIP_ITEMS = [
  "PRECISIÓN INDUSTRIAL",
  "FABRICACIÓN ESPECIALIZADA",
  "SOLUCIONES A MEDIDA",
  "SOPORTE TÉCNICO",
  "CONTROL DE CALIDAD",
];

function CapacidadesPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <GraphiteBackdrop />
      <Navbar />
      <main className="pt-16 md:pt-[72px]">
        <InternalHero />
        <CapabilitiesGrid />
        <CapabilityStrip />
        <MachinerySection />
        <CapacidadesCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ───────────────────── Internal hero ───────────────────── */

function InternalHero() {
  return (
    <section className="relative isolate flex min-h-[44vh] w-full items-center overflow-hidden border-b border-border/60 bg-graphite md:min-h-[48vh]">
      <div aria-hidden className="absolute inset-0 -z-50">
        <motion.img
          src={heroCnc}
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
      <SparksLayer count={12} originX={72} originY={66} />
      <EmberField count={28} />

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
          <span className="text-foreground">Capacidades</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: easeIndustrial }}
          className="mb-5"
        >
          <Eyebrow number="03">Capacidades · Procesos</Eyebrow>
        </motion.div>

        <motion.h1
          variants={revealStagger}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 0.3, staggerChildren: 0.08 }}
          className="font-display text-[34px] font-bold uppercase leading-[1.05] tracking-[-0.015em] text-foreground sm:text-[42px] md:text-[54px] lg:text-[62px]"
        >
          <motion.span variants={reveal} className="block">
            Capacidades
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: easeIndustrial }}
          className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:text-base"
        >
          Procesos, fabricación y soluciones metálicas desarrolladas con
          precisión técnica y capacidad operativa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: easeIndustrial }}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground"
        >
          <span className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 animate-pulse bg-accent" />
            <span className="text-foreground">08 CAPACIDADES OPERATIVAS</span>
          </span>
          <span className="hidden h-3 w-px bg-border-strong md:block" />
          <span>REG · 2024 / GIAM-CAP-0118</span>
          <span className="hidden h-3 w-px bg-border-strong md:block" />
          <span>ISO 9001 · ASME · AWS D1.1</span>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────── Capabilities grid ───────────────────── */

function CapabilitiesGrid() {
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
          <span>Índice de capacidades</span>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/70">
          08 PROCESOS / FAB · MAQ · MONTAJE
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {CAPABILITIES.map((c, i) => (
          <CapabilityCard key={c.n} cap={c} index={i} />
        ))}
      </div>
    </Section>
  );
}

function CapabilityCard({ cap, index }: { cap: Capability; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.7, delay: (index % 4) * 0.06, ease: easeIndustrial }}
      whileHover="hover"
      animate="rest"
      className="group relative isolate flex flex-col overflow-hidden border border-border-strong bg-surface"
    >
      {/* visual */}
      <div className="relative h-[200px] overflow-hidden md:h-[220px]">
        <motion.div
          aria-hidden
          className="absolute inset-0"
          variants={{ rest: { scale: 1.03 }, hover: { scale: 1.09 } }}
          transition={{ duration: 1.4, ease: easeIndustrial }}
        >
          <img
            src={cap.image}
            alt=""
            loading="lazy"
            width={960}
            height={720}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.10 0.01 240 / 0.35) 0%, oklch(0.08 0.01 240 / 0.85) 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(ellipse at 65% 75%, oklch(0.72 0.099 88 / 0.25) 0%, transparent 65%)",
          }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
          variants={{ rest: { x: "-120%" }, hover: { x: "120%" } }}
          transition={{ duration: 1.6, ease: easeIndustrial }}
          style={{
            background:
              "linear-gradient(115deg, transparent 42%, oklch(1 0 0 / 0.10) 50%, transparent 58%)",
          }}
        />

        <div className="absolute left-4 top-4 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.24em] text-foreground/85">
          <span className="h-1.5 w-1.5 bg-accent" />
          <span>{cap.code}</span>
        </div>
        <div className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
          {cap.n}
        </div>
      </div>

      {/* content */}
      <div className="relative flex flex-1 flex-col p-5 md:p-6">
        <CornerTicks color="border-accent/0 group-hover:border-accent/60 transition-colors duration-700" />

        <div className="mb-2 font-mono text-[9px] uppercase tracking-[0.26em] text-accent">
          {cap.tagline}
        </div>
        <h3 className="font-display text-lg font-bold uppercase leading-[1.1] tracking-[-0.01em] text-foreground md:text-xl">
          {cap.title}
        </h3>
        <div className="my-4 h-px w-8 bg-accent" />
        <p className="text-[13px] leading-relaxed text-foreground/75">{cap.desc}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {cap.tags.map((t) => (
            <span
              key={t}
              className="border border-border-strong/80 bg-background/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/80 backdrop-blur-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/* ───────────────────── Capability strip ───────────────────── */

function CapabilityStrip() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 bg-background px-6 py-10 md:px-10 md:py-12">
      <TechnicalGrid />
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <span className="text-accent">—</span>
          <span>Estándar operativo</span>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={revealStagger}
          className="flex flex-wrap items-center gap-x-6 gap-y-3"
        >
          {STRIP_ITEMS.map((item, i) => (
            <motion.span
              key={item}
              variants={reveal}
              className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-foreground/85"
            >
              <span className="h-1 w-1 bg-accent" />
              {item}
              {i < STRIP_ITEMS.length - 1 && (
                <span className="ml-3 hidden h-3 w-px bg-border-strong md:inline-block" />
              )}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────── Machinery / technology ───────────────────── */

function MachinerySection() {
  const items = [
    { code: "MCH-01", label: "CORTE LÁSER CNC", spec: "FIBRA · ≤ 20 MM" },
    { code: "MCH-02", label: "FRESADO MULTI-EJE", spec: "CNC · ±0.05 MM" },
    { code: "MCH-03", label: "SOLDADURA MIG / TIG", spec: "AWS · ASME IX" },
    { code: "MCH-04", label: "PULIDO INOX", spec: "Ra ≤ 0.4 μm" },
    { code: "MCH-05", label: "GALVANIZADO", spec: "ASTM A123 · 85 μm" },
    { code: "MCH-06", label: "ENSAYOS QA / QC", spec: "VT · PT · UT" },
  ];

  return (
    <section className="relative isolate overflow-hidden border-t border-border/60 bg-graphite">
      <div aria-hidden className="absolute inset-0 -z-50">
        <img
          src={heroIndustrial}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-50"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 -z-40"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.08 0.01 240 / 0.88) 0%, oklch(0.10 0.01 240 / 0.7) 50%, oklch(0.06 0.01 240 / 0.95) 100%)",
        }}
      />
      <BrushedSteel className="opacity-20" />
      <TechnicalGrid />
      <AtmosphericHaze />
      <WeldGlow size={360} className="top-[12%] right-[8%]" />
      <WeldGlow size={240} className="bottom-[8%] left-[-60px]" flicker={false} />
      <EmberField count={18} />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: easeIndustrial }}
          className="mb-10 flex flex-col gap-3 border-b border-border/50 pb-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <Eyebrow number="04">Maquinaria · Tecnología</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold uppercase leading-[1.05] tracking-[-0.01em] text-foreground md:text-4xl lg:text-5xl">
              Equipamiento técnico
              <br />
              <span className="text-accent">en operación continua.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-[15px]">
            Planta operativa con maquinaria CNC, líneas de soldadura
            certificadas y procesos de acabado controlados para fabricación
            metálica de precisión.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-px border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((m, i) => (
            <motion.div
              key={m.code}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: i * 0.05, ease: easeIndustrial }}
              className="group relative flex items-center justify-between bg-background/70 p-5 backdrop-blur-sm transition-colors hover:bg-background/90 md:p-6"
            >
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[0.26em] text-accent">
                  {m.code}
                </div>
                <div className="mt-2 font-display text-base font-bold uppercase tracking-[-0.01em] text-foreground md:text-lg">
                  {m.label}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {m.spec}
                </div>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/40 transition-colors group-hover:text-accent">
                ●
              </span>
            </motion.div>
          ))}
        </div>

        {/* QA hairline note */}
        <div className="mt-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          <span className="h-1.5 w-1.5 animate-pulse bg-accent" />
          <span>QA · Control dimensional y ensayos no destructivos en cada lote</span>
          <img src={qaImg} alt="" aria-hidden className="ml-auto hidden h-8 w-16 object-cover opacity-60 md:block" />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── CTA ───────────────────── */

function CapacidadesCTA() {
  return (
    <section className="relative isolate overflow-hidden border-t border-border/60 bg-background">
      <BrushedSteel className="opacity-25" />
      <TechnicalGrid />
      <AtmosphericHaze />
      <WeldGlow size={320} className="-top-20 right-[10%]" />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-start gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between md:px-10 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: easeIndustrial }}
          className="max-w-2xl"
        >
          <Eyebrow number="05">Cotización técnica</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold uppercase leading-[1.05] tracking-[-0.01em] text-foreground md:text-4xl lg:text-[44px]">
            Capacidad técnica para proyectos industriales que exigen
            <span className="text-accent"> precisión.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, delay: 0.15, ease: easeIndustrial }}
          className="flex flex-col items-start gap-4"
        >
          <IndustrialButton variant="primary" size="lg">
            Cotizar proyecto
            <span aria-hidden>→</span>
          </IndustrialButton>
          <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            Respuesta técnica · 24–48 h
          </div>
        </motion.div>
      </div>
    </section>
  );
}
