import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, whatsappLink } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "border-b border-border/60 bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Principal"
        className={`container-editorial flex items-center justify-between transition-all duration-700 ${
          scrolled ? "h-16" : "h-24"
        }`}
      >
        <Link to="/" className="group flex items-baseline gap-2 text-ivory">
          <span className="font-display text-lg tracking-[0.18em] uppercase">LD</span>
          <span className="text-[0.6875rem] tracking-[0.34em] uppercase text-ivory/70 transition-colors group-hover:text-sand">
            Marmoraria
          </span>
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="link-underline text-[0.6875rem] tracking-[0.24em] uppercase text-ivory/70 transition-colors hover:text-ivory data-[status=active]:text-ivory"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button asChild variant="line" size="pill" className="hidden text-ivory lg:inline-flex">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              Solicitar orçamento
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            className="grid h-11 w-11 shrink-0 place-items-center text-ivory lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-ink lg:hidden"
          >
            <div className="container-editorial flex h-24 items-center justify-between">
              <span className="font-display text-lg tracking-[0.18em] uppercase text-ivory">LD</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="grid h-11 w-11 place-items-center text-ivory"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="container-editorial mt-6 flex flex-col">
              {NAV_LINKS.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-border/50"
                >
                  <Link
                    to={l.to}
                    className="block py-5 font-display text-3xl text-ivory"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="container-editorial mt-10">
              <Button asChild variant="solid" size="xl" className="w-full">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  Solicitar orçamento
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
