import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BrushedSteel } from "@/components/backgrounds/BrushedSteel";
import { TechnicalGrid } from "@/components/backgrounds/TechnicalGrid";
import { AtmosphericHaze } from "@/components/backgrounds/AtmosphericHaze";
import { WeldGlow } from "@/components/backgrounds/WeldGlow";
import { Logo } from "@/components/primitives/Logo";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-border bg-graphite">
      {/* atmospheric layers */}
      <BrushedSteel className="opacity-20" />
      <TechnicalGrid />
      <AtmosphericHaze />

      {/* soft drifting glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[10%] h-[400px] w-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.118 88 / 0.08), transparent 70%)",
        }}
        animate={{ x: [0, 30, 0], y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <WeldGlow size={300} className="bottom-[-60px] left-[-60px]" flicker={false} />

      {/* top hairline accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.118 88 / 0.4), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 py-14 md:px-10 md:py-16">
        {/* top tech strip */}
        <div className="mb-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <span className="flex items-center gap-2 text-accent">
            <span className="h-1.5 w-1.5 animate-pulse bg-accent" />
            EN OPERACIÓN
          </span>
          <span className="hidden md:inline">Lima · Perú</span>
        </div>

        <div className="grid gap-10 md:grid-cols-12 md:gap-10">
          {/* Brand */}
          <div className="md:col-span-5 space-y-5">
            <Logo variant="light" size="footer" />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Diseñamos, fabricamos e instalamos soluciones metálicas de
              precisión para industria, telecomunicaciones, sector hospitalario
              y proyectos especiales.
            </p>
            <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/80">
              <span className="border border-border-strong/60 px-2 py-1">ISO 9001</span>
              <span className="border border-border-strong/60 px-2 py-1">ASME</span>
              <span className="border border-border-strong/60 px-2 py-1">AWS D1.1</span>
            </div>
          </div>

          {/* Navegación */}
          <FooterCol
            title="Navegación"
            items={[
              { label: "Sectores", href: "/sectores" },
              { label: "Capacidades", href: "/capacidades" },
              { label: "Proyectos", href: "/#proyectos" },
              { label: "Nosotros", href: "/#nosotros" },
              { label: "Contacto", href: "/#contacto" },
            ]}
          />

          {/* Contacto */}
          <div className="md:col-span-3 space-y-5">
            <div className="text-eyebrow">Contacto</div>
            <ul className="space-y-3 text-sm text-foreground/85">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-px w-3 bg-accent" />
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                    WhatsApp
                  </div>
                  <a href="https://wa.me/51000000000" className="ink-sweep hover:text-foreground">
                    +51 000 000 000
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-px w-3 bg-accent" />
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                    Email
                  </div>
                  <a href="mailto:contacto@giamsac.com" className="ink-sweep hover:text-foreground">
                    contacto@giamsac.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-px w-3 bg-accent" />
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                    Ubicación
                  </div>
                  <span>Lima · Perú · Sector industrial A-04</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 md:flex-row md:items-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            © {new Date().getFullYear()} GIAM SAC · Todos los derechos reservados
          </div>
          <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Privacidad</Link>
            <Link to="/" className="hover:text-foreground">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="md:col-span-4 space-y-5">
      <div className="text-eyebrow">{title}</div>
      <ul className="space-y-2.5 text-sm text-foreground/85">
        {items.map((i) => (
          <li key={i.label}>
            <a href={i.href} className="ink-sweep inline-flex items-center gap-2 hover:text-foreground">
              <span className="font-mono text-[9px] text-accent/70">›</span>
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
