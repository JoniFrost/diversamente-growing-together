import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import adrianaPhoto from "@/assets/adriana-madeira.jpg.asset.json";
import inesPhoto from "@/assets/ines-costa.png.asset.json";
import neidPhoto from "@/assets/neid-cardoso.jpg.asset.json";
import { Heart, Users, Puzzle, Lightbulb, Star, Sparkles } from "lucide-react";


const title = "Sobre nós — Diversamente";
const description =
  "Conheça a missão, a visão e os valores da Diversamente: intervenção individualizada, inclusiva e baseada em evidência para crianças e famílias.";

export const Route = createFileRoute("/sobre-nos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/sobre-nos" },
    ],
    links: [{ rel: "canonical", href: "/sobre-nos" }],
  }),
  component: SobreNos,
});

const valores = [
  "Respeito pela individualidade",
  "Inclusão",
  "Empatia",
  "Colaboração",
  "Ética",
  "Intervenção baseada em evidência",
  "Aprendizagem através da brincadeira",
  "Valorização das famílias",
];


const colorMap = {
  coral: {
    soft: "bg-brand-coral-soft",
    solid: "bg-brand-coral",
    text: "text-[oklch(0.67_0.13_30)]",
    border: "border-brand-coral/25",
  },
  lilac: {
    soft: "bg-brand-lilac-soft",
    solid: "bg-brand-lilac",
    text: "text-[oklch(0.62_0.1_300)]",
    border: "border-brand-lilac/25",
  },
  blue: {
    soft: "bg-brand-blue-soft",
    solid: "bg-brand-blue",
    text: "text-[oklch(0.62_0.11_240)]",
    border: "border-brand-blue/25",
  },
  green: {
    soft: "bg-brand-green-soft",
    solid: "bg-brand-green",
    text: "text-[oklch(0.62_0.1_160)]",
    border: "border-brand-green/25",
  },
  yellow: {
    soft: "bg-brand-yellow-soft",
    solid: "bg-brand-yellow",
    text: "text-[oklch(0.55_0.1_80)]",
    border: "border-brand-yellow/40",
  },
};

function TimelineItem({
  number,
  icon,
  title,
  text,
  color,
  align,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  text: string;
  color: keyof typeof colorMap;
  align: "left" | "right";
}) {
  const c = colorMap[color];
  const isLeft = align === "left";

  return (
    <Reveal>
      <div
        className={`relative flex items-start gap-6 md:items-center ${
          isLeft ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {/* Marcador da timeline — desktop: centrado na linha; mobile: bolha à esquerda */}
        <div
          className={`absolute top-1/2 z-10 hidden size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-soft md:flex ${c.solid}`}
          style={{ left: "50%" }}
        >
          {icon}
        </div>

        <div
          className={`relative z-10 flex size-16 shrink-0 items-center justify-center rounded-full text-white shadow-soft md:hidden ${c.solid}`}
        >
          <span className="font-display text-2xl font-bold">{number}</span>
        </div>


        <div
          className={`flex-1 rounded-3xl border p-6 md:w-5/12 md:flex-none ${c.soft} ${c.border}`}
        >
          <div className="flex items-center gap-3">
            <span
              className={`flex size-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white md:hidden ${c.solid}`}
            >
              {icon}
            </span>
            <h3 className={`font-display text-xl font-bold ${c.text}`}>
              {title}
            </h3>
          </div>
          <p className="mt-2 text-foreground/80">{text}</p>
        </div>
      </div>
    </Reveal>
  );
}

function SobreNos() {

  return (
    <>
      <PageHeader
        eyebrow="Sobre nós"
        title="Diferentes formas de aprender. O mesmo direito a participar."
      />

      <section className="mx-auto max-w-4xl px-4 py-16">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold tracking-tight md:text-4xl">
            A nossa história
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-foreground/70">
            Os momentos que deram origem à Diversamente.
          </p>
        </Reveal>

        <div className="relative mt-12 space-y-8 md:mt-16">
          {/* Linha vertical da timeline */}
          <div
            className="absolute left-8 top-0 h-full w-1 rounded-full md:left-1/2 md:-translate-x-1/2"
            style={{
              background:
                "linear-gradient(180deg, var(--brand-coral-soft), var(--brand-lilac-soft) 50%, var(--brand-blue-soft))",
            }}
            aria-hidden="true"
          />

          <TimelineItem
            number="1"
            icon={<Heart className="size-5" />}
            title="Tudo começou muito antes de existir um nome."
            text="Tudo começou com algo que tínhamos em comum: o gosto por trabalhar com crianças e por fazer a diferença nas suas vidas."
            color="coral"
            align="left"
          />

          <TimelineItem
            number="2"
            icon={<Users className="size-5" />}
            title="Os nossos caminhos cruzaram-se."
            text="Conhecemo-nos enquanto colegas de trabalho e foi aí que percebemos que partilhávamos a mesma paixão e muitos dos mesmos valores."
            color="lilac"
            align="right"
          />

          <TimelineItem
            number="3"
            icon={<Puzzle className="size-5" />}
            title="Mais tarde, tornámo-nos uma equipa."
            text="Os nossos percursos mudaram e surgiu a oportunidade de trabalharmos juntas. Foi aí que começámos a construir o nosso caminho enquanto equipa."
            color="blue"
            align="left"
          />

          <TimelineItem
            number="4"
            icon={<Lightbulb className="size-5" />}
            title="Crescemos juntas."
            text="Ao longo dos anos, partilhámos desafios e aprendizagens. E percebemos, cada vez mais, o impacto que o nosso trabalho pode ter na vida de cada criança."
            color="green"
            align="right"
          />

          <TimelineItem
            number="5"
            icon={<Star className="size-5" />}
            title="Nasceu a vontade de criar algo nosso."
            text="Depois de alguns anos juntas, sentimos que estava na altura de dar o próximo passo. Criar um projeto que fosse verdadeiramente nosso."
            color="yellow"
            align="left"
          />

          <Reveal>
            <div className="relative ml-20 rounded-3xl border-2 border-dashed border-brand-coral/40 bg-brand-coral-soft p-8 text-center md:mx-auto md:max-w-2xl md:ml-0">
              <div className="absolute -left-16 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-brand-coral text-white shadow-soft md:-left-16">
                <Sparkles className="size-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Nasceu a Diversamente.
              </h3>
              <p className="mx-auto mt-3 max-w-lg text-foreground/80">
                Um projeto que junta a nossa experiência, aquilo em que acreditamos e, acima de tudo, a vontade de continuar a fazer parte de cada pequena grande conquista.
              </p>
            </div>
          </Reveal>
        </div>
      </section>


      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl bg-brand-blue-soft p-8">
            <h2 className="text-2xl font-bold">Missão</h2>
            <p className="mt-3 text-foreground/80">
              Proporcionar acompanhamento especializado, individualizado e baseado em evidência,
              promovendo o desenvolvimento e a participação das crianças nos seus diferentes
              contextos.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="h-full rounded-3xl bg-brand-green-soft p-8">
            <h2 className="text-2xl font-bold">Visão</h2>
            <p className="mt-3 text-foreground/80">
              Construir uma comunidade mais inclusiva, onde cada criança tenha acesso às
              oportunidades e ao apoio de que necessita para aprender e crescer.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <Reveal>
          <h2 className="text-center text-3xl font-bold">Os nossos valores</h2>
        </Reveal>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {valores.map((valor, i) => (
            <Reveal as="li" key={valor} delay={i * 50}>
              <span className="inline-block rounded-full border border-border/70 bg-card px-5 py-2.5 text-sm font-semibold">
                {valor}
              </span>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="bg-muted/60 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <h2 className="text-center text-3xl font-bold">A nossa equipa</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-foreground/75">
              Conheça quem acompanha as crianças e famílias na Diversamente.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal>
              <article className="rounded-3xl border border-border/60 bg-card p-7 text-center shadow-soft">
                <img
                  src={adrianaPhoto.url}
                  alt="Fotografia de Adriana Madeira, psicóloga educacional na Diversamente"
                  width={192}
                  height={192}
                  className="mx-auto size-24 rounded-full object-cover"
                />
                <h3 className="mt-4 text-lg font-bold">Adriana Madeira</h3>
                <p className="mt-2 text-sm text-foreground/70">
                  Psicóloga Educacional
                </p>
                <p className="mt-1 text-xs text-foreground/60">
                  Cédula Profissional n.º 29138
                </p>
              </article>
            </Reveal>
            <Reveal delay={90}>
              <article className="rounded-3xl border border-border/60 bg-card p-7 text-center shadow-soft">
                <img
                  src={inesPhoto.url}
                  alt="Fotografia de Inês Costa, psicóloga clínica na Diversamente"
                  width={192}
                  height={192}
                  className="mx-auto size-24 rounded-full object-cover"
                />
                <h3 className="mt-4 text-lg font-bold">Inês Costa</h3>
                <p className="mt-2 text-sm text-foreground/70">
                  Psicóloga Clínica
                </p>
                <p className="mt-1 text-xs text-foreground/60">
                  Cédula Profissional n.º 29166
                </p>
              </article>
            </Reveal>
            <Reveal delay={180}>
              <article className="rounded-3xl border border-border/60 bg-card p-7 text-center shadow-soft">
                <img
                  src={neidPhoto.url}
                  alt="Fotografia de Neid Cardoso, psicóloga na Diversamente"
                  width={192}
                  height={192}
                  className="mx-auto size-24 rounded-full object-cover"
                />
                <h3 className="mt-4 text-lg font-bold">Neid Cardoso</h3>
                <p className="mt-2 text-sm text-foreground/70">Psicóloga</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <Reveal>
          <Button asChild size="lg" className="rounded-full">
            <Link to="/contactos">Falar connosco</Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}