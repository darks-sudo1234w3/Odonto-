import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react';
import { ChevronLeft, ChevronRight, HeartPulse, Home, Image, MapPin, MessageCircle, UserRound } from 'lucide-react';
import heroToothVideo from './assets/videos/hero_tooth_video.mp4';
import heroToothImg from './assets/images/hero_tooth_render_1786930380496.jpg';
import portrait from './assets/images/dra-mayume-professional.png';
import kids from './assets/images/sorrisos-kids.jpg';
import braces from './assets/images/sorriso-ortodontia.jpg';
import aligners from './assets/images/sorriso-alinhadores.jpg';
import beforeAfter from './assets/images/sorriso-antes-depois.jpg';
import { IconClareamento, IconImplante, IconLimpeza, IconOrtodontia } from './components/DentalServiceIcons';

const whatsapp = 'https://wa.me/5511938011790';
const tabs = [
  { id: 'geral', label: 'Cuidado Geral', items: ['Limpeza', 'Canal', 'Periodontia', 'Restauração', 'Extração'] },
  { id: 'estetica', label: 'Estética', items: ['Clareamento'] },
  { id: 'especial', label: 'Ortodontia & Prótese', items: ['Ortodontia', 'Odontopediatria', 'Prótese', 'Implantes'] },
];
const gallery = [
  { src: kids, alt: 'Pacientes infantis atendidos pela Dra. Mayume Amorim' },
  { src: braces, alt: 'Tratamento ortodôntico com aparelho' },
  { src: aligners, alt: 'Dra. Mayume apresentando alinhadores transparentes' },
  { src: beforeAfter, alt: 'Resultado odontológico antes e depois' },
  { src: portrait, alt: 'Dra. Mayume Amorim em retrato profissional' },
];
const sections = ['inicio', 'sobre', 'tratamentos', 'sorrisos', 'contato'];

function Logo() {
  return <a className="logo" href="#inicio" aria-label="Dra. Mayume Amorim — início"><span className="logo-mark">MA</span><span>Dra. Mayume Amorim</span></a>;
}

function Dock({ active }: { active: string }) {
  const items = [
    ['inicio', 'Início', Home], ['sobre', 'Sobre', UserRound], ['tratamentos', 'Tratamentos', HeartPulse],
    ['sorrisos', 'Sorrisos', Image], ['contato', 'Contato', MapPin],
  ] as const;
  return <nav className="dock" aria-label="Navegação principal">
    {items.map(([id, label, Icon]) => <a key={id} href={`#${id}`} className="dock-item-btn" aria-label={label} onClick={(e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }}>
      <span className="glow-ring"/><Icon className={`dock-item-icon ${active === id ? 'is-active' : ''}`} aria-hidden="true"/><span className="dock-tooltip">{label}</span><span className={`dock-active-dot ${active === id ? 'visible' : ''}`}/>
    </a>)}
    <a className="dock-item-btn dock-item-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><span className="glow-ring"/><MessageCircle className="dock-item-icon"/><span className="dock-tooltip">WhatsApp</span></a>
  </nav>;
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('inicio');
  const [activeTab, setActiveTab] = useState('geral');
  const [tabChanging, setTabChanging] = useState(false);
  const [galleryCenter, setGalleryCenter] = useState(0);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScroll = () => {
      setScrolled(window.scrollY > 80);
      const root = document.documentElement;
      setProgress(root.scrollHeight === root.clientHeight ? 0 : root.scrollTop / (root.scrollHeight - root.clientHeight) * 100);
      const visible = sections.map(id => ({ id, top: Math.abs((document.getElementById(id)?.getBoundingClientRect().top ?? 9999) - 150) })).sort((a,b) => a.top-b.top)[0];
      if (visible) setActiveSection(visible.id);
    };
    const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } }), { threshold: .18, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('[data-reveal]').forEach((el, i) => { (el as HTMLElement).style.transitionDelay = `${(i % 4) * 80}ms`; io.observe(el); });
    window.addEventListener('scroll', updateScroll, { passive: true }); updateScroll();
    return () => { window.removeEventListener('scroll', updateScroll); io.disconnect(); };
  }, []);

  useLayoutEffect(() => {
    const button = tabsRef.current?.querySelector(`[data-tab="${activeTab}"]`) as HTMLElement | null;
    if (!button || !indicatorRef.current || !tabsRef.current) return;
    const b = button.getBoundingClientRect(), n = tabsRef.current.getBoundingClientRect();
    indicatorRef.current.style.width = `${b.width}px`; indicatorRef.current.style.transform = `translateX(${b.left - n.left}px)`;
  }, [activeTab]);

  const chooseTab = (id: string) => { if (id === activeTab) return; setTabChanging(true); window.setTimeout(() => { setActiveTab(id); setTabChanging(false); }, 150); };
  const moveGallery = (step: number) => setGalleryCenter(v => (v + step + gallery.length) % gallery.length);

  return <main className="site-shell">
    <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}><Logo /></header>

    <section className="hero" id="inicio">
      <div className="hero-blob" aria-hidden="true"/><i className="hero-blob-drop d1"/><i className="hero-blob-drop d2"/><i className="hero-blob-drop d3"/>
      <div className="hero-card" data-reveal>
        <div className="hero-copy"><div className="rating-pill"><strong>★ 4,8</strong><span>4 avaliações no Google</span></div>
          <h1>Cuide do seu <em>Sorriso Verdadeiro</em></h1>
          <p>Odontologia pela USP, com cuidado acolhedor em São Miguel Paulista / Vila Americana.</p>
          <a className="btn btn-primary" href={whatsapp} target="_blank" rel="noreferrer">Fazer agendamento <span className="dot-gold">↗</span></a>
        </div>
        <div className="hero-visual"><video src={heroToothVideo} poster={heroToothImg} autoPlay loop muted playsInline aria-label="Ilustração 3D animada de cuidado odontológico"/><div className="stat-card"><strong>4,8</strong><span>de 5 no Google</span></div></div>
      </div>
    </section>

    <section className="services" id="servicos"><div className="section-heading" data-reveal><span className="eyebrow">CUIDADO COMPLETO</span><h2>Precisão, conforto e estética natural</h2></div>
      <div className="services-row">{[[<IconLimpeza/>,'Prevenção'],[<IconClareamento/>,'Estética'],[<IconOrtodontia/>,'Ortodontia'],[<IconImplante/>,'Reabilitação']].map(([icon,title], i) => <article className="service-card" data-reveal key={i}><div className="service-icon-circle">{icon}</div><h3>{title}</h3><p>Atendimento individualizado e seguro.</p></article>)}</div>
    </section>

    <section className="about" id="sobre"><div className="about-photo-wrap" data-reveal><img src={portrait} alt="Retrato profissional da Dra. Mayume Amorim"/><div className="about-seal">CROSP 154358</div></div>
      <div className="about-copy" data-reveal><span className="eyebrow">SOBRE A PROFISSIONAL</span><h2>Conhecimento técnico com escuta verdadeira</h2><p>Formada em Odontologia pela USP, a Dra. Mayume Amorim une precisão clínica, tecnologias modernas e um olhar humano para cuidar de cada paciente.</p><dl className="facts"><div><dt>Formação</dt><dd>Odontologia pela USP</dd></div><div><dt>Registro</dt><dd>CROSP 154358</dd></div></dl></div>
    </section>

    <section className="tabs-section" id="tratamentos"><div className="section-heading" data-reveal><span className="eyebrow">TRATAMENTOS</span><h2>Cuidado sob medida para cada fase do seu sorriso</h2></div>
      <div className="tabs-card" data-reveal><div className="tabs-nav" role="tablist" ref={tabsRef}>{tabs.map(t => <button key={t.id} role="tab" className="tab-btn" data-tab={t.id} aria-selected={activeTab === t.id} onClick={() => chooseTab(t.id)}>{t.label}</button>)}<span className="tabs-indicator" ref={indicatorRef}/></div>
        <div className={`tab-panel is-active ${tabChanging ? 'is-leaving' : ''}`} role="tabpanel"><ul>{tabs.find(t => t.id === activeTab)?.items.map(item => <li key={item}><span>+</span>{item}</li>)}</ul></div></div>
    </section>

    <section className="gallery" id="sorrisos"><div className="section-heading" data-reveal><span className="eyebrow">SORRISOS</span><h2>Resultados que falam por si</h2></div>
      <div className="fan-carousel" data-reveal>{gallery.map((photo, i) => { let d = i - galleryCenter; if (d > gallery.length/2) d -= gallery.length; if (d < -gallery.length/2) d += gallery.length; return <figure key={photo.src} className={`fan-card ${d === 0 ? 'is-center' : ''}`} style={{ '--distance': d } as CSSProperties}><img src={photo.src} alt={photo.alt}/></figure>; })}</div>
      <div className="fan-controls"><button className="fan-arrow" onClick={() => moveGallery(-1)} aria-label="Foto anterior"><ChevronLeft/></button><div className="fan-dots">{gallery.map((_,i) => <button key={i} className={i===galleryCenter?'active':''} onClick={() => setGalleryCenter(i)} aria-label={`Ir para foto ${i+1}`}/>)}</div><button className="fan-arrow" onClick={() => moveGallery(1)} aria-label="Próxima foto"><ChevronRight/></button></div>
    </section>

    <section className="reviews"><div data-reveal><span className="eyebrow">AVALIAÇÕES GOOGLE</span><h2>Acolhimento reconhecido por quem já passou por aqui</h2><div className="rating-summary"><strong>4,8</strong><span>★★★★★<small>4 avaliações, conforme DentMap</small></span></div></div></section>

    <section className="location" id="contato"><div className="section-heading" data-reveal><span className="eyebrow">CONTATO</span><h2>Planeje sua visita</h2></div><div className="location-grid">
      <address className="location-card" data-reveal><span className="location-badge">Consultório Odontológico</span><h3>Dra. Mayume Amorim</h3><p>Rua José Otoni, 284, 1º andar, sala 13, Vila Americana, São Paulo–SP, CEP 08010-290</p><p className="region">São Miguel Paulista / Vila Jacuí</p><p><strong>Telefone:</strong> <a href="tel:+5511938011790">(11) 93801-1790</a></p><p><strong>Horário:</strong> Horário sob consulta — confirme pelo WhatsApp</p><p className="disclaimer">O endereço pode aparecer como Vila Jacuí em alguns cadastros; o consultório informa Vila Americana / São Miguel Paulista. Confirme pelo WhatsApp antes de ir.</p><div className="social-links"><a href="https://www.instagram.com/dra.mayume.dentista/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.facebook.com/61555995413002/" target="_blank" rel="noreferrer">Facebook</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></div></address>
      <div className="map-card" data-reveal><iframe title="Mapa do consultório da Dra. Mayume Amorim" src="https://maps.google.com/maps?q=Dra%20Mayume%20Amorim%20Consult%C3%B3rio%20Odontol%C3%B3gico%20Rua%20Jos%C3%A9%20Otoni%20284%20S%C3%A3o%20Paulo&z=16&output=embed" loading="lazy"/><a href="https://www.google.com/maps/search/?api=1&query=Dra+Mayume+Amorim+Consult%C3%B3rio+Odontol%C3%B3gico+Rua+Jos%C3%A9+Otoni+284+S%C3%A3o+Paulo" target="_blank" rel="noreferrer">Abrir no Google Maps ↗</a></div>
    </div></section>
    <footer><Logo/><p>© {new Date().getFullYear()} Dra. Mayume Amorim — Consultório Odontológico.</p></footer>
    <Dock active={activeSection}/>
  </main>;
}
