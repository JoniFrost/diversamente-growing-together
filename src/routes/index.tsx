import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MessageSquareHeart,
  Footprints,
  Puzzle,
  Blocks,
  Heart,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import heroImage from "@/assets/hero-diversamente.jpg.asset.json";

const title = "Diversamente — Clínica de desenvolvimento infantil e Terapia ABA";
const description =
  "Clínica infantil em Portugal com Terapia ABA, shadowing e acompanhamento escolar e orientação parental. Intervenções individualizadas para comunicação, autonomia e aprendizagem.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const areas = [
  {
    icon: MessageSquareHeart,
    tone: "bg-brand-blue-soft text-brand-blue",
    title: "Comunicação",
    text: "Desenvolvimento da comunicação receptiva e expressiva.\n\n",
  },
  {
    icon: Footprints,
    tone: "bg-brand-green-soft text-brand-green",
    title: "Autonomia",
    text: "Aquisição de competências importantes para as rotinas e participação no dia a dia.",
  },
  {
    icon: Puzzle,
    tone: "bg-brand-yellow-soft text-brand-yellow",
    title: "Aprendizagem e raciocínio",
    text: "Desenvolvimento da atenção, perceção visual, memória, lógica e resolução de problemas.",
  },
  {
    icon: Blocks,
    tone: "bg-brand-coral-soft text-brand-coral",
    title: "Brincadeira e interação social",
    text: "Promoção da brincadeira funcional, partilha, imitação e interação com outras pessoas.",
  },
];

const services = [
  {
    title: "Terapia ABA",
    text: "Intervenção individualizada baseada nos princípios da Análise do Comportamento Aplicada, com objetivos definidos de acordo com as necessidades da criança e da família.",
    tone: "bg-brand-blue-soft",
  },
  {
    title: "Shadowing e acompanhamento escolar",
    text: "Acompanhamento da criança no contexto escolar, promovendo a participação, autonomia, comunicação, aprendizagem e interação com colegas e profissionais.",
    tone: "bg-brand-green-soft",
  },
  {
    title: "Orientação parental",
    text: "Apoio às famílias na compreensão dos comportamentos da criança e na aplicação de estratégias práticas nas rotinas diárias.",
    tone: "bg-brand-coral-soft",
  },
];

const steps = [
  {
    title: "Primeiro contacto",
    text: "A família entra em contacto e partilha as principais preocupações e necessidades.",
  },
  {
    title: "Reunião inicial",
    text: "Conhecemos a família e a criança e recolhemos informação sobre o seu desenvolvimento e contexto.",
  },
  {
    title: "Avaliação e definição de objetivos",
    text: "São identificadas as competências a desenvolver e criado um plano individualizado.",
  },
  {
    title: "Intervenção e acompanhamento",
    text: "As sessões são realizadas e os objetivos são revistos de acordo com a evolução da criança.",
  },
];

const differentiators = [
  "Intervenção individualizada",
  "Objetivos funcionais e relevantes para o dia a dia",
  "Trabalho em parceria com as famílias",
  "Articulação com escolas e outros profissionais",
  "Utilização da brincadeira como ferramenta de aprendizagem",
  "Monitorização da evolução",
  "Respeito pelo ritmo, necessidades e características de cada criança",
];

function Index() {
  return (
    <>
      <section className="surface-soft">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full bg-card/80 px-4 py-1.5 text-sm font-semibold text-primary">
              <Sparkles className="size-4" aria-hidden="true" /> Onde brincar também é aprender.
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Cada criança aprende de forma diferente.
            </h1>
            <p className="mt-5 text-lg text-foreground/80">
              Na Diversamente, transformamos a brincadeira em oportunidades de aprendizagem,
              comunicação e autonomia.
            </p>
            <p className="mt-3 text-base text-foreground/70">
              Criamos intervenções individualizadas, respeitando as necessidades, os interesses e o
              ritmo de cada criança.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/servicos">Conhecer os nossos serviços</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full bg-card">
                <Link to="/contactos">Marcar uma reunião</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={heroImage.url}
              alt="Profissional e criança a brincar juntos com blocos e puzzles numa sala acolhedora"
              width={1200}
              height={1008}
              className="w-full rounded-4xl shadow-soft"
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:py-20">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Um espaço para aprender, crescer e participar
          </h2>
          <p className="mt-5 text-lg text-foreground/75">
            Na Diversamente, acreditamos que cada criança tem competências únicas e uma forma própria
            de descobrir o mundo. O nosso trabalho parte dos seus interesses e motivações para
            desenvolver capacidades importantes para o seu dia a dia.
          </p>
          <p className="mt-4 text-lg text-foreground/75">
            Através de atividades estruturadas, brincadeira e acompanhamento especializado,
            trabalhamos áreas como comunicação, autonomia, interação social, competências cognitivas,
            aprendizagem e regulação emocional.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:pb-20">
        <Reveal>
          <h2 className="text-center text-2xl font-bold sm:text-3xl">Áreas que trabalhamos</h2>
        </Reveal>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area, i) => (
            <Reveal as="li" key={area.title} delay={i * 90}>
              <div className="h-full rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
                <span
                  className={`inline-flex size-12 items-center justify-center rounded-2xl ${area.tone}`}
                >
                  <area.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{area.title}</h3>
                <p className="mt-2 text-sm text-foreground/75">{area.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="bg-muted/60 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <h2 className="text-center text-3xl font-bold sm:text-4xl">Serviços em destaque</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 90}>
                <article className="flex h-full flex-col rounded-3xl border border-border/60 bg-card p-7 shadow-soft">
                  <span className={`h-2 w-16 rounded-full ${service.tone}`} aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 text-sm text-foreground/75">{service.text}</p>
                  <Button asChild variant="ghost" className="mt-6 w-fit rounded-full px-0 text-primary">
                    <Link to="/servicos">
                      Saber mais <ArrowRight className="ml-1 size-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </article>
              </Reveal>
            ))}
            <Reveal delay={270}>
              <article className="flex h-full flex-col justify-center rounded-3xl border border-dashed border-border bg-card/50 p-7 text-center">
                <h3 className="text-lg font-bold">Novos serviços em preparação</h3>
                <p className="mt-2 text-sm text-foreground/70">
                  Psicologia, terapia da fala, terapia ocupacional e avaliações.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal>
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Como funciona o acompanhamento
          </h2>
        </Reveal>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 90}>
              <div className="h-full rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-foreground/75">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="bg-brand-lilac-soft/60 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <Reveal>
            <h2 className="text-center text-3xl font-bold sm:text-4xl">
              Porque cada acompanhamento deve ser único
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {differentiators.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 60}>
                <div className="flex h-full items-start gap-3 rounded-2xl bg-card p-4">
                  <Heart className="mt-0.5 size-5 shrink-0 text-brand-coral" aria-hidden="true" />
                  <span className="text-sm font-medium text-foreground/85">{item}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:py-20">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Vamos conhecer melhor as necessidades da sua criança?
          </h2>
          <p className="mt-4 text-lg text-foreground/75">
            Marque uma primeira reunião connosco para esclarecer dúvidas e perceber de que forma
            podemos ajudar.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contactos">Marcar reunião</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-card">
              <Link to="/contactos">Enviar mensagem</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
