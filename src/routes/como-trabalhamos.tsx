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
    title: "Reunião inicial com a família",
    text: "Antes de iniciar qualquer intervenção, é realizada uma reunião com os pais/encarregados de educação. Esta reunião permite conhecer a criança, compreender o seu perfil, identificar dificuldades, perceber as expectativas da família e esclarecer qual a modalidade de apoio mais adequada.",
  },
  {
    title: "Observação e recolha de informação",
    text: "Durante a reunião inicial, e sempre que possível, a equipa observa a criança e recolhe informação junto da família. No caso do Shadowing, esta informação é essencial para perceber quais os contextos em que a criança necessita de maior apoio.",
  },
  {
    title: "Definição da modalidade de intervenção",
    text: "Após a reunião, é definido se a intervenção mais indicada será Terapia ABA individual, Shadowing em contexto escolar ou uma combinação de ambas.",
  },
  {
    title: "Proposta de número de horas",
    text: "A equipa poderá sugerir uma carga horária semanal com base no perfil da criança, nos objetivos definidos e no tipo de apoio pretendido. A decisão final é sempre articulada com a família, tendo também em conta a sua disponibilidade e condições financeiras.",
  },
  {
    title: "Início da intervenção",
    text: "Após acordo quanto à modalidade, horário, frequência e condições de funcionamento, inicia-se o acompanhamento da criança.",
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