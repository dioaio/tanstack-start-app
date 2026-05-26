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
import heroIndustrial from "@/assets/hero-industrial.jpg";
import heroCnc from "@/assets/hero-cnc.jpg";
import telecomImg from "@/assets/division-telecom.jpg";
import hospitalImg from "@/assets/division-hospital.jpg";
import industrialImg from "@/assets/division-industrial.jpg";
import specialImg from "@/assets/division-special.jpg";
import fabricacionImg from "@/assets/process-03-fabricacion.jpg";
import instalacionImg from "@/assets/process-05-instalacion.jpg";
import calidadImg from "@/assets/process-04-calidad.jpg";
import disenoImg from "@/assets/process-02-diseno.jpg";

const easeIndustrial = [0.22, 1, 0.36, 1] as const;

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos — GIAM SAC" },
      {
        name: "description",
        content:
          "Proyectos de fabricación e instalación metálica desarrollados para sectores industriales, telecomunicaciones, salud y operaciones especializadas.",
      },
      { property: "og:title", content: "Proyectos — GIAM SAC" },
      {
        property: "og:description",
        content:
          "Portafolio operativo de GIAM SAC: estructuras, acero inoxidable, fabricación metálica e instalación industrial.",
      },
    ],
  }),
  component: ProyectosPage,
});

type Project = {
  n: string;
  code: string;
  title: string;
  sector: string;
  desc: string;
  tags: string[];
  image: string;
  span: "tall" | "wide" | "std" | "hero";
  location: string;
  year: string;
};

const PROJECTS: Project[] = [
  {
    n: "01",
    code: "PRJ-A / TEL",
    title: "TORRE AUTOSOPORTADA 60 M",
    sector: "Telecomunicaciones",
    desc:
      "Diseño, fabricación y montaje de torre autosoportada bajo ANSI/TIA-222-H, con galvanizado por inmersión y plataforma técnica superior.",
    tags: ["ANSI/TIA-222-H", "GALV. ASTM A123", "MONTAJE EN SITIO"],
    image: telecomImg,
    span: "hero",
    location: "Lima · Perú",
    year: "2024",
  },
  {
    n: "02",
    code: "PRJ-B / HSP",
    title: "EQUIPAMIENTO INOX SANITARIO",
    sector: "Hospitalario",
    desc:
      "Mobiliario quirúrgico y mesas de procedimiento en AISI 316L con pulido Ra ≤ 0.4 μm y soldadura TIG continua.",
    tags: ["AISI 316L", "TIG CONTINUO", "Ra ≤ 0.4"],
    image: hospitalImg,
    span: "tall",
    location: "Lima · Perú",
    year: "2024",
  },
  {
    n: "03",
    code: "PRJ-C / IND",
    title: "ESTRUCTURA INDUSTRIAL PESADA",
    sector: "Industrial",
    desc:
      "Fabricación y montaje de naves estructurales bajo EN 1090 EXC3 con soldadura calificada AWS D1.1 y trazabilidad por colada.",
    tags: ["EN 1090 EXC3", "AWS D1.1", "HASTA 28 T"],
    image: industrialImg,
    span: "wide",
    location: "Callao · Perú",
    year: "2023",
  },
  {
    n: "04",
    code: "PRJ-D / SPE",
    title: "FABRICACIÓN ESPECIAL CNC",
    sector: "Servicios Especiales",
    desc:
      "Piezas técnicas mecanizadas en CNC multi-eje bajo planos del cliente, con tolerancias ISO 2768-fH y QA dimensional por lote.",
    tags: ["CNC MULTI-EJE", "ISO 2768-fH", "QA POR LOTE"],
    image: specialImg,
    span: "std",
    location: "Lima · Perú",
    year: "2024",
  },
  {
    n: "05",
    code: "PRJ-E / FAB",
    title: "LÍNEA DE FABRICACIÓN METÁLICA",
    sector: "Fabricación metálica",
    desc:
      "Producción seriada de ensambles soldados con control dimensional, trazabilidad de soldadura y entrega bajo cronograma operativo.",
    tags: ["SERIE TÉCNICA", "WPS / PQR", "QA / QC"],
    image: fabricacionImg,
    span: "std",
    location: "Lima · Perú",
    year: "2023",
  },
  {
    n: "06",
    code: "PRJ-F / SST",
    title: "EQUIPOS EN ACERO INOXIDABLE",
    sector: "Acero inoxidable",
    desc:
      "Tanques, mesas y equipos sanitarios en AISI 304/316L con pulido técnico y trazabilidad documentada para industria alimentaria y salud.",
    tags: ["AISI 304 / 316L", "PULIDO SANITARIO", "TRAZABILIDAD"],
    image: disenoImg,
    span: "tall",
    location: "Lima · Perú",
    year: "2024",
  },
  {
    n: "07",
    code: "PRJ-G / STR",
    title: "INSTALACIÓN ESTRUCTURAL EN SITIO",
    sector: "Estructuras",
    desc:
      "Montaje de estructuras metálicas pesadas con cuadrillas certificadas, izaje controlado y soldadura on-site bajo protocolos QA/QC.",
    tags: ["MONTAJE EN CAMPO", "ON-SITE WELDING", "IZAJE TÉCNICO"],
    image: instalacionImg,
    span: "wide",
    location: "Arequipa · Perú",
    year: "2023",
  },
  {
    n: "08",
    code: "PRJ-H / QA",
    title: "CONTROL DE CALIDAD INDUSTRIAL",
    sector: "Industrial",
    desc:
      "Ensayos no destructivos (VT, PT, UT) y control dimensional sobre líneas de fabricación con registro técnico por lote.",
    tags: ["VT · PT · UT", "REGISTRO QA", "ISO 9001"],
    image: calidadImg,
    span: "std",
    location: "Lima · Perú",
    year: "2024",
  },
];

function ProyectosPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <GraphiteBackdrop />
      <Navbar />
      <main className="pt-16 md:pt-[72px]">
        <InternalHero />
        <ProjectsGrid />
        <ProjectsStrip />
        <ProyectosCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ───────────────────── Internal hero ───────────────────── */

function InternalHero() {
  return (
    <section className="relative isolate flex min-h-[42vh] w-full items-center overflow-hidden border-b border-border/60 bg-graphite md:min-h-[46vh]">
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

      <div
        aria-hidden
        className="absolute inset-0 -z-40"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.10 0.01 240 / 0.80) 0%, oklch(0.10 0.01 240 / 0.45) 45%, oklch(0.08 0.01 240 / 0.95) 100%)",
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
      <SparksLayer count={10} originX={70} originY={68} />
      <EmberField count={26} />

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
          <span className="text-foreground">Proyectos</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: easeIndustrial }}
          className="mb-5"
        >
          <Eyebrow number="04">Proyectos · Portafolio operativo</Eyebrow>
        </motion.div>

        <motion.h1
          variants={revealStagger}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 0.3, staggerChildren: 0.08 }}
          className="font-display text-[34px] font-bold uppercase leading-[1.05] tracking-[-0.015em] text-foreground sm:text-[42px] md:text-[54px] lg:text-[62px]"
        >
          <motion.span variants={reveal} className="block">
            Proyectos
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: easeIndustrial }}
          className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:text-base"
        >
          Soluciones metálicas desarrolladas para distintos sectores
          industriales y operaciones especializadas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: easeIndustrial }}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground"
        >
          <span className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 animate-pulse bg-accent" />
            <span className="text-foreground">
              08 PROYECTOS · MULTI-SECTOR
            </span>
          </span>
          <span className="hidden h-3 w-px bg-border-strong md:block" />
          <span>REG · 2024 / GIAM-PRJ-0224</span>
          <span className="hidden h-3 w-px bg-border-strong md:block" />
          <span>ISO 9001 · AWS D1.1 · EN 1090</span>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────── Projects masonry grid ───────────────────── */

function ProjectsGrid() {
  return (
    <Section className="relative border-t border-border/60 bg-graphite py-14 md:py-18 lg:py-20">
      <TechnicalGrid />
      <SmokeLayer />
      <AtmosphericHaze />
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
          <span>Portafolio · Ejecución industrial</span>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/70">
          08 PROYECTOS / TEL · HSP · IND · SPE
        </div>
      </motion.div>

      {/* Masonry-inspired asymmetric grid */}
      <div className="grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.n} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}

function spanClasses(span: Project["span"]) {
  switch (span) {
    case "hero":
      return "sm:col-span-2 lg:col-span-2 row-span-2";
    case "tall":
      return "row-span-2";
    case "wide":
      return "sm:col-span-2";
    default:
      return "";
  }
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{
        duration: 0.7,
        delay: (index % 4) * 0.06,
        ease: easeIndustrial,
      }}
      whileHover="hover"
      animate="rest"
      className={`group relative isolate flex overflow-hidden border border-border-strong bg-surface ${spanClasses(
        project.span,
      )}`}
    >
      {/* image layer */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        variants={{ rest: { scale: 1.03 }, hover: { scale: 1.08 } }}
        transition={{ duration: 1.4, ease: easeIndustrial }}
      >
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* base darken */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.08 0.01 240 / 0.30) 0%, oklch(0.06 0.01 240 / 0.55) 45%, oklch(0.06 0.01 240 / 0.95) 100%)",
        }}
      />

      {/* hover warm glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse at 70% 80%, oklch(0.72 0.099 88 / 0.22) 0%, transparent 65%)",
        }}
      />

      {/* metallic sheen */}
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

      {/* corner ticks on hover */}
      <CornerTicks color="border-accent/0 group-hover:border-accent/60 transition-colors duration-700" />

      {/* top tags */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between px-4 pt-4 md:px-5 md:pt-5">
        <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.24em] text-foreground/85">
          <span className="h-1.5 w-1.5 bg-accent" />
          <span>{project.code}</span>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
          {project.n}
        </div>
      </div>

      {/* content */}
      <div className="relative z-10 mt-auto flex w-full flex-col p-5 md:p-6">
        <div className="mb-2 font-mono text-[9px] uppercase tracking-[0.26em] text-accent">
          {project.sector}
        </div>
        <h3 className="font-display text-lg font-bold uppercase leading-[1.1] tracking-[-0.01em] text-foreground md:text-xl">
          {project.title}
        </h3>

        {/* reveal-on-hover description */}
        <motion.div
          variants={{
            rest: { opacity: 0, height: 0, marginTop: 0 },
            hover: { opacity: 1, height: "auto", marginTop: 12 },
          }}
          transition={{ duration: 0.5, ease: easeIndustrial }}
          className="overflow-hidden"
        >
          <div className="h-px w-8 bg-accent" />
          <p className="mt-3 text-[12.5px] leading-relaxed text-foreground/80">
            {project.desc}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="border border-border-strong/80 bg-background/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/80 backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* meta footer */}
        <div className="mt-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.22em] text-foreground/60">
          <span>{project.location}</span>
          <span className="text-foreground/80">{project.year}</span>
        </div>
      </div>
    </motion.article>
  );
}

/* ───────────────────── Operational strip ───────────────────── */

const STRIP_ITEMS = [
  "EJECUCIÓN INDUSTRIAL",
  "TRAZABILIDAD POR LOTE",
  "MONTAJE EN CAMPO",
  "CONTROL DE CALIDAD",
  "CONTINUIDAD OPERATIVA",
];

function ProjectsStrip() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 bg-background px-6 py-10 md:px-10 md:py-12">
      <TechnicalGrid />
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <span className="text-accent">—</span>
          <span>Estándar de ejecución</span>
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

/* ───────────────────── CTA ───────────────────── */

function ProyectosCTA() {
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
          <Eyebrow number="06">Cotización técnica</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold uppercase leading-[1.05] tracking-[-0.01em] text-foreground md:text-4xl lg:text-[44px]">
            Capacidad técnica para proyectos industriales que exigen
            <span className="text-accent">
              {" "}
              precisión y continuidad operativa.
            </span>
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
