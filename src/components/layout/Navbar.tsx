"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { IndustrialButton } from "@/components/primitives/IndustrialButton";
import { Logo } from "@/components/primitives/Logo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV = [
  { to: "/#inicio", label: "Inicio", num: "01" },
  { to: "/sectores", label: "Sectores", num: "02" },
  { to: "/capacidades", label: "Capacidades", num: "03" },
  { to: "/proyectos", label: "Proyectos", num: "04" },
  { to: "/nosotros", label: "Nosotros", num: "05" },
  { to: "/#contacto", label: "Contacto", num: "06" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
        scrolled
          ? "h-[72px] border-border/80 bg-background/85 backdrop-blur-xl"
          : "h-[96px] border-transparent bg-background/40 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between gap-4 px-5 md:px-10">
        {/* Wordmark */}
        <Link
          to="/"
          aria-label="GIAM SAC — Inicio"
          className="group flex min-w-0 items-center transition-opacity hover:opacity-90"
        >
          <Logo
            variant="light"
            size="navbar"
            priority
            className={cn(
              "transition-all duration-500",
              scrolled ? "scale-95" : "scale-100",
            )}
          />

        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.to}
              className="group flex items-baseline gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="text-[9px] text-accent/80">{n.num}</span>
              <span className="ink-sweep">{n.label}</span>
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <IndustrialButton variant="outline" size="sm">
              Cotizar proyecto
              <span aria-hidden>→</span>
            </IndustrialButton>
          </div>

          {/* Mobile hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Abrir menú"
                className="relative flex h-10 w-10 shrink-0 items-center justify-center border border-border-strong bg-surface-raised/40 text-foreground transition-colors hover:border-accent/60 md:hidden"
              >
                <span className="flex flex-col gap-[5px]">
                  <span className="block h-px w-5 bg-foreground" />
                  <span className="block h-px w-5 bg-foreground" />
                  <span className="block h-px w-3 bg-accent" />
                </span>
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-[88vw] max-w-sm flex-col gap-0 border-l border-border-strong bg-background p-0"
            >
              <div className="flex items-center justify-between border-b border-border/70 px-6 py-5">
                <Logo variant="light" size="navbar" />
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  Menú
                </span>
              </div>

              <nav className="flex flex-1 flex-col gap-1 px-6 py-8">
                {NAV.map((n) => (
                  <a
                    key={n.label}
                    href={n.to}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-3 border-b border-border/40 py-4 font-mono text-sm uppercase tracking-[0.18em] text-foreground transition-colors hover:text-accent"
                  >
                    <span className="text-[10px] text-accent/80">{n.num}</span>
                    <span>{n.label}</span>
                  </a>
                ))}
              </nav>

              <div className="border-t border-border/70 bg-surface-raised/30 px-6 py-6">
                <IndustrialButton
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Cotizar proyecto
                  <span aria-hidden>→</span>
                </IndustrialButton>
                <p className="mt-3 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  Lima · Perú / ISO 9001
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {/* bottom hairline glow */}
      <div className="ember-rule absolute bottom-0 left-0 h-px w-1/3 opacity-60" />
    </motion.header>
  );
}
