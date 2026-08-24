import { MessageCircle } from "lucide-react";
import { siteInfo } from "@/lib/site-info";

export function WhatsAppButton() {
  return (
    <a
      href={siteInfo.whatsappHref}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Falar connosco por WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-brand-green px-4 py-3 text-sm font-bold text-foreground shadow-soft transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span className="hidden sm:inline">Falar connosco</span>
    </a>
  );
}