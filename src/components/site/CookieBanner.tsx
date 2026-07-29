import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const KEY = "diversamente-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem(KEY)) setVisible(true);
  }, []);

  const decide = (value: "aceite" | "essenciais") => {
    window.localStorage.setItem(KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Gestão de cookies"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 px-4 py-4 backdrop-blur"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center">
        <p className="text-sm text-muted-foreground">
          Utilizamos cookies para melhorar a sua experiência no site. Pode aceitar todos os cookies
          ou manter apenas os essenciais.
        </p>
        <div className="flex shrink-0 gap-2 sm:ml-auto">
          <Button variant="outline" className="rounded-full" onClick={() => decide("essenciais")}>
            Apenas essenciais
          </Button>
          <Button className="rounded-full" onClick={() => decide("aceite")}>
            Aceitar cookies
          </Button>
        </div>
      </div>
    </div>
  );
}