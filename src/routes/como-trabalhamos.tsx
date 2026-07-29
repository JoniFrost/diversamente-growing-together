import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";

const title = "Como trabalhamos — Metodologia da Diversamente";
const description =
  "Conheça a metodologia da Diversamente: avaliação de competências, objetivos funcionais, plano individualizado, análise de dados e parceria com família e escola.";

export const Route = createFileRoute("/como-trabalhamos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/como-trabalhamos" },
    ],
    links: [{ rel: "canonical", href: "/como-trabalhamos" }],
  }),
  component: ComoTrabalhamos,
});

const etapas = [
  {
    title: "Conhecer a criança para além do diagnóstico",
    text: "Começamos por conhecer os interesses, a forma de comunicar e o que já faz parte do dia a dia da criança.",
  },
  {
    title: "Avaliar competências, dificuldades e interesses",
    text: "Recolhemos informação junto da família e observamos a criança nos contextos relevantes.",
  },
  {
    title: "Definir objetivos mensuráveis e funcionais",
    text: "Escolhemos objetivos com impacto real nas rotinas, na participação e na autonomia.",
  },
  {
    title: "Criar um plano individualizado",
    text: "O plano organiza as prioridades, as estratégias e a forma de as aplicar nos vários contextos.",
  },
  {
    title: "Recolher e analisar dados sobre a evolução",
    text: "Registamos a evolução de cada objetivo para tomar decisões informadas ao longo do tempo.",
  },
  {
    title: "Trabalhar em parceria com a família",
    text: "Partilhamos estratégias e ajustamos o plano em conjunto com quem acompanha a criança todos os dias.",
  },
  {
    title: "Articular com a escola e outros profissionais",
    text: "Alinhamos as estratégias com professores, auxiliares e restantes técnicos envolvidos.",
  },
  {
    title: "Adaptar regularmente a intervenção",
    text: "Revemos objetivos e estratégias sempre que a evolução ou o contexto da criança o justificam.",
  },
];

function ComoTrabalhamos() {
  return (
    <>
      <PageHeader
        eyebrow="Como trabalhamos"
        title="Um percurso construído com a criança e com a família"
        lead="A nossa metodologia combina avaliação cuidada, objetivos funcionais e acompanhamento contínuo."
      />

      <div className="mx-auto max-w-4xl px-4 py-16">
        <ol className="space-y-5">
          {etapas.map((etapa, i) => (
            <Reveal as="li" key={etapa.title} delay={i * 60}>
              <div className="flex gap-4 rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-lg font-bold text-secondary-foreground">
                  {i + 1}
                </span>
                <div>
                  <h2 className="text-lg font-bold">{etapa.title}</h2>
                  <p className="mt-1.5 text-sm text-foreground/75">{etapa.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <p className="mt-12 rounded-4xl bg-brand-lilac-soft p-8 text-center text-lg font-semibold text-foreground/85">
            A intervenção não é igual para todas as crianças. O plano é construído de acordo com as
            competências, necessidades, interesses e contextos de cada criança.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contactos">Marcar uma reunião</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </>
  );
}