import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, siteInfo } from "@/lib/site-info";
const logoAsset = "/images/logo-diversamente.png";

const legalLinks = [
  "Política de Privacidade",
  "Política de Cookies",
  "Livro de Reclamações",
  "Termos e Condições",
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-muted/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src={logoAsset}
            alt="Logótipo Diversamente"
            width={669}
            height={362}
            loading="lazy"
            className="h-20 w-auto"
          />
          <p className="mt-4 text-sm text-muted-foreground">
            Clínica de desenvolvimento infantil em Portugal. Acolhemos cada criança com
            dedicação, ciência e muito carinho.
          </p>
        </div>

        <nav aria-label="Ligações do rodapé">
          <h2 className="text-sm font-bold uppercase tracking-wide text-foreground">Navegação</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-muted-foreground hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-foreground">Contactos</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-coral" aria-hidden="true" />
              {siteInfo.address}
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-brand-green" aria-hidden="true" />
              <a href={siteInfo.phoneHref} className="hover:text-primary">
                {siteInfo.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-brand-blue" aria-hidden="true" />
              <a href={siteInfo.emailHref} className="hover:text-primary">
                {siteInfo.email}
              </a>
            </li>
            <li className="flex gap-2">
              <Instagram className="mt-0.5 size-4 shrink-0 text-brand-lilac" aria-hidden="true" />
              <a
                href={siteInfo.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                {siteInfo.instagram}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-foreground">Informações</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {legalLinks.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-primary">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Diversamente — Todos os direitos reservados.
      </div>
    </footer>
  );
}
