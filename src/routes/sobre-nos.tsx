import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import adrianaPhoto from "@/assets/adriana-madeira.jpg.asset.json";
import inesPhoto from "@/assets/ines-costa.png.asset.json";
import neidPhoto from "@/assets/neid-cardoso.jpg.asset.json";

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

function SobreNos() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre nós"
        title="Diferentes formas de aprender. O mesmo direito a participar."
      />

      <section className="mx-auto max-w-3xl space-y-4 px-4 py-16 text-lg text-foreground/80">
        <Reveal>
          <p>
            Tudo começou muito antes de existir um nome. Tudo começou com algo que tínhamos em comum: o gosto por trabalhar com crianças e por fazer a diferença nas suas vidas.
          </p>
          <p className="mt-4">
            Os nossos caminhos cruzaram-se. Conhecemo-nos enquanto colegas de trabalho e foi aí que percebemos que partilhávamos a mesma paixão e muitos dos mesmos valores.
          </p>
          <p className="mt-4">
            Mais tarde, tornámo-nos uma equipa. Os nossos percursos mudaram e surgiu a oportunidade de trabalharmos juntas. Foi aí que começámos a construir o nosso caminho enquanto equipa.
          </p>
          <p className="mt-4">
            Crescemos juntas. Ao longo dos anos, partilhámos desafios e aprendizagens. E percebemos, cada vez mais, o impacto que o nosso trabalho pode ter na vida de cada criança.
          </p>
        </Reveal>
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