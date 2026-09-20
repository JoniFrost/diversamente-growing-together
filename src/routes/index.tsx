import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MessageSquareHeart,
  Footprints,
  Puzzle,
  Blocks,
  Heart,
  ArrowRight,
  Sparkles,
  School,
  UsersRound,
  Brain,
  BookOpen,
  User,
  Target,
  Users,
  TrendingUp,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import heroImage from "@/assets/hero-diversamente.jpg.asset.json";

const title = "Diversamente — Clínica de desenvolvimento infantil, Terapia ABA e Psicologia";
const description =
  "Clínica infantil em Portugal com Terapia ABA, consultas de psicologia, shadowing e acompanhamento escolar e orientação parental. Intervenções individualizadas para comunicação, autonomia e aprendizagem.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
  {
    icon: BookOpen,
    tone: "bg-brand-lilac-soft text-brand-lilac",
    title: "Competências académicas",
    text: "Apoio às competências de leitura, escrita, matemática e estudo, preparando a criança para participar com sucesso no contexto escolar.",
  },
];

const services = [
  {
    title: "Terapia ABA",
    text: "Intervenção individualizada baseada nos princípios da Análise do Comportamento Aplicada, com objetivos definidos de acordo com as necessidades da criança e da família.",
    tone: "bg-brand-blue-soft",
    accent: "bg-brand-blue",
    icon: Brain,
  },
  {
    title: "Shadowing e acompanhamento escolar",
    text: "Acompanhamento da criança no contexto escolar, promovendo a participação, autonomia, comunicação, aprendizagem e interação com colegas e profissionais.",
    tone: "bg-brand-green-soft",
    accent: "bg-brand-green",
    icon: School,
  },
  {
    title: "Orientação parental",
    text: "Apoio às famílias na compreensão dos comportamentos da criança e na aplicação de estratégias práticas nas rotinas diárias.",
    tone: "bg-brand-coral-soft",
    accent: "bg-brand-coral",
    icon: UsersRound,
  },
  {
    title: "Consultas de psicologia",
    text: "Apoio psicológico para crianças, adolescentes e famílias, promovendo o bem-estar emocional, a regulação e a compreensão das necessidades de cada um.",
    tone: "bg-brand-yellow-soft",
    accent: "bg-brand-yellow",
    icon: Heart,
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
  {
    title: "Intervenção individualizada",
    text: "Planos desenhados especificamente para o perfil, necessidades e ritmo de cada criança.",
    icon: User,
    tone: "blue",
  },
  {
    title: "Objetivos funcionais e relevantes",
    text: "Foco em metas práticas que fazem diferença no dia a dia da criança e da família.",
    icon: Target,
    tone: "green",
  },
  {
    title: "Trabalho em parceria com as famílias",
    text: "Acompanhamento contínuo e partilha de estratégias para aplicar em casa e na comunidade.",
    icon: Users,
    tone: "lilac",
  },
  {
    title: "Articulação com escolas e profissionais",
    text: "Colaboração próxima com educadores e outros técnicos para um suporte integrado.",
    icon: School,
    tone: "yellow",
  },
  {
    title: "Brincadeira como ferramenta de aprendizagem",
    text: "Utilizamos o brincar como estratégia natural para comunicar, aprender e relacionar.",
    icon: Blocks,
    tone: "coral",
  },
  {
    title: "Monitorização da evolução",
    text: "Registo sistemático dos progressos para ajustar objetivos e celebrar conquistas.",
    icon: TrendingUp,
    tone: "blue",
  },
  {
    title: "Respeito pelo ritmo de cada criança",
    text: "Cada caminho é único e merece o seu próprio tempo para florescer com confiança.",
    icon: Clock,
    tone: "green",
  },
];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-background">
        <div className="home-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 lg:grid-cols-12 lg:py-20">
          <Reveal className="z-10 lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-green/40 bg-brand-green-soft px-4 py-2 text-xs font-bold uppercase text-foreground">
              <span className="size-2 rounded-full bg-brand-green" aria-hidden="true" />
              Apoio especializado à infância
            </div>
            <h1 className="mt-6 max-w-2xl text-5xl font-extrabold leading-[1.04] sm:text-6xl lg:text-7xl">
              Cada criança aprende de forma <span className="relative inline-block text-brand-blue">diferente<span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-brand-yellow" aria-hidden="true" /></span>.
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-relaxed text-foreground/80">
              Na <strong className="text-brand-lilac">Diversamente</strong>, transformamos a brincadeira em oportunidades de aprendizagem, comunicação e autonomia.
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-foreground/70">
              Criamos intervenções individualizadas, respeitando as necessidades, os interesses e o ritmo de cada criança.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 rounded-2xl px-7 text-base shadow-soft transition-transform hover:scale-[1.03]">
                <Link to="/servicos">Conhecer os nossos serviços <ArrowRight aria-hidden="true" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 rounded-2xl border-brand-blue bg-card px-7 text-base">
                <Link to="/contactos">Marcar uma reunião</Link>
              </Button>
            </div>
            <div className="mt-9 grid max-w-lg grid-cols-3 gap-3" aria-label="Áreas em destaque">
              {[{ icon: Brain, label: "Terapia ABA", tone: "bg-brand-yellow-soft" }, { icon: School, label: "Acompanhamento", tone: "bg-brand-lilac-soft" }, { icon: UsersRound, label: "Famílias", tone: "bg-brand-green-soft" }].map((item, index) => (
                <div key={item.label} className={`${item.tone} flex min-h-28 flex-col justify-between rounded-2xl border border-border/50 p-4 ${index === 1 ? "translate-y-3" : ""}`}>
                  <item.icon className="size-6" aria-hidden="true" />
                  <span className="break-words text-xs font-bold leading-tight sm:text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="relative mx-auto w-full max-w-xl lg:col-span-6">
            <div className="absolute -right-5 -top-5 h-36 w-36 rotate-6 rounded-3xl bg-brand-coral" aria-hidden="true" />
            <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-brand-blue" aria-hidden="true" />
            <div className="absolute -right-4 bottom-20 h-24 w-24 rotate-12 rounded-2xl bg-brand-yellow" aria-hidden="true" />
            <div className="relative rotate-1 overflow-hidden rounded-[3rem] border-[12px] border-card bg-card shadow-soft">
              <img
                src={heroImage.url}
                alt="Profissional e criança a brincar juntos com blocos e puzzles numa sala acolhedora"
                width={1200}
                height={1008}
                className="aspect-[6/5] w-full object-cover"
              />
            </div>
            <div className="absolute left-0 top-8 z-10 -rotate-3 rounded-full bg-card px-5 py-3 font-display text-lg font-bold text-brand-blue shadow-soft">
              Onde brincar também é aprender.
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <Reveal>
          <p className="text-sm font-bold uppercase text-brand-green">Crescer com confiança</p>
          <h2 className="mt-2 max-w-3xl text-3xl font-bold sm:text-5xl">Um espaço para aprender, crescer e participar</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          <Reveal className="rounded-3xl bg-brand-blue-soft p-7 sm:p-10 lg:col-span-7">
            <p className="text-lg leading-relaxed text-foreground/80">Na Diversamente, acreditamos que cada criança tem competências únicas e uma forma própria de descobrir o mundo. O nosso trabalho parte dos seus interesses e motivações para desenvolver capacidades importantes para o seu dia a dia.</p>
          </Reveal>
          <Reveal delay={80} className="rounded-3xl bg-brand-yellow-soft p-7 sm:p-10 lg:col-span-5">
            <p className="text-lg leading-relaxed text-foreground/80">Através de atividades estruturadas, brincadeira e acompanhamento especializado, trabalhamos áreas como comunicação, autonomia, interação social, competências cognitivas, aprendizagem e regulação emocional.</p>
          </Reveal>
        </div>

        <Reveal><h2 className="mt-20 text-2xl font-bold sm:text-3xl">Áreas que trabalhamos</h2></Reveal>
        <ul className="mt-8 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {areas.map((area, i) => {
            const spanClass =
              i === 4 ? "lg:col-span-12" : i === 0 || i === 3 ? "lg:col-span-7" : "lg:col-span-5";
            return (
              <Reveal as="li" key={area.title} delay={i * 70} className={spanClass}>
                <div className="mosaic-lift flex h-full min-h-56 flex-col justify-between rounded-3xl border border-border/60 bg-card p-7">
                  <span className={`inline-flex size-12 items-center justify-center rounded-2xl ${area.tone}`}>
                    <area.icon className="size-6" aria-hidden="true" />
                  </span>
                  <div className="mt-8">
                    <h3 className="text-xl font-bold">{area.title}</h3>
                    <p className="mt-2 whitespace-pre-line text-base leading-relaxed text-foreground/75">{area.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </section>

      <section className="hero-gradient py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <p className="text-sm font-bold uppercase text-brand-lilac">Acompanhamento especializado</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-5xl">Serviços em destaque</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 80} className="lg:col-span-6">
                <article className={`${service.tone} mosaic-lift flex h-full min-h-64 flex-col rounded-3xl border border-card/70 p-8 lg:min-h-64`}>
                  <span className={`inline-flex size-12 items-center justify-center rounded-2xl ${service.accent}`}><service.icon className="size-6" aria-hidden="true" /></span>
                  <h3 className="mt-7 text-2xl font-bold">{service.title}</h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-foreground/75">{service.text}</p>
                  <Button asChild variant="ghost" className="mt-5 w-fit rounded-full px-0 text-foreground">
                    <Link to="/servicos">
                      Saber mais <ArrowRight className="ml-1 size-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </article>
              </Reveal>
            ))}
            <Reveal delay={320} className="md:col-span-2 lg:col-span-12">
              <article className="flex h-full flex-col justify-center rounded-3xl border-2 border-dashed border-brand-lilac/50 bg-card/70 p-7 text-center">
                <h3 className="text-lg font-bold">Outros serviços em preparação</h3>
                <p className="mt-2 text-sm text-foreground/70">
                  Terapia da fala, terapia ocupacional e avaliações.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase text-brand-blue">Passo a passo</p>
          <h2 className="mt-2 text-center text-3xl font-bold sm:text-5xl">Como funciona o acompanhamento</h2>
        </Reveal>
        <ol className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 70}>
              <div className={`mosaic-lift h-full min-h-64 rounded-3xl p-7 ${["bg-brand-blue-soft", "bg-brand-yellow-soft", "bg-brand-lilac-soft", "bg-brand-green-soft"][i]}`}>
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-card font-display text-lg font-bold shadow-sm">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-foreground/75">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="bg-brand-lilac-soft/60 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-bold sm:text-5xl">Porque cada acompanhamento deve ser único</h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 60}>
                <div className={`mosaic-lift flex h-full min-h-36 flex-col justify-between gap-5 rounded-2xl bg-card p-5 ${i === 6 ? "lg:col-span-2" : ""}`}>
                  {i % 2 === 0 ? <Heart className="size-5 text-brand-coral" aria-hidden="true" /> : <Check className="size-5 text-brand-green" aria-hidden="true" />}
                  <span className="font-medium leading-snug text-foreground/85">{item}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-brand-blue-soft px-6 py-14 text-center sm:px-12 sm:py-20">
          <Sparkles className="mx-auto size-8 text-brand-lilac" aria-hidden="true" />
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold sm:text-5xl">
            Vamos conhecer melhor as necessidades da sua criança?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-foreground/75">
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
