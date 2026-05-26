import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { GraphiteBackdrop } from "@/components/backgrounds/GraphiteBackdrop";
import { BrushedSteel } from "@/components/backgrounds/BrushedSteel";
import { TechnicalGrid } from "@/components/backgrounds/TechnicalGrid";
import { WeldGlow } from "@/components/backgrounds/WeldGlow";
import { SmokeLayer } from "@/components/backgrounds/SmokeLayer";
import { LightingShaft } from "@/components/backgrounds/LightingShaft";
import { AtmosphericHaze } from "@/components/backgrounds/AtmosphericHaze";
import { LightShafts } from "@/components/backgrounds/LightShafts";
import { FloatingGear } from "@/components/industrial/FloatingGear";
import { MetallicRing } from "@/components/industrial/MetallicRing";
import { BoltCluster } from "@/components/industrial/BoltCluster";
import { WireframeBlock } from "@/components/industrial/WireframeBlock";
import { SparksLayer } from "@/components/industrial/SparksLayer";
import { EmberField } from "@/components/industrial/EmberField";
import { Logo } from "@/components/primitives/Logo";
import heroIndustrial from "@/assets/hero-industrial.jpg";
import { CornerTicks } from "@/components/primitives/CornerTicks";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { SpecBlock } from "@/components/primitives/SpecBlock";
import { StatCounter } from "@/components/primitives/StatCounter";
import { IndustrialButton } from "@/components/primitives/IndustrialButton";
import { Divisions } from "@/components/sections/Divisions";
import { Clients } from "@/components/sections/Clients";
import { Process } from "@/components/sections/Process";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { reveal, revealStagger, viewport } from "@/lib/motion";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <GraphiteBackdrop />
      <Navbar />
      <main className="pt-16 md:pt-[72px]">
        <section id="inicio" aria-hidden className="scroll-mt-[96px]" />
        <Hero />
        <section id="sectores" aria-hidden className="scroll-mt-[96px]" />
        <Divisions />
        <section id="proyectos" aria-hidden className="scroll-mt-[96px]" />
        <Clients />
        <section id="capacidades" aria-hidden className="scroll-mt-[96px]" />
        <Process />
        <section id="contacto" aria-hidden className="scroll-mt-[96px]" />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ───────────────────────── HERO ───────────────────────── */

function Hero() {
  return (
    <section className="relative isolate flex min-h-[78vh] w-full items-center overflow-hidden bg-graphite md:min-h-[82vh]">
      {/* ── Cinematic background plate ── */}
      <div aria-hidden className="absolute inset-0 -z-50">
        <motion.img
          src={heroIndustrial}
          alt=""
          width={1920}
          height={1080}
          fetchPriority="high"
          className="h-full w-full object-cover"
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1.04, opacity: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* slow cinematic drift */}
        <motion.div
          className="absolute inset-0"
          animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage: `url(${heroIndustrial})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0,
          }}
        />
      </div>

      {/* ── Cinematic dark overlays for readability ── */}
      <div
        aria-hidden
        className="absolute inset-0 -z-40"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.12 0.01 240 / 0.7) 0%, oklch(0.12 0.01 240 / 0.3) 35%, oklch(0.12 0.01 240 / 0.55) 75%, oklch(0.08 0.01 240 / 0.95) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-40"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.08 0.01 240 / 0.88) 0%, oklch(0.10 0.01 240 / 0.35) 50%, transparent 78%)",
        }}
      />
      {/* vignette */}
      <div
        aria-hidden
        className="absolute inset-0 -z-30"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 45%, oklch(0.06 0.01 240 / 0.9) 100%)",
        }}
      />

      {/* ── Atmospheric depth layers (cinematic, no literal icons) ── */}
      <BrushedSteel className="opacity-25" />
      <TechnicalGrid />
      <AtmosphericHaze />
      <LightShafts />
      <SmokeLayer />

      {/* warm ambient weld bloom — diffuse, no hard shapes */}
      <WeldGlow size={620} className="bottom-[14%] right-[22%]" />
      <WeldGlow size={360} className="top-[30%] left-[-120px]" flicker={false} />
      <WeldGlow size={300} className="bottom-[6%] right-[-80px]" />

      {/* particles: sparks at the weld origin + drifting embers */}
      <SparksLayer count={22} originX={62} originY={68} />
      <SparksLayer count={10} originX={18} originY={76} />
      <EmberField count={48} />

      {/* horizontal technical scanline */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/3 h-px -z-10"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.118 88 / 0.6), transparent)",
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: [0, 1, 0.4] }}
        transition={{ duration: 1.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* ── Foreground content ── */}
      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-12 gap-8 px-6 py-16 md:px-10 md:py-24 lg:py-28">

        {/* headline column */}
        <div className="col-span-12 mt-6 max-w-3xl space-y-6 lg:col-span-9 lg:mt-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Eyebrow number="00">Ingeniería · Fabricación · Metalmecánica</Eyebrow>
          </motion.div>

          <motion.h1
            variants={revealStagger}
            initial="hidden"
            animate="visible"
            transition={{ delayChildren: 0.55, staggerChildren: 0.1 }}
            className="font-display text-[28px] font-bold uppercase leading-[1.05] tracking-[-0.015em] text-foreground sm:text-[34px] md:text-[44px] lg:text-[52px] xl:text-[60px]"
          >
            <motion.span variants={reveal} className="block">
              Ingeniería aplicada
            </motion.span>
            <motion.span variants={reveal} className="block">
              al <span className="text-accent">metal</span> para
            </motion.span>
            <motion.span variants={reveal} className="block text-foreground/85">
              operaciones industriales
            </motion.span>
            <motion.span variants={reveal} className="block text-foreground/65">
              exigentes.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.8 }}
            className="max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-base"
          >
            Diseñamos, fabricamos y desarrollamos soluciones metálicas de
            precisión para telecomunicaciones, sector hospitalario, industria y
            proyectos especiales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.45, duration: 0.8 }}
            className="flex items-center gap-6"
          >
            <IndustrialButton variant="secondary" size="lg" className="group/cta relative overflow-hidden border-border-strong">
              <span className="relative z-10">Cotizar proyecto</span>
              <span aria-hidden className="relative z-10 transition-transform duration-500 group-hover/cta:translate-x-1">→</span>
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(115deg, transparent 42%, oklch(1 0 0 / 0.18) 50%, transparent 58%)",
                }}
                initial={{ x: "-120%" }}
                animate={{ x: ["-120%", "120%"] }}
                transition={{ duration: 3.6, repeat: Infinity, repeatDelay: 3, ease: [0.22, 1, 0.36, 1] }}
              />
            </IndustrialButton>

            <div className="hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:flex">
              <span className="h-px w-10 bg-border-strong" />
              ISO 9001 · ASME · AWS D1.1
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

/* ──────────────────── CAPABILITY GRID ──────────────────── */

const CAPS = [
  {
    n: "01",
    title: "Precision Machining",
    desc: "5-axis CNC, EDM, and grinding for tolerances under ±0.005 mm.",
    spec: "ISO 2768 fH",
  },
  {
    n: "02",
    title: "Welding & Assembly",
    desc: "Certified MIG, TIG, SAW, and orbital welding on carbon and stainless.",
    spec: "ASME IX / AWS D1.1",
  },
  {
    n: "03",
    title: "Structural Steel",
    desc: "Heavy beam fabrication for industrial plants, bridges, and stacks.",
    spec: "EN 1090-2 EXC4",
  },
  {
    n: "04",
    title: "Pressure Vessels",
    desc: "ASME-stamped vessels and heat exchangers up to Class 600.",
    spec: "ASME VIII Div.1",
  },
  {
    n: "05",
    title: "Field Installation",
    desc: "Turnkey on-site assembly, alignment, and commissioning crews.",
    spec: "API 1104 / ISO 3834",
  },
  {
    n: "06",
    title: "Industrial Coatings",
    desc: "Sandblasting, metallization, and high-build epoxy systems.",
    spec: "SSPC-SP10 / NACE 2",
  },
];

function CapabilityGrid() {
  return (
    <Section className="border-t border-border/60">
      <TechnicalGrid />
      <FloatingGear size={140} rpm={80} className="top-20 left-[5%] opacity-50" />

      <SectionHeader
        eyebrow="Capabilities"
        number="01"
        title={
          <>
            Six disciplines.
            <br />
            <span className="text-accent">One operational standard.</span>
          </>
        }
        lead="From cold-rolled stock to commissioned installation, every stage runs under the same documented quality system."
        className="mb-20"
      />

      <motion.div
        variants={revealStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3"
      >
        {CAPS.map((c) => (
          <motion.article
            key={c.n}
            variants={reveal}
            whileHover={{ y: -2 }}
            className="group relative bg-background p-8 transition-colors duration-500 hover:bg-surface md:p-10"
          >
            <CornerTicks color="border-accent/0 group-hover:border-accent/60 transition-colors duration-500" />
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs text-accent">{c.n}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {c.spec}
              </span>
            </div>
            <h3 className="mt-12 font-display text-2xl font-bold tracking-tight md:text-3xl">
              {c.title}
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {c.desc}
            </p>
            <div className="mt-10 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/60 transition-colors group-hover:text-accent">
              <span>Read brief</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

/* ──────────────────── SPECS / DOSSIER ──────────────────── */

function SpecsSection() {
  return (
    <Section className="border-t border-border/60 bg-steel">
      <BrushedSteel />
      <WeldGlow size={500} className="top-1/2 -right-40 -translate-y-1/2" />
      <WireframeBlock className="bottom-10 right-[8%] hidden h-48 w-60 lg:block" />

      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow="Dossier"
            number="02"
            title={
              <>
                Documented
                <br />
                <span className="text-accent">to the gram.</span>
              </>
            }
            lead="Every piece leaves the floor with full material traceability — heat numbers, weld maps, and digital QC records archived for 25 years."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6"
        >
          <div className="relative border border-border-strong bg-background/60 p-8 shadow-inset-edge backdrop-blur md:p-10">
            <CornerTicks />
            <div className="mb-6 flex items-center justify-between">
              <div className="text-eyebrow">Specimen Sheet · #A-2024-1187</div>
              <span className="font-mono text-[10px] text-accent">VERIFIED</span>
            </div>
            <SpecBlock
              rows={[
                { label: "Material", value: "AISI 4140 / Annealed" },
                { label: "Tensile", value: "655 MPa" },
                { label: "Yield", value: "415 MPa" },
                { label: "Hardness", value: "197 HB" },
                { label: "Tolerance Class", value: "ISO 2768-fH" },
                { label: "Surface Finish", value: "Ra 0.8 μm" },
                { label: "Heat Lot", value: "HT-A4-1187-26" },
                { label: "Inspector", value: "M. RIVERA / QC-12" },
              ]}
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ──────────────────── STATS BAND ──────────────────── */

function StatsBand() {
  return (
    <Section className="border-t border-border/60">
      <TechnicalGrid />
      <MetallicRing size={500} className="top-[-100px] right-[-150px] opacity-40" />

      <Eyebrow number="03" className="mb-12">By the numbers</Eyebrow>
      <div className="grid gap-12 md:grid-cols-4">
        <StatCounter value={27} unit="YRS" label="In operation" />
        <StatCounter value={612} unit="STAFF" label="Skilled workforce" />
        <StatCounter value={32400} unit="T/YR" label="Steel processed" />
        <StatCounter value={99} unit="% UPTIME" label="Plant availability" />
      </div>
    </Section>
  );
}

/* ──────────────── COMPONENT GALLERY ──────────────── */

function ComponentGallery() {
  return (
    <Section className="border-t border-border/60 bg-graphite">
      <SmokeLayer />
      <SectionHeader
        eyebrow="Design System"
        number="04"
        title={
          <>
            Built with the
            <br />
            <span className="text-accent">same discipline.</span>
          </>
        }
        lead="Every component below uses the same tokens, motion language, and lighting direction as the rest of the site."
        className="mb-20"
      />

      <div className="grid gap-px bg-border md:grid-cols-2">
        <Tile title="Buttons">
          <div className="flex flex-wrap gap-3">
            <IndustrialButton variant="primary">Primary Action</IndustrialButton>
            <IndustrialButton variant="secondary">Secondary</IndustrialButton>
            <IndustrialButton variant="outline">Outline</IndustrialButton>
            <IndustrialButton variant="ghost">Ghost →</IndustrialButton>
          </div>
        </Tile>

        <Tile title="Typography">
          <div className="space-y-3">
            <div className="font-display text-4xl font-black tracking-tight">Display / Archivo</div>
            <div className="text-base text-muted-foreground">Body — Inter, 16px, 1.6 line height for optimal industrial readability.</div>
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Mono · JetBrains · Specs &amp; Labels</div>
          </div>
        </Tile>

        <Tile title="Eyebrow">
          <Eyebrow number="07">Section Marker</Eyebrow>
        </Tile>

        <Tile title="Spec Block">
          <SpecBlock
            rows={[
              { label: "Token", value: "--accent" },
              { label: "Value", value: "oklch(0.72 0.118 88)" },
              { label: "Use", value: "Welding glow / CTA" },
            ]}
          />
        </Tile>

        <Tile title="Color Tokens">
          <div className="flex gap-3">
            {[
              { c: "bg-background", l: "BG" },
              { c: "bg-surface", l: "SURF" },
              { c: "bg-surface-raised", l: "RAISE" },
              { c: "bg-accent", l: "WELD" },
              { c: "bg-foreground", l: "FG" },
            ].map((s) => (
              <div key={s.l} className="flex flex-col items-center gap-2">
                <div className={`h-14 w-14 border border-border ${s.c}`} />
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </Tile>

        <Tile title="Motion">
          <p className="text-sm text-muted-foreground">
            Reveals: 24px translate-up over 700ms, ease <span className="font-mono text-accent">[0.22, 1, 0.36, 1]</span>. Hover bloom on primary CTAs. Reduced-motion respected.
          </p>
        </Tile>
      </div>
    </Section>
  );
}

function Tile({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-background p-8 md:p-10"
    >
      <div className="text-eyebrow mb-6">{title}</div>
      {children}
    </motion.div>
  );
}
