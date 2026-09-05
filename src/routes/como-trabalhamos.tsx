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
    shortTitle: "Reunião inicial",
    text: "Antes de iniciar qualquer intervenção, é realizada uma reunião com os pais/encarregados de educação. Esta reunião permite conhecer a criança, compreender o seu perfil, identificar dificuldades, perceber as expectativas da família e esclarecer qual a modalidade de apoio mais adequada.",
    tone: "blue" as const,
  },
  {
    title: "Observação e recolha de informação",
    shortTitle: "Observação",
    text: "Durante a reunião inicial, e sempre que possível, a equipa observa a criança e recolhe informação junto da família. No caso do Shadowing, esta informação é essencial para perceber quais os contextos em que a criança necessita de maior apoio.",
    tone: "yellow" as const,
  },
  {
    title: "Definição da modalidade de intervenção",
    shortTitle: "Modalidade",
    text: "Após a reunião, é definido se a intervenção mais indicada será Terapia ABA individual, Shadowing em contexto escolar ou uma combinação de ambas.",
    tone: "lilac" as const,
  },
  {
    title: "Proposta de número de horas",
    shortTitle: "Proposta",
    text: "A equipa poderá sugerir uma carga horária semanal com base no perfil da criança, nos objetivos definidos e no tipo de apoio pretendido. A decisão final é sempre articulada com a família, tendo também em conta a sua disponibilidade e condições financeiras.",
    tone: "coral" as const,
  },
  {
    title: "Início da intervenção",
    shortTitle: "Início",
    text: "Após acordo quanto à modalidade, horário, frequência e condições de funcionamento, inicia-se o acompanhamento da criança.",
    tone: "green" as const,
  },
];

const toneStyles: Record<
  (typeof etapas)[number]["tone"],
  {
    solid: string;
    soft: string;
    border: string;
    shadow: string;
  }
> = {
  blue: {
    solid: "bg-brand-blue",
    soft: "bg-brand-blue-soft",
    border: "border-brand-blue",
    shadow: "shadow-brand-blue/10",
  },
  yellow: {
    solid: "bg-brand-yellow",
    soft: "bg-brand-yellow-soft",
    border: "border-brand-yellow",
    shadow: "shadow-brand-yellow/10",
  },
  lilac: {
    solid: "bg-brand-lilac",
    soft: "bg-brand-lilac-soft",
    border: "border-brand-lilac",
    shadow: "shadow-brand-lilac/10",
  },
  coral: {
    solid: "bg-brand-coral",
    soft: "bg-brand-coral-soft",
    border: "border-brand-coral",
    shadow: "shadow-brand-coral/10",
  },
  green: {
    solid: "bg-brand-green",
    soft: "bg-brand-green-soft",
    border: "border-brand-green",
    shadow: "shadow-brand-green/10",
  },
};

function StepCard({
  etapa,
  index,
  align,
}: {
  etapa: (typeof etapas)[number];
  index: number;
  align: "left" | "right";
}) {
  const tone = toneStyles[etapa.tone];
  const isLeft = align === "left";

  return (
    <Reveal
      as="li"
      className="group grid w-full grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto_1fr]"
      delay={index * 100}
    >
      {/* Left slot */}
      <div
        className={`flex w-full ${isLeft ? "md:justify-end md:pr-10" : "md:order-3 md:justify-start md:pl-10"}`}
      >
        {isLeft ? (
          <div
            className={`max-w-md rounded-3xl border-b-4 ${tone.border} bg-card p-6 shadow-soft ${tone.shadow} transition-transform duration-300 group-hover:-translate-y-1`}
          >
            <h3 className="font-display text-xl font-bold text-foreground">
              {etapa.title}
            </h3>
            <p className="mt-2 text-foreground/80">{etapa.text}</p>
          </div>
        ) : (
          <div aria-hidden="true" />
        )}
      </div>

      {/* Center marker */}
      <div className="relative z-10 flex items-center justify-center py-2 md:order-2 md:py-0">
        <div
          className={`flex size-20 shrink-0 items-center justify-center rounded-full border-4 border-background ${tone.solid} font-display text-4xl font-extrabold text-primary-foreground shadow-soft transition-transform duration-300 group-hover:scale-110`}
          aria-hidden="true"
        >
          {index + 1}
        </div>
      </div>

      {/* Right slot */}
      <div
        className={`flex w-full ${isLeft ? "md:order-3 md:justify-start md:pl-10" : "md:justify-end md:pr-10"}`}
      >
        {isLeft ? (
          <div aria-hidden="true" />
        ) : (
          <div
            className={`max-w-md rounded-3xl border-b-4 ${tone.border} bg-card p-6 shadow-soft ${tone.shadow} transition-transform duration-300 group-hover:-translate-y-1`}
          >
            <h3 className="font-display text-xl font-bold text-foreground">
              {etapa.title}
            </h3>
            <p className="mt-2 text-foreground/80">{etapa.text}</p>
          </div>
        )}
      </div>
    </Reveal>
  );
}

function ComoTrabalhamos() {
  return (
    <>
      <PageHeader
        eyebrow="Como trabalhamos"
        title="Um percurso construído com a criança e com a família"
        lead="A nossa metodologia combina avaliação cuidada, objetivos funcionais e acompanhamento contínuo."
      />

      <section className="relative overflow-hidden px-4 py-16 md:py-24">
        {/* Decorative background blobs */}
        <div
          className="pointer-events-none absolute -left-20 -top-20 size-64 rounded-full bg-brand-blue-soft blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-20 -right-20 size-64 rounded-full bg-brand-coral-soft blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl">
          {/* Section header */}
          <Reveal className="mb-16 text-center">
            <h2 className="font-display text-3xl font-extrabold text-foreground md:text-4xl">
              Como{" "}
              <span className="text-brand-blue">trabalhamos</span>
            </h2>
            <div className="mx-auto mt-4 h-2 w-24 rounded-full bg-brand-yellow" />
          </Reveal>

          {/* Journey path */}
          <ol className="relative flex flex-col items-center gap-10 md:gap-16">
            {/* Curvy connecting line (desktop) */}
            <svg
              className="absolute left-1/2 top-10 -z-0 hidden h-[calc(100%-5rem)] w-32 -translate-x-1/2 text-muted md:block"
              viewBox="0 0 100 1000"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M50,0 Q80,100 50,200 T50,400 T50,600 T50,800 T50,1000"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeDasharray="8,12"
              />
            </svg>

            {etapas.map((etapa, i) => (
              <StepCard
                key={etapa.title}
                etapa={etapa}
                index={i}
                align={i % 2 === 0 ? "left" : "right"}
              />
            ))}
          </ol>

          {/* Closing note */}
          <Reveal delay={500}>
            <p className="mx-auto mt-16 max-w-3xl rounded-4xl bg-brand-lilac-soft p-8 text-center text-lg font-semibold text-foreground/85">
              A intervenção não é igual para todas as crianças. O plano é
              construído de acordo com as competências, necessidades, interesses
              e contextos de cada criança.
            </p>
          </Reveal>

          {/* CTA */}
          <Reveal delay={600}>
            <div className="mt-12 text-center">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contactos">Marcar uma reunião</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
