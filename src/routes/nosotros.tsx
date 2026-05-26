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
import fabImg from "@/assets/division-industrial.jpg";
import weldImg from "@/assets/division-special.jpg";
import installImg from "@/assets/process-05-instalacion.jpg";
import qaImg from "@/assets/process-04-calidad.jpg";

const easeIndustrial = [0.22, 1, 0.36, 1] as const;

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — GIAM SAC" },
      {
        name: "description",
        content:
          "GIAM SAC: ingeniería aplicada al metal para operaciones industriales que exigen precisión, capacidad técnica y continuidad operativa.",
      },
      { property: "og:title", content: "Nosotros — GIAM SAC" },
      {
        property: "og:description",
        content:
          "Empresa peruana de ingeniería y fabricación metálica especializada para sectores industriales que requieren precisión y continuidad operativa.",
      },
    ],
  }),
  component: NosotrosPage,
});

function NosotrosPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <GraphiteBackdrop />
      <Navbar />
      <main className="pt-16 md:pt-[72px]">
        <InternalHero />
        <CompanyIntro />
        <PhilosophySection />
        <OperationsSection />
        <TrustStrip />
        <NosotrosCTA />
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
      <SparksLayer count={10} originX={72} originY={66} />
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
          <span className="text-foreground">Nosotros</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: easeIndustrial }}
          className="mb-5"
        >
          <Eyebrow number="05">Nosotros · Identidad operativa</Eyebrow>
        </motion.div>

        <motion.h1
          variants={revealStagger}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 0.3, staggerChildren: 0.08 }}
          className="font-display text-[34px] font-bold uppercase leading-[1.05] tracking-[-0.015em] text-foreground sm:text-[42px] md:text-[54px] lg:text-[62px]"
        >
          <motion.span variants={reveal} className="block">
            Nosotros
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: easeIndustrial }}
          className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:text-base"
        >
          Ingeniería aplicada al metal para operaciones industriales que exigen
          precisión, capacidad técnica y continuidad operativa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: easeIndustrial }}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground"
        >
          <span className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 animate-pulse bg-accent" />
            <span className="text-foreground">EMPRESA INDUSTRIAL · LIMA / PERÚ</span>
          </span>
          <span className="hidden h-3 w-px bg-border-strong md:block" />
          <span>REG · GIAM-CORP-0042</span>
          <span className="hidden h-3 w-px bg-border-strong md:block" />
          <span>ISO 9001 · AWS D1.1</span>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────── Company Introduction ───────────────────── */

function CompanyIntro() {
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
          <span>Identidad de la empresa</span>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/70">
          INGENIERÍA · FABRICACIÓN · MONTAJE
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        {/* left: visual */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.9, ease: easeIndustrial }}
          className="relative lg:col-span-5"
        >
          <div className="relative isolate aspect-[4/5] overflow-hidden border border-border-strong bg-surface">
            <img
              src={fabImg}
              alt="Planta de fabricación GIAM SAC"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 40%, oklch(0.08 0.01 240 / 0.85) 100%)",
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 70% 80%, oklch(0.72 0.099 88 / 0.18) 0%, transparent 60%)",
              }}
            />
            <CornerTicks color="border-accent/70" />

            <div className="absolute left-4 top-4 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.24em] text-foreground/85">
              <span className="h-1.5 w-1.5 bg-accent" />
              <span>GIAM · TALLER</span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/80">
              Lima · Perú / Planta de fabricación metálica
            </div>
          </div>
        </motion.div>

        {/* right: text */}
        <motion.div
          variants={revealStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="lg:col-span-7"
        >
          <motion.div variants={reveal} className="mb-5">
            <Eyebrow number="01">Empresa</Eyebrow>
          </motion.div>
          <motion.h2
            variants={reveal}
            className="font-display text-3xl font-bold uppercase leading-[1.05] tracking-[-0.01em] text-foreground md:text-4xl lg:text-[44px]"
          >
            Soluciones metálicas
            <br />
            <span className="text-accent">para sectores que no se detienen.</span>
          </motion.h2>

          <motion.p
            variants={reveal}
            className="mt-7 max-w-2xl text-[15px] leading-relaxed text-foreground/80 md:text-base"
          >
            GIAM SAC desarrolla soluciones metálicas especializadas para
            sectores industriales que requieren fabricación de precisión,
            confiabilidad operativa y ejecución técnica documentada.
          </motion.p>
          <motion.p
            variants={reveal}
            className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:text-base"
          >
            Operamos como un socio técnico de planta: ingeniería de detalle,
            fabricación bajo procedimientos calificados y montaje en sitio con
            cuadrillas certificadas. Cada proyecto se ejecuta con trazabilidad
            por lote y control dimensional en cada etapa.
          </motion.p>

          {/* spec rows */}
          <div className="mt-10 grid grid-cols-1 gap-px border border-border/60 bg-border/60 sm:grid-cols-3">
            {[
              { k: "Sede operativa", v: "Lima · Perú" },
              { k: "Foco industrial", v: "Fabricación metálica" },
              { k: "Estándares", v: "ISO 9001 · AWS D1.1" },
            ].map((s) => (
              <div
                key={s.k}
                className="bg-background/70 p-5 backdrop-blur-sm md:p-6"
              >
                <div className="font-mono text-[9px] uppercase tracking-[0.26em] text-accent">
                  {s.k}
                </div>
                <div className="mt-2 font-display text-base font-bold uppercase tracking-[-0.01em] text-foreground md:text-lg">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ───────────────────── Industrial Philosophy ───────────────────── */

type Pillar = {
  n: string;
  code: string;
  title: string;
  desc: string;
};

const PILLARS: Pillar[] = [
  {
    n: "01",
    code: "PRC / TEC",
    title: "PRECISIÓN TÉCNICA",
    desc: "Control dimensional, tolerancias verificadas y planos de fabricación que garantizan repetibilidad en cada lote.",
  },
  {
    n: "02",
    code: "FAB / ESP",
    title: "FABRICACIÓN ESPECIALIZADA",
    desc: "Procesos calificados, soldadores homologados y maquinaria CNC para componentes que exigen ejecución industrial.",
  },
  {
    n: "03",
    code: "ING / APL",
    title: "INGENIERÍA APLICADA",
    desc: "Diseño técnico orientado a la fabricación: cada decisión de ingeniería responde a un requerimiento operativo real.",
  },
  {
    n: "04",
    code: "OPS / CNT",
    title: "CONTINUIDAD OPERATIVA",
    desc: "Compromiso con plazos, soporte post-fabricación y respuesta técnica para operaciones que no pueden detenerse.",
  },
];

function PhilosophySection() {
  return (
    <Section className="relative border-t border-border/60 bg-background py-14 md:py-18 lg:py-20">
      <BrushedSteel className="opacity-20" />
      <TechnicalGrid />
      <AtmosphericHaze />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.8, ease: easeIndustrial }}
        className="mb-10 flex flex-col gap-3 border-b border-border/50 pb-6 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <Eyebrow number="02">Filosofía operativa</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold uppercase leading-[1.05] tracking-[-0.01em] text-foreground md:text-4xl lg:text-5xl">
            Principios que sostienen
            <br />
            <span className="text-accent">la ejecución industrial.</span>
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-[15px]">
          No trabajamos con declaraciones corporativas. Trabajamos con
          procedimientos calificados, control dimensional y entregas
          verificables.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-px border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((p, i) => (
          <motion.article
            key={p.n}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, delay: i * 0.06, ease: easeIndustrial }}
            className="group relative isolate flex flex-col bg-background/80 p-6 backdrop-blur-sm transition-colors hover:bg-background/95 md:p-7"
          >
            <CornerTicks color="border-accent/0 group-hover:border-accent/60 transition-colors duration-700" />
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-[0.26em] text-accent">
                {p.code}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-foreground/40 transition-colors group-hover:text-accent">
                {p.n}
              </span>
            </div>
            <h3 className="mt-6 font-display text-lg font-bold uppercase leading-[1.1] tracking-[-0.01em] text-foreground md:text-xl">
              {p.title}
            </h3>
            <div className="my-4 h-px w-8 bg-accent" />
            <p className="text-[13px] leading-relaxed text-foreground/75">
              {p.desc}
            </p>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"
              style={{
                background:
                  "linear-gradient(90deg, transparent, oklch(0.72 0.118 88 / 0.7), transparent)",
              }}
            />
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────────── Operations / Facility ───────────────────── */

function OperationsSection() {
  const ops = [
    {
      img: weldImg,
      code: "OPS-01",
      title: "TALLER DE SOLDADURA",
      desc: "Procesos MIG, TIG y SAW bajo procedimientos calificados, con soldadores homologados y registro WPS/PQR.",
    },
    {
      img: heroCnc,
      code: "OPS-02",
      title: "MECANIZADO CNC",
      desc: "Líneas de corte láser y mecanizado CNC para piezas técnicas con tolerancias controladas y repetibilidad por serie.",
    },
    {
      img: installImg,
      code: "OPS-03",
      title: "MONTAJE EN CAMPO",
      desc: "Cuadrillas certificadas para montaje, izaje y puesta en servicio bajo protocolos de seguridad industrial.",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden border-t border-border/60 bg-graphite">
      <div aria-hidden className="absolute inset-0 -z-50">
        <img
          src={heroIndustrial}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-40"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 -z-40"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.08 0.01 240 / 0.92) 0%, oklch(0.10 0.01 240 / 0.75) 50%, oklch(0.06 0.01 240 / 0.96) 100%)",
        }}
      />
      <BrushedSteel className="opacity-20" />
      <TechnicalGrid />
      <AtmosphericHaze />
      <WeldGlow size={360} className="top-[12%] right-[8%]" />
      <WeldGlow size={240} className="bottom-[8%] left-[-60px]" flicker={false} />
      <EmberField count={20} />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: easeIndustrial }}
          className="mb-10 flex flex-col gap-3 border-b border-border/50 pb-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <Eyebrow number="03">Planta · Operaciones</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold uppercase leading-[1.05] tracking-[-0.01em] text-foreground md:text-4xl lg:text-5xl">
              Operación industrial
              <br />
              <span className="text-accent">documentada y verificable.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-[15px]">
            Cada etapa se ejecuta en planta y en sitio bajo procedimientos
            calificados, control dimensional y trazabilidad por lote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {ops.map((o, i) => (
            <motion.article
              key={o.code}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, delay: i * 0.07, ease: easeIndustrial }}
              whileHover="hover"
              animate="rest"
              className="group relative isolate flex flex-col overflow-hidden border border-border-strong bg-surface"
            >
              <div className="relative h-[220px] overflow-hidden md:h-[240px]">
                <motion.div
                  aria-hidden
                  className="absolute inset-0"
                  variants={{ rest: { scale: 1.03 }, hover: { scale: 1.09 } }}
                  transition={{ duration: 1.4, ease: easeIndustrial }}
                >
                  <img
                    src={o.img}
                    alt=""
                    loading="lazy"
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
                  <span>{o.code}</span>
                </div>
              </div>
              <div className="relative flex flex-1 flex-col p-5 md:p-6">
                <CornerTicks color="border-accent/0 group-hover:border-accent/60 transition-colors duration-700" />
                <h3 className="font-display text-lg font-bold uppercase leading-[1.1] tracking-[-0.01em] text-foreground md:text-xl">
                  {o.title}
                </h3>
                <div className="my-4 h-px w-8 bg-accent" />
                <p className="text-[13px] leading-relaxed text-foreground/75">
                  {o.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          <span className="h-1.5 w-1.5 animate-pulse bg-accent" />
          <span>QA · Control dimensional y ensayos no destructivos en cada lote</span>
          <img
            src={qaImg}
            alt=""
            aria-hidden
            className="ml-auto hidden h-8 w-16 object-cover opacity-60 md:block"
          />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── Trust Strip ───────────────────── */

const TRUST_ITEMS = [
  "FABRICACIÓN ESPECIALIZADA",
  "PRECISIÓN INDUSTRIAL",
  "SOLUCIONES METÁLICAS",
  "CAPACIDAD TÉCNICA",
  "OPERACIONES INDUSTRIALES",
];

function TrustStrip() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 bg-background px-6 py-10 md:px-10 md:py-12">
      <TechnicalGrid />
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <span className="text-accent">—</span>
          <span>Experiencia operativa</span>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={revealStagger}
          className="flex flex-wrap items-center gap-x-6 gap-y-3"
        >
          {TRUST_ITEMS.map((item, i) => (
            <motion.span
              key={item}
              variants={reveal}
              className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-foreground/85"
            >
              <span className="h-1 w-1 bg-accent" />
              {item}
              {i < TRUST_ITEMS.length - 1 && (
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

function NosotrosCTA() {
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
            Soluciones metálicas desarrolladas con experiencia, precisión y
            <span className="text-accent"> capacidad operativa.</span>
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
