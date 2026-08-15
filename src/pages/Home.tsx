// Legiva Presença Essencial: fluxo editorial de anúncio → oferta → briefing → simulação.
// A página evita vender serviços adicionais no primeiro contato e usa clareza como diferencial.
import { useMemo, useState } from "react";
import { ArrowDown, ArrowRight, Check, Copy, DollarSign, ExternalLink, Heart, Menu, X } from "lucide-react";

const storageKey = "legiva-briefing-v1";
const whatsappDestination = "5511941038395";

const initialForm = {
  businessName: "",
  sector: "",
  city: "",
  whatsapp: "",
  offer: "",
  objective: "WhatsApp",
  style: "Claro e simples",
  photos: "Ainda não tenho",
  notes: "",
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const promptPreview = useMemo(() => {
    return `NOME=${form.businessName || "[preencher]"}\nRAMO=${form.sector || "[preencher]"}\nCIDADE=${form.city || "[preencher]"}\nWHATSAPP=${form.whatsapp || "[preencher]"}\nOFERTA=${form.offer || "[preencher]"}\nOBJETIVO=${form.objective}\nESTILO=${form.style}\nFOTOS=${form.photos}\nOBSERVAÇÕES=${form.notes || "[nenhuma]"}`;
  }, [form]);

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  }

  function submitBriefing(event: React.FormEvent) {
    event.preventDefault();
    localStorage.setItem(storageKey, JSON.stringify({ ...form, createdAt: new Date().toISOString() }));
    setSubmitted(true);

    const message = [
      "*NOVO BRIEFING — LEGIVA*",
      "",
      `*Negócio:* ${form.businessName}`,
      `*Ramo:* ${form.sector}`,
      `*Cidade e bairro:* ${form.city}`,
      `*WhatsApp do cliente:* ${form.whatsapp}`,
      "",
      `*O que mostrar primeiro:* ${form.offer}`,
      `*Objetivo principal:* ${form.objective}`,
      `*Estilo:* ${form.style}`,
      `*Fotos:* ${form.photos}`,
      `*Observações:* ${form.notes || "Nenhuma"}`,
      "",
      "Enviado pelo formulário da legiva.shop.",
    ].join("\n");

    window.open(`https://wa.me/${whatsappDestination}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  async function copyPrompt() {
    await navigator.clipboard.writeText(promptPreview);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#20231f] selection:bg-[#e7b94f] selection:text-[#20231f]">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <div className="border-b border-[#20231f]/10 bg-[#20231f] px-4 py-2 text-center text-xs font-semibold tracking-[0.14em] text-[#f5f1e8]">
        LEGIVA <span className="mx-2 text-[#e7b94f]">/</span> do real para o digital
      </div>
      <header className="sticky top-0 z-40 border-b border-[#20231f]/10 bg-[#f5f1e8]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#topo" className="flex items-center gap-3" aria-label="Legiva, voltar ao início">
            <img className="brand-image" src="/assets/legiva-mark.png" alt="" aria-hidden="true" />
            <span className="logo-wordmark"><span>le</span>gi<span className="logo-a">va</span></span>
          </a>
          <button className="rounded-full border border-[#20231f]/15 p-2 lg:hidden" aria-label="Abrir menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <nav className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-4 border-b border-[#20231f]/10 bg-[#f5f1e8] px-5 py-5 lg:static lg:flex lg:flex-row lg:items-center lg:border-0 lg:bg-transparent lg:p-0`} aria-label="Navegação principal">
            <a href="#como-funciona" className="nav-link" onClick={() => setMenuOpen(false)}>Como funciona</a>
            <a href="#oferta" className="nav-link" onClick={() => setMenuOpen(false)}>O que você recebe</a>
            <a href="#briefing" className="button button-dark" onClick={() => setMenuOpen(false)}>Preencher briefing <ArrowRight size={16} /></a>
          </nav>
        </div>
      </header>

      <main id="conteudo">
        <section id="topo" className="relative overflow-hidden border-b border-[#20231f]/10">
          <div className="absolute inset-0 opacity-20 hero-texture" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <div className="eyebrow"><span className="eyebrow-dot" /> Presença online para começar</div>
              <h1 className="mt-7 max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.075em] sm:text-6xl lg:text-8xl">Tenha seu site. Comece a <em>existir online.</em></h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#20231f]/65">Site pronto + domínio + hospedagem, sem pacote confuso. Você entra com as informações. A Legiva cuida do resto.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="button button-accent" href="#briefing">Quero começar meu site <ArrowRight size={17} /></a>
                <a className="button button-quiet" href="#como-funciona">Entender em 1 minuto <ArrowDown size={16} /></a>
              </div>
              <p className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-[#20231f]/45">Domínio + hospedagem acessíveis · sem pacote confuso</p>
            </div>
            <div className="relative lg:pl-12">
              <div className="hero-card hero-art">
                <div className="flex items-start justify-between border-b border-[#20231f]/10 pb-5"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#49624a]">Oferta inicial da Legiva</p><p className="mt-2 text-2xl font-bold tracking-[-0.05em]">Seu site começa aqui.</p></div><span className="stamp">sem complicação</span></div>
                <div className="my-10 flex items-center gap-5"><div className="heart-price">
  <Heart
    size={58}
    strokeWidth={1.5}
    fill="currentColor"
    className="text-[#e7b94f]"
  />
  <DollarSign
    size={27}
    strokeWidth={2.5}
    className="opacity-0"
    aria-hidden="true"
  />
</div>

                  <div><p className="text-3xl font-bold tracking-[-0.07em]">site pronto</p><p className="mt-2 text-sm leading-6 text-[#20231f]/55">domínio + hospedagem<br />para sua presença online</p></div></div>
                <div className="flex items-center gap-3 border-t border-[#20231f]/10 pt-5 text-sm font-semibold"><span className="brand-mark small"><span /></span> legiva.shop <span className="ml-auto text-[#49624a]">↗</span></div>
              </div>
              <div className="absolute -bottom-5 -left-1 hidden rotate-[-5deg] bg-[#e7b94f] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] shadow-[5px_5px_0_#20231f] sm:block">comece simples</div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div><p className="eyebrow">O caminho mais curto</p><h2 className="section-title section-title-quiet mt-5">Não vendemos confusão. Vendemos o primeiro passo.</h2><p className="mt-5 max-w-sm leading-7 text-[#20231f]/60">A Legiva começa pelo essencial: um endereço próprio, uma página clara e um jeito fácil para o cliente saber quem você é e como falar com você.</p></div>
            <div className="divide-y divide-[#20231f]/10 border-y border-[#20231f]/10">{[{n:"01", title:"Você responde", text:"Conta o que faz, onde está e como quer ser encontrado."},{n:"02", title:"A Legiva organiza", text:"Transformamos suas respostas em uma página simples e com a sua cara."},{n:"03", title:"Você começa a existir", text:"Seu domínio e seu site ficam prontos para você divulgar."}].map((item) => <div key={item.n} className="step-row"><span className="step-number">{item.n}</span><div><h3 className="text-xl font-bold tracking-[-0.04em]">{item.title}</h3><p className="mt-2 max-w-md text-sm leading-6 text-[#20231f]/55">{item.text}</p></div><ArrowRight className="ml-auto text-[#49624a]" size={18} /></div>)}</div>
          </div>
        </section>

        <section id="oferta" className="bg-[#20231f] text-[#f5f1e8]">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
            <div><p className="eyebrow light"><span className="eyebrow-dot yellow" /> A oferta inicial</p><h2 className="mt-5 max-w-xl text-4xl font-bold leading-[1.02] tracking-[-0.065em] sm:text-6xl">Tudo o que você precisa para começar, nada que complique.</h2><p className="mt-6 max-w-md leading-7 text-[#f5f1e8]/60">Um primeiro site não precisa fazer tudo. Ele precisa fazer bem o básico: apresentar seu negócio e abrir uma porta de contato.</p></div>
            <div className="grid gap-3 sm:grid-cols-2">{["Página própria para seu negócio","Domínio com custo anual baixo","Hospedagem gratuita no início","Layout adaptado para celular","Botão de contato direto","Briefing simples, sem linguagem técnica"].map((feature) => <div key={feature} className="offer-item"><Check size={17} className="text-[#e7b94f]" /><span>{feature}</span></div>)}</div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28"><div className="image-stack"><div className="image-panel process-image"><span className="presence-stamp">presença / online</span></div><div className="image-panel presence-image" aria-hidden="true" /></div><div className="flex flex-col justify-center"><p className="eyebrow">Um começo possível</p><h2 className="section-title mt-5">Seu cliente não precisa entender de site. Só precisa conseguir encontrar você.</h2><p className="mt-6 max-w-lg leading-7 text-[#20231f]/60">A experiência começa antes do código: com perguntas simples, escolhas transparentes e um site que não tenta parecer maior do que o seu negócio.</p><a href="#briefing" className="mt-8 inline-flex w-fit items-center gap-3 text-sm font-bold text-[#49624a] underline decoration-[#e7b94f] decoration-2 underline-offset-8">Simular meu briefing <ArrowRight size={16} /></a></div></section>

        <section id="briefing" className="border-t border-[#20231f]/10 bg-[#ebe5d8]">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[0.75fr_1.25fr] lg:px-8 lg:py-28">
            <div><p className="eyebrow"><span className="eyebrow-dot" /> Agora é com você</p><h2 className="section-title mt-5">Responda como cliente. Veja como a Legiva começa.</h2><p className="mt-5 leading-7 text-[#20231f]/60">Este é um teste real do nosso processo. Não precisa ter logo, fotos ou slogan agora. Se não souber, a gente marca como pendência.</p><div className="mt-8 border-l-2 border-[#e7b94f] pl-4 text-sm leading-6 text-[#20231f]/65">Leva cerca de 2 minutos. Ao enviar, suas respostas nos ajudarão a entender melhor o seu projeto. Em breve, entraremos em contato para conversar sobre a melhor solução para você.</div></div>
            <form className="form-paper" onSubmit={submitBriefing}>
              <div className="mb-8 flex items-center justify-between border-b border-[#20231f]/10 pb-5"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-[#49624a]">Briefing 01</p><h3 className="mt-2 text-2xl font-bold tracking-[-0.05em]">Sobre o seu negócio</h3></div><span className="text-xs font-bold text-[#20231f]/35">legiva.shop</span></div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label>Nome do negócio<input required value={form.businessName} onChange={(e) => updateField("businessName", e.target.value)} placeholder="Ex.: Casa Nativa" /></label>
                <label>O que você faz?<input required value={form.sector} onChange={(e) => updateField("sector", e.target.value)} placeholder="Ex.: confeitaria artesanal" /></label>
                <label>Cidade e bairro<input required value={form.city} onChange={(e) => updateField("city", e.target.value)} placeholder="Ex.: Campinas, Taquaral" /></label>
                <label>WhatsApp para contato<input required value={form.whatsapp} onChange={(e) => updateField("whatsapp", e.target.value)} placeholder="(00) 00000-0000" /></label>
              </div>
              <label className="mt-5">O que você quer mostrar primeiro?<textarea required value={form.offer} onChange={(e) => updateField("offer", e.target.value)} placeholder="Conte os principais serviços, produtos ou diferenciais." rows={3} /></label>
              <div className="mt-5 grid gap-5 sm:grid-cols-2"><label>Objetivo principal<select value={form.objective} onChange={(e) => updateField("objective", e.target.value)}><option>WhatsApp</option><option>Visita à loja</option><option>Pedido de orçamento</option><option>Ver produtos</option></select></label><label>Estilo que combina<select value={form.style} onChange={(e) => updateField("style", e.target.value)}><option>Claro e simples</option><option>Escuro e marcante</option><option>Sofisticado</option><option>Colorido</option></select></label></div>
              <label className="mt-5">Você já tem fotos reais?<select value={form.photos} onChange={(e) => updateField("photos", e.target.value)}><option>Sim, vou enviar</option><option>Ainda não tenho</option><option>Quero usar ilustrações</option></select></label>
              <label className="mt-5">Algo importante para a Legiva saber?<textarea value={form.notes} onChange={(e) => updateField("notes", e.target.value)} placeholder="Slogan, cores, algo que não pode aparecer..." rows={2} /></label>
              <button className="button button-accent mt-7 w-full justify-center" type="submit">Enviar briefing pelo WhatsApp <ExternalLink size={16} /></button>
              {submitted && <div className="success-box mt-5"><Check size={18} /><span>Recebemos sua solicitação. Em breve, entraremos em contato.</span></div>}
            </form>
          </div>
        </section>

      </main>
      <footer className="border-t border-[#20231f]/10 px-5 py-8 lg:px-8"><div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-[#20231f]/55 sm:flex-row sm:items-center sm:justify-between"><span className="font-bold tracking-[-0.03em] text-[#20231f]">legiva<span className="text-[#49624a]">.</span></span><span>Presença online para começar.</span><a href="#topo" className="font-semibold text-[#49624a]">Voltar ao início ↑</a></div></footer>
    </div>
  );
}
