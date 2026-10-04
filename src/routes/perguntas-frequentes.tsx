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

function Faq() {
  return (
    <>
      <PageHeader
        eyebrow="Perguntas frequentes"
        title="Dúvidas mais comuns das famílias"
        lead="Se não encontrar a resposta que procura, fale connosco. Teremos todo o gosto em ajudar."
      />

      <div className="mx-auto max-w-3xl px-4 py-16">
        <Reveal>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-display text-base font-bold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/75">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contactos">Pedir informações</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </>
  );
}