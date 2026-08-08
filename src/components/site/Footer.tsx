import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import { NAV_LINKS, SITE, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-ink pt-20 pb-10 text-ivory">
      <div className="container-editorial">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <p className="font-display text-5xl leading-[0.92] tracking-tight sm:text-6xl">
              LD
              <br />
              <span className="text-ivory/55">Marmoraria</span>
            </p>
            <p className="mt-6 max-w-xs text-sm text-ivory/55">{SITE.tagline}</p>
          </div>

          <nav aria-label="Rodapé">
            <p className="eyebrow">Navegação</p>
            <ul className="mt-6 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="link-underline text-sm text-ivory/70 transition-colors hover:text-ivory"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow">Contato</p>
            <ul className="mt-6 space-y-4 text-sm text-ivory/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sand" />
                <span>
                  {SITE.address.street}
                  <br />
                  {SITE.address.city} — {SITE.address.state}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sand" />
                <a href={SITE.phoneHref} className="link-underline hover:text-ivory">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sand" />
                <a href={`mailto:${SITE.email}`} className="link-underline break-all hover:text-ivory">
                  {SITE.email}
                </a>
              </li>
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-border px-4 py-2 text-[0.625rem] tracking-[0.2em] uppercase text-ivory/75 transition-colors hover:border-sand hover:text-sand"
              >
                WhatsApp
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-[0.625rem] tracking-[0.2em] uppercase text-ivory/75 transition-colors hover:border-sand hover:text-sand"
              >
                <Instagram className="h-3.5 w-3.5" /> Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border/60 pt-7 text-[0.625rem] tracking-[0.2em] uppercase text-ivory/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} LD Marmoraria — Todos os direitos reservados.</span>
          <span>Jacareí • São Paulo</span>
        </div>
      </div>
    </footer>
  );
}
