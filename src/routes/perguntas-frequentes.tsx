import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { cn } from "@/lib/utils";

const title = "Perguntas frequentes — Terapia ABA e acompanhamento infantil";
const description =
  "Respostas às dúvidas mais comuns sobre Terapia ABA, local das sessões, plano de intervenção, participação da família, duração e pagamentos.";

const faqs = [
  {
    q: "O que é a Terapia ABA?",
    a: "A Análise do Comportamento Aplicada é uma abordagem científica que estuda a relação entre o comportamento e o ambiente, utilizando estratégias para promover a aprendizagem de novas competências e melhorar a participação no dia a dia.",
  },
  {
    q: "A intervenção é apenas para crianças com autismo?",
    a: "Não. O acompanhamento é definido de acordo com as necessidades da criança, independentemente do diagnóstico.",
  },
  {
    q: "Onde decorrem as sessões?",
    a: "As sessões podem decorrer nas instalações da clínica, no domicílio, na escola ou noutros contextos relevantes, dependendo do serviço contratado e da disponibilidade da equipa.",
  },
  {
    q: "Como é definido o plano de intervenção?",
    a: "O plano é criado após a recolha de informação junto da família, observação ou avaliação da criança e identificação das prioridades de intervenção.",
  },
  {
    q: "A família participa no acompanhamento?",
    a: "Sim. A colaboração da família é essencial para que as aprendizagens possam ser aplicadas nas rotinas e noutros contextos.",
  },
  {
    q: "Quanto tempo dura cada sessão?",
    a: "A duração e frequência são definidas de acordo com as necessidades da criança e com o plano de intervenção.",
  },
  {
    q: "Como são realizados os pagamentos?",
    a: "No final de cada mês, é enviado à família um mapa com as sessões realizadas, o número de horas e o valor total. Após a confirmação da informação, poderá ser efetuado o pagamento.",
  },
  {
    q: "É possível acompanhar a evolução da criança?",
    a: "Sim. A equipa monitoriza os objetivos definidos e partilha regularmente informação sobre a evolução, dificuldades e próximos passos.",
  },
];

export const Route = createFileRoute("/perguntas-frequentes")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/perguntas-frequentes" },
    ],
    links: [{ rel: "canonical", href: "/perguntas-frequentes" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Faq,
});

const tones = ["blue", "green", "lilac", "yellow"] as const;
type Tone = (typeof tones)[number];

const toneClasses: Record<Tone, { card: string; badge: string }> = {
  blue: {
    card: "border-brand-blue/30",
    badge:
      "bg-brand-blue-soft text-brand-blue group-data-[state=open]:bg-brand-blue group-data-[state=open]:text-white",
  },
  green: {
    card: "border-brand-green/30",
    badge:
      "bg-brand-green-soft text-brand-green group-data-[state=open]:bg-brand-green group-data-[state=open]:text-white",
  },
  lilac: {
    card: "border-brand-lilac/30",
    badge:
      "bg-brand-lilac-soft text-brand-lilac group-data-[state=open]:bg-brand-lilac group-data-[state=open]:text-white",
  },
  yellow: {
    card: "border-brand-yellow/60",
    badge:
      "bg-brand-yellow-soft text-brand-yellow-deep group-data-[state=open]:bg-brand-yellow group-data-[state=open]:text-foreground",
  },
};

function Faq() {
  return (
    <>
      <PageHeader
        eyebrow="Perguntas frequentes"
        title="Dúvidas mais comuns das famílias"
        lead="Se não encontrar a resposta que procura, fale connosco. Teremos todo o gosto em ajudar."
      />

      <div className="mx-auto max-w-3xl px-4 py-16">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => {
            const tone = toneClasses[tones[i % tones.length]];
            return (
              <Reveal as="div" key={faq.q} delay={i * 40}>
                <AccordionItem
                  value={`item-${i}`}
                  className={cn(
                    "group rounded-[1.5rem] border-2 bg-card p-1 shadow-soft transition-all duration-300 hover:-translate-y-1",
                    tone.card,
                  )}
                >
                  <AccordionTrigger className="px-5 py-5 font-display text-base font-bold no-underline hover:no-underline sm:text-lg [&>svg]:hidden">
                    {faq.q}
                    <span
                      className={cn(
                        "ml-4 inline-flex size-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300",
                        tone.badge,
                      )}
                      aria-hidden="true"
                    >
                      <Plus className="size-4 group-data-[state=open]:hidden" />
                      <Minus className="hidden size-4 group-data-[state=open]:block" />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5 leading-relaxed text-foreground/75">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </Reveal>
            );
          })}
        </Accordion>

        <Reveal>
          <div className="mt-14 text-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 text-base shadow-[0_6px_0_color-mix(in_oklab,var(--brand-coral)_72%,black)] transition-all active:translate-y-1 active:shadow-none"
            >
              <Link to="/contactos">Pedir informações</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </>
  );
}