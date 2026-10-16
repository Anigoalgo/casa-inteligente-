import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronRight,
  House,
  Lightbulb,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wifi,
} from "lucide-react";

const products = [
  {
    number: "01",
    category: "ILUMINAÇÃO INTELIGENTE",
    name: "Interruptor Touch Inteligente 3 Teclas EIW 1003 Intelbras",
    shortName: "Interruptor Touch Intelbras",
    description:
      "Interruptor de parede touch em vidro temperado, compatível com Alexa, Google Assistente e aplicativo.",
    tags: ["Painel touch", "3 teclas", "Comando por voz"],
    visual: "switch",
    label: "Para começar",
    // Troque pelo seu link real de afiliado.
    affiliateUrl: "INSERIR_AQUI_SEU_LINK_DA_SHOPEE_OU_MERCADO_LIVRE",
  },
  {
    number: "02",
    category: "CONTROLE DE ELETRÔNICOS",
    name: "Controle Remoto Universal Inteligente IR Intelbras MCR 1001",
    shortName: "Controle Universal Intelbras",
    description:
      "Centralize o ar-condicionado, TV e outros aparelhos de infravermelho no celular ou por comando de voz.",
    tags: ["Ar-condicionado", "TV e eletrônicos", "Controle pelo celular"],
    visual: "remote",
    label: "Mais praticidade",
    affiliateUrl: "INSERIR_AQUI_SEU_LINK_DA_SHOPEE_OU_MERCADO_LIVRE",
  },
  {
    number: "03",
    category: "AUTOMAÇÃO VIA WI-FI",
    name: "Broadlink RM4C Mini IR Automação Residencial Wi-Fi",
    shortName: "Broadlink RM4C Mini",
    description:
      "Controle universal compacto para ar-condicionado e eletrônicos via Wi-Fi com integração por voz.",
    tags: ["Compacto", "Wi-Fi", "Automação residencial"],
    visual: "broadlink",
    label: "Pequeno e versátil",
    affiliateUrl: "INSERIR_AQUI_SEU_LINK_DA_SHOPEE_OU_MERCADO_LIVRE",
  },
];

function ProductArtwork({ visual }: { visual: string }) {
  if (visual === "switch") {
    return (
      <div className="artwork artwork-switch" aria-label="Ilustração de interruptor touch">
        <div className="switch-panel">
          <div className="switch-key"><span /></div>
          <div className="switch-key"><span /></div>
          <div className="switch-key"><span /></div>
          <div className="switch-led" />
        </div>
        <div className="art-glow" />
      </div>
    );
  }

  if (visual === "remote") {
    return (
      <div className="artwork artwork-remote" aria-label="Ilustração de controle universal">
        <div className="remote-device">
          <div className="remote-top" />
          <div className="remote-screen" />
          <div className="remote-buttons">
            {Array.from({ length: 9 }).map((_, i) => <i key={i} />)}
          </div>
        </div>
        <div className="signal signal-one" />
        <div className="signal signal-two" />
      </div>
    );
  }

  return (
    <div className="artwork artwork-broadlink" aria-label="Ilustração de controle Wi-Fi compacto">
      <div className="mini-device">
        <div className="mini-light" />
        <div className="mini-mark">b</div>
      </div>
      <div className="wifi-orbit"><Wifi size={28} strokeWidth={1.5} /></div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <Sparkles size={14} />
        <span>Pequenas mudanças. Uma casa muito mais inteligente.</span>
      </div>

      <header className="site-header">
        <a href="#inicio" className="brand" aria-label="Achados de Casa Inteligente - início">
          <span className="brand-icon"><House size={23} strokeWidth={2.1} /></span>
          <span className="brand-copy">
            <strong>casa<span>conectada</span></strong>
            <small>ACHADOS INTELIGENTES</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#achados">Achados</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#sobre">Sobre</a>
        </nav>
        <a className="header-cta" href="#achados">Ver produtos <ArrowRight size={16} /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> TECNOLOGIA QUE FACILITA</div>
          <h1>Sua casa, do seu jeito. <em>Mais inteligente.</em></h1>
          <p className="hero-description">
            Ideias e dispositivos para deixar sua rotina mais prática — da iluminação
            ao controle dos seus eletrônicos, sem complicar.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#achados">Explorar achados <ArrowDown size={17} /></a>
            <span className="hero-note"><ShieldCheck size={17} /> Você escolhe onde comprar</span>
          </div>
          <div className="hero-stats">
            <div><strong>01.</strong><span>Iluminação</span></div>
            <div><strong>02.</strong><span>Controle remoto</span></div>
            <div><strong>03.</strong><span>Automação Wi-Fi</span></div>
          </div>
        </div>
        <div className="hero-visual" aria-label="Ambiente ilustrativo de casa inteligente">
          <div className="hero-visual-top"><span className="live-dot" /> IDEIAS PARA UM LAR CONECTADO</div>
          <div className="room-scene">
            <div className="room-window"><div /><div /></div>
            <div className="room-light" />
            <div className="room-wall-art"><span /><span /><span /></div>
            <div className="room-sofa"><div className="sofa-back" /><div className="sofa-seat" /><div className="sofa-arm left" /><div className="sofa-arm right" /><div className="sofa-leg left" /><div className="sofa-leg right" /></div>
            <div className="room-table"><div className="table-top" /><div className="table-leg" /><div className="table-plant">✦</div></div>
            <div className="smart-card">
              <div className="smart-card-icon"><Lightbulb size={19} /></div>
              <div><strong>Ambiente conectado</strong><span>Controle na palma da mão</span></div>
              <span className="smart-check"><Check size={14} /></span>
            </div>
          </div>
          <div className="hero-visual-bottom"><span>CONFORTO</span><i /> <span>PRATICIDADE</span><i /> <span>TECNOLOGIA</span></div>
        </div>
      </section>

      <section className="benefit-strip" id="como-funciona">
        <div><span className="benefit-icon"><Smartphone size={20} /></span><p><strong>Mais controle</strong><small>Gerencie dispositivos compatíveis pelo celular.</small></p></div>
        <div><span className="benefit-icon"><Wifi size={20} /></span><p><strong>Rotina conectada</strong><small>Conheça opções com Wi-Fi e comando por voz.</small></p></div>
        <div><span className="benefit-icon"><Sparkles size={20} /></span><p><strong>Escolhas práticas</strong><small>Descubra soluções para o seu dia a dia.</small></p></div>
      </section>

      <section className="products-section" id="achados">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-dot" /> SELEÇÃO DA CASA</div>
            <h2>Achados que merecem <em>um lugar no seu lar.</em></h2>
          </div>
          <p>Três ideias para dar os primeiros passos na automação residencial.</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.number}>
              <div className="product-art-wrap">
                <span className="product-number">{product.number}</span>
                <span className="product-label">{product.label}</span>
                <ProductArtwork visual={product.visual} />
              </div>
              <div className="product-info">
                <div className="product-category">{product.category}</div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="tag-list">
                  {product.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a
                  className="button button-buy"
                  href={product.affiliateUrl.startsWith("http") ? product.affiliateUrl : "#como-comprar"}
                  target={product.affiliateUrl.startsWith("http") ? "_blank" : undefined}
                  rel={product.affiliateUrl.startsWith("http") ? "sponsored nofollow noopener noreferrer" : undefined}
                  aria-label={`Comprar ${product.name}`}
                >
                  Comprar agora <ArrowRight size={17} />
                </a>
                {!product.affiliateUrl.startsWith("http") && (
                  <span className="link-reminder">Adicione seu link de afiliado antes de publicar.</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="closing-banner" id="sobre">
        <div className="closing-icon"><House size={25} /></div>
        <div>
          <span className="closing-kicker">UM LAR MAIS CONECTADO COMEÇA COM UMA IDEIA</span>
          <h2>Encontre o próximo achado para sua casa.</h2>
          <p>Compare as opções, confira a compatibilidade e escolha a que faz sentido para você.</p>
        </div>
        <a className="button button-light" href="#achados">Ver os achados <ChevronRight size={17} /></a>
      </section>

      <footer className="site-footer" id="como-comprar">
        <a href="#inicio" className="footer-brand"><House size={18} /> casa<span>conectada</span></a>
        <p>© {new Date().getFullYear()} Casa Conectada. Conteúdo informativo.</p>
        <p className="affiliate-disclosure">Este site pode receber comissão por compras realizadas por links de afiliados, sem custo adicional para você.</p>
      </footer>
    </main>
  );
}
