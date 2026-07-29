import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { toast } from "sonner";
import { Clock, Mail, MapPin, MessageCircle, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { siteInfo } from "@/lib/site-info";

const title = "Contactos — Diversamente";
const description =
  "Fale connosco para marcar uma primeira reunião ou pedir informações sobre Terapia ABA, acompanhamento escolar e orientação parental.";

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contactos" },
    ],
    links: [{ rel: "canonical", href: "/contactos" }],
  }),
  component: Contactos,
});

const schema = z.object({
  nome: z.string().trim().min(2, "Indique o seu nome.").max(100),
  email: z.string().trim().email("Indique um e-mail válido.").max(255),
  telefone: z.string().trim().min(6, "Indique um contacto telefónico.").max(30),
  idade: z.string().trim().max(30).optional(),
  servico: z.string().trim().max(80).optional(),
  mensagem: z.string().trim().min(10, "Escreva uma mensagem com pelo menos 10 caracteres.").max(1500),
  consentimento: z.literal(true, {
    errorMap: () => ({ message: "É necessário aceitar o tratamento dos dados." }),
  }),
});

const servicos = [
  "Terapia ABA",
  "Shadowing e acompanhamento escolar",
  "Orientação parental",
  "Ainda não sei / outra questão",
];

function Contactos() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [enviado, setEnviado] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Proteção anti-spam (campo oculto para robôs)
    if ((data.get("website") as string)?.length) return;

    const result = schema.safeParse({
      nome: data.get("nome"),
      email: data.get("email"),
      telefone: data.get("telefone"),
      idade: data.get("idade"),
      servico: data.get("servico"),
      mensagem: data.get("mensagem"),
      consentimento: data.get("consentimento") === "on",
    });

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const key = String(issue.path[0]);
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      toast.error("Verifique os campos assinalados.");
      return;
    }

    setErrors({});
    setEnviado(true);
    form.reset();
    toast.success("Pedido enviado. Entraremos em contacto assim que possível.");
  };

  return (
    <>
      <PageHeader
        eyebrow="Contactos"
        title="Vamos falar sobre a sua criança?"
        lead="Entrar em contacto é o primeiro passo. Responderemos assim que possível para conhecer melhor a sua situação e esclarecer todas as dúvidas."
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-4xl border border-border/60 bg-card p-7 shadow-soft sm:p-9"
          >
            <h2 className="text-2xl font-bold">Formulário de contacto</h2>
            <p className="mt-2 text-sm text-foreground/70">
              Os campos assinalados com * são obrigatórios.
            </p>

            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Field id="nome" label="Nome *" error={errors.nome}>
                <Input id="nome" name="nome" autoComplete="name" required />
              </Field>
              <Field id="email" label="E-mail *" error={errors.email}>
                <Input id="email" name="email" type="email" autoComplete="email" required />
              </Field>
              <Field id="telefone" label="Telefone *" error={errors.telefone}>
                <Input id="telefone" name="telefone" type="tel" autoComplete="tel" required />
              </Field>
              <Field id="idade" label="Idade da criança" error={errors.idade}>
                <Input id="idade" name="idade" placeholder="Ex.: 4 anos" />
              </Field>
              <div className="sm:col-span-2">
                <Field id="servico" label="Serviço pretendido" error={errors.servico}>
                  <select
                    id="servico"
                    name="servico"
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                    defaultValue=""
                  >
                    <option value="">Selecione uma opção</option>
                    {servicos.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field id="mensagem" label="Mensagem *" error={errors.mensagem}>
                  <Textarea id="mensagem" name="mensagem" rows={5} required />
                </Field>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3">
              <Checkbox id="consentimento" name="consentimento" className="mt-1" />
              <Label htmlFor="consentimento" className="text-sm font-normal leading-relaxed">
                Autorizo o tratamento dos meus dados para efeitos de resposta a este pedido. *
              </Label>
            </div>
            {errors.consentimento && (
              <p className="mt-2 text-sm text-destructive">{errors.consentimento}</p>
            )}

            <Button type="submit" size="lg" className="mt-7 w-full rounded-full sm:w-auto">
              Enviar pedido
            </Button>

            {enviado && (
              <p
                role="status"
                className="mt-5 rounded-2xl bg-brand-green-soft px-4 py-3 text-sm font-semibold text-foreground/85"
              >
                Recebemos o seu pedido. Entraremos em contacto assim que possível.
              </p>
            )}
          </form>
        </Reveal>

        <Reveal delay={120}>
          <div className="space-y-6">
            <div className="rounded-4xl border border-border/60 bg-card p-7 shadow-soft">
              <h2 className="text-xl font-bold">Onde nos encontrar</h2>
              <ul className="mt-4 space-y-3 text-sm text-foreground/80">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-brand-coral" aria-hidden="true" />
                  {siteInfo.address}
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-brand-yellow" aria-hidden="true" />
                  {siteInfo.schedule}
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-brand-green" aria-hidden="true" />
                  <a href={siteInfo.phoneHref} className="hover:text-primary">
                    {siteInfo.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-brand-blue" aria-hidden="true" />
                  <a href={siteInfo.emailHref} className="hover:text-primary">
                    {siteInfo.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="mt-0.5 size-5 shrink-0 text-brand-green" aria-hidden="true" />
                  <a href={siteInfo.whatsappHref} className="hover:text-primary">
                    {siteInfo.whatsapp}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Instagram className="mt-0.5 size-5 shrink-0 text-brand-lilac" aria-hidden="true" />
                  <a href={siteInfo.instagramHref} className="hover:text-primary">
                    {siteInfo.instagram}
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex h-56 items-center justify-center rounded-4xl border border-dashed border-border bg-muted/60 p-6 text-center text-sm text-foreground/70">
              [Mapa do Google Maps será adicionado assim que a morada estiver definida.]
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id} className="mb-2 block">
        {label}
      </Label>
      {children}
      {error && (
        <p className="mt-1.5 text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}