import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/site-info";
import logoAsset from "@/assets/logo-diversamente.png.asset.json";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="Logótipo Diversamente" width={40} height={40} className="h-10 w-10" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold text-primary">{siteInfo.name}</span>
            <span className="hidden text-xs text-muted-foreground sm:block">{siteInfo.slogan}</span>
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="ml-auto hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-secondary text-secondary-foreground" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button asChild className="ml-auto hidden rounded-full lg:ml-2 lg:inline-flex">
          <Link to="/contactos">Marcar reunião</Link>
        </Button>

        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movel"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div id="menu-movel" className="border-t border-border/60 bg-background lg:hidden">
          <nav aria-label="Navegação móvel" className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-semibold text-foreground/85 hover:bg-secondary"
                activeProps={{ className: "bg-secondary text-secondary-foreground" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 rounded-full">
              <Link to="/contactos" onClick={() => setOpen(false)}>
                Marcar reunião
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}