import { Reveal } from "./Reveal";

export function PageHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <section className="surface-soft">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:py-20">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-primary">{eyebrow}</p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h1>
          {lead && <p className="mx-auto mt-5 max-w-2xl text-lg text-foreground/75">{lead}</p>}
        </Reveal>
      </div>
    </section>
  );
}