import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";

const title = "Serviços — Terapia ABA, Psicologia, acompanhamento escolar e orientação parental";
const description =
  "Terapia ABA, consultas de psicologia, shadowing e acompanhamento escolar e orientação parental. Intervenção individualizada para comunicação, autonomia, aprendizagem e competências sociais.";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: Servicos,
});

const servicos = [
  {
    id: "terapia-aba",
    title: "Terapia ABA",
    tone: "bg-brand-blue-soft",
    text: "A Terapia ABA utiliza princípios da Análise do Comportamento Aplicada para compreender comportamentos, desenvolver novas competências e aumentar a autonomia e a participação da criança no seu dia a dia.",
    listTitle: "Os objetivos podem incluir:",
    items: [
      "Comunicação",
      "Competências sociais",
      "Imitação",
      "Atenção",
      "Brincadeira",
      "Autonomia",
      "Competências académicas",
      "Regulação emocional",
      "Redução de comportamentos que interferem com a aprendizagem ou segurança",
    ],
  },
  {
    id: "shadowing",
    title: "Shadowing e acompanhamento escolar",
    tone: "bg-brand-green-soft",
    text: "O acompanhamento ocorre no contexto escolar e é adaptado às necessidades da criança, em articulação com a equipa educativa.",
    listTitle: "Pode incluir:",
    items: [
      "Apoio na participação nas atividades",
      "Promoção da autonomia",
      "Facilitação da comunicação",
      "Apoio na interação com os colegas",
      "Aplicação de estratégias definidas pela equipa",
      "Articulação com professores, auxiliares, terapeutas e família",
      "Recolha de informação sobre a evolução da criança",
    ],
  },
  {
    id: "orientacao-parental",
    title: "Orientação parental",
    tone: "bg-brand-coral-soft",
    text: "As sessões ajudam as famílias a compreender comportamentos e a utilizar estratégias consistentes no dia a dia.",
    listTitle: "Pode incluir:",
    items: [
      "Organização de rotinas",
      "Promoção da comunicação",
      "Desenvolvimento da autonomia",
      "Estratégias para comportamentos desafiantes",
      "Treino de competências",
      "Generalização das aprendizagens para casa e comunidade",
    ],
  },
  {
    id: "psicologia",
    title: "Consultas de psicologia",
    tone: "bg-brand-yellow-soft",
    text: "As consultas de psicologia destinam-se a crianças, adolescentes e famílias, oferecendo um espaço de escuta e acompanhamento para promover o bem-estar emocional e a compreensão das dificuldades e recursos de cada um.",
    listTitle: "Pode incluir:",
    items: [
      "Avaliação e acompanhamento do desenvolvimento emocional",
      "Apoio na regulação emocional",
      "Aconselhamento parental",
      "Intervenção em questões comportamentais",
      "Colaboração com escola e outros profissionais",
      "Acompanhamento ao longo das transições escolares e familiares",
    ],
  },
];

function Servicos() {
  return (
    <>
      <PageHeader
        eyebrow="Serviços"
        title="Acompanhamento pensado para cada criança"
        lead="Cada serviço é adaptado às necessidades, competências e contextos da criança e da sua família."
      />

      <div className="mx-auto max-w-5xl space-y-10 px-4 py-16">
        {servicos.map((servico, i) => (
          <Reveal key={servico.id} delay={i * 80}>
            <article
              id={servico.id}
              className="rounded-4xl border border-border/60 bg-card p-8 shadow-soft sm:p-10"
            >
              <span className={`inline-block h-2 w-20 rounded-full ${servico.tone}`} aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">{servico.title}</h2>
              <p className="mt-4 text-foreground/80">{servico.text}</p>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-muted-foreground">
                {servico.listTitle}
              </h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {servico.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-green" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8 rounded-full">
                <Link to="/contactos">Pedir informações</Link>
              </Button>
            </article>
          </Reveal>
        ))}

        <Reveal>
          <div className="rounded-4xl border border-dashed border-border p-8 text-center">
            <h2 className="text-xl font-bold">Outros serviços em preparação</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-foreground/70">
              Estamos a preparar novas respostas, como terapia da fala, terapia
              ocupacional e avaliações.
            </p>
          </div>
        </Reveal>
      </div>
    </>
  );
}