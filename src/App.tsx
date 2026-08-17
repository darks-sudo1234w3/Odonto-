import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import heroToothVideo from './assets/videos/hero_tooth_video.mp4';
import heroToothImg from './assets/images/hero_tooth_render_1786930380496.jpg';
import aboutDentistImg from './assets/images/about_dentist_photo_1786930392734.jpg';
import {
  IconLimpeza,
  IconClareamento,
  IconOrtodontia,
  IconImplante,
  IconEstetica,
} from './components/DentalServiceIcons.tsx';
import RealtimeStatusBadge from './components/RealtimeStatusBadge.tsx';

const servicesData = [
  { id: 'service-limpeza', title: 'Limpeza', desc: 'Profilaxia e remoção de tártaro', icon: <IconLimpeza /> },
  { id: 'service-clareamento', title: 'Clareamento', desc: 'Laser e caseiro supervisionado', icon: <IconClareamento /> },
  { id: 'service-ortodontia', title: 'Ortodontia', desc: 'Aparelhos estéticos e alinhadores', icon: <IconOrtodontia /> },
  { id: 'service-implante', title: 'Implante', desc: 'Reabilitação com prótese de titânio', icon: <IconImplante /> },
  { id: 'service-estetica', title: 'Estética', desc: 'Lentes de contato e restaurações', icon: <IconEstetica /> },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = 'https://api.whatsapp.com/send?l=pt_BR&phone=551132589004';

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="site-shell">
      {/* Site Header */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`site-header ${isScrolled ? 'scrolled' : ''}`}
      >
        <a
          href="#inicio"
          onClick={(e) => scrollToSection(e, '#inicio')}
          className="logo"
          id="header-logo"
        >
          <span role="img" aria-label="dente" style={{ fontSize: '1.45rem' }}>🦷</span>
          <span className="logo-text">Atual Odonto</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="site-nav" id="main-nav">
          <a href="#inicio" onClick={(e) => scrollToSection(e, '#inicio')}>Início</a>
          <a href="#sobre" onClick={(e) => scrollToSection(e, '#sobre')}>Sobre</a>
          <a href="#servicos" onClick={(e) => scrollToSection(e, '#servicos')}>Serviços</a>
          <a href="#avaliacoes" onClick={(e) => scrollToSection(e, '#avaliacoes')}>Avaliações</a>
          <a href="#contato" onClick={(e) => scrollToSection(e, '#contato')}>Contato</a>
        </nav>

        {/* Action Button Desktop */}
        <div className="header-actions">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-pill header-cta-desktop"
            id="header-cta-btn"
          >
            <span>Agendar no WhatsApp</span>
            <span className="dot-lime">↗</span>
          </motion.a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu de navegação"
            id="mobile-menu-btn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mobile-nav-drawer"
            id="mobile-nav-drawer"
          >
            <nav className="mobile-nav-links">
              <a href="#inicio" onClick={(e) => scrollToSection(e, '#inicio')}>Início</a>
              <a href="#sobre" onClick={(e) => scrollToSection(e, '#sobre')}>Sobre</a>
              <a href="#servicos" onClick={(e) => scrollToSection(e, '#servicos')}>Serviços</a>
              <a href="#avaliacoes" onClick={(e) => scrollToSection(e, '#avaliacoes')}>Avaliações</a>
              <a href="#contato" onClick={(e) => scrollToSection(e, '#contato')}>Contato</a>
            </nav>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full text-center"
              style={{ marginTop: '16px' }}
            >
              Agendar no WhatsApp ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section (3-Layered background with organic blob, droplets & floating card) */}
      <section className="hero" id="inicio">
        {/* Camada 2: Mancha Pincelada Orgânica Escura (#3A8AF9) com leve flutuação suave */}
        <motion.div
          animate={{
            scale: [1, 1.02, 0.99, 1],
            rotate: [0, 1.5, -1, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="hero-blob"
          aria-hidden="true"
        />

        {/* Camada 3: Gotas e Respingos Soltos com micro animação orgânica */}
        <motion.div
          animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="hero-blob-drop d1"
          aria-hidden="true"
        />
        <motion.div
          animate={{ y: [0, 6, 0], x: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="hero-blob-drop d2"
          aria-hidden="true"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="hero-blob-drop d3"
          aria-hidden="true"
        />
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="hero-blob-drop d4"
          aria-hidden="true"
        />

        {/* Camada 4: Cartão Flutuante Claro (#F0F9FE) com todo o conteúdo do Hero */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="hero-card"
          id="hero-main-card"
        >
          <div className="hero-copy" id="hero-copy">
            {/* Rating Pill e Status em Tempo Real */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 mb-5"
            >
              <div className="rating-pill mb-0" id="hero-rating-pill">
                <span className="stars">★ 4.6</span>
                <span className="reviews">(482 avaliações no Google)</span>
              </div>
              <RealtimeStatusBadge compact />
            </motion.div>

            {/* Headline com Tipografia Editorial e Entrada Fluida */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              Cuide do seu{'\n'}
              <span className="text-gradient-accent">Sorriso Verdadeiro</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hero-sub"
              id="hero-subtitle"
            >
              Estética e saúde bucal no coração da República, São Paulo — tecnologia moderna, pontualidade e atendimento acolhedor.
            </motion.p>

            {/* Call to Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="hero-cta-wrapper"
            >
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                id="hero-booking-btn"
              >
                Fazer Agendamento
              </motion.a>

              <span className="hero-cta-note">
                <span className="online-dot" /> Atendimento rápido via WhatsApp
              </span>
            </motion.div>
          </div>

          {/* 3D Tooth Video Display with Seamless Muted Loop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="hero-visual-container"
            id="hero-visual"
          >
            <div className="hero-photo-wrapper">
              <video
                src={heroToothVideo}
                poster={heroToothImg}
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="hero-video"
                id="hero-video-player"
                aria-label="Vídeo 3D de manutenção e polimento dental na Atual Odonto"
              />

              {/* Video subtle gloss reflection overlay */}
              <div className="hero-video-shine" aria-hidden="true" />
            </div>

            {/* Float Stat Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="stat-card"
              id="hero-stat-card"
            >
              <div className="stat-card-stars">★★★★★</div>
              <strong>4.6</strong>
              <span>nota média · 482 avaliações</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="services" id="servicos">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="services-header"
        >
          <span className="eyebrow">SERVIÇOS</span>
          <h2>Atendimento completo para o seu sorriso</h2>
          <p className="services-sub">Procedimentos modernos realizados com precisão, conforto e estética natural</p>
        </motion.div>

        <div className="services-row" id="services-list">
          {servicesData.map((svc, idx) => (
            <motion.article
              key={svc.id}
              id={svc.id}
              className="service-icon"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="service-icon-circle">
                {svc.icon}
              </div>
              <span className="service-title">{svc.title}</span>
              <span className="service-desc">{svc.desc}</span>
            </motion.article>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="sobre">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="about-photo-wrapper"
        >
          <img
            src={aboutDentistImg}
            alt="Profissional dentista com luvas azuis na Atual Odonto"
            className="about-photo"
            id="about-photo-img"
            referrerPolicy="no-referrer"
          />
          <div className="about-badge">
            <strong>10+</strong>
            <span>Anos de dedicação ao seu sorriso</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="about-copy"
          id="about-copy-box"
        >
          <span className="eyebrow" style={{ textAlign: 'left' }}>SOBRE A CLÍNICA</span>
          <h2>Perto de você, no centro de São Paulo</h2>
          <p>
            Na <strong>Atual Odonto</strong>, unimos excelência técnica, tecnologias modernas e um
            olhar humano e acolhedor para cuidar do seu sorriso. Localizada no coração da República, nossa clínica oferece tratamentos de estética e saúde bucal com conforto, pontualidade e dedicação exclusiva a cada paciente.
          </p>
          <p>
            Contamos com consultórios modernos, equipamentos de alta precisão e uma equipe especializada pronta para transformar o seu sorriso em um ambiente seguro e confortável.
          </p>
          <div className="about-action">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Conheça Nossa Equipe ↗
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Avaliações Section Anchor */}
      <section className="reviews-section" id="avaliacoes">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="reviews-container"
        >
          <div className="reviews-pill-header">
            <span className="eyebrow">AVALIAÇÕES GOOGLE</span>
            <h2>Mais de 480 pacientes satisfeitos</h2>
            <div className="rating-summary-box">
              <span className="big-rating">4.6</span>
              <div className="rating-stars-col">
                <div className="stars-row">★★★★★</div>
                <span className="rating-count">Com base em 482 avaliações reais no Google</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Location / Contato Section (Única fonte de endereço, status e mapa) */}
      <section className="location" id="contato">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Venha nos visitar</h2>
          <p className="location-subtitle">Fácil acesso no centro histórico de São Paulo</p>
        </motion.div>

        <div className="location-grid">
          <motion.address
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="location-card"
            id="location-details-card"
          >
            <div className="location-header-row">
              <span className="location-badge">📍 Localização Central</span>
            </div>
            <p className="address-text">R. Br. de Itapetininga, 221 - República, São Paulo - SP, 01042-001</p>
            <p className="building-name">Condomínio Edifício La Royale</p>
            
            <div className="location-status-row my-1">
              <RealtimeStatusBadge />
            </div>

            <a href="tel:551132589004" id="location-phone-link" className="phone-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>(11) 3258-9004</span>
            </a>

            <div>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lime w-full text-center"
                id="location-whatsapp-btn"
              >
                Chamar no WhatsApp ↗
              </motion.a>
            </div>
          </motion.address>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="map-embed"
            id="map-embed-container"
          >
            <iframe
              title="Localização Atual Odonto no Google Maps"
              src="https://maps.google.com/maps?q=R.%20Br.%20de%20Itapetininga,%20221%20-%20Rep%C3%BAblica,%20S%C3%A3o%20Paulo%20-%20SP,%2001042-001&t=&z=16&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Site Footer */}
      <footer className="site-footer" id="site-footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Atual Odonto — Estética & Saúde Bucal. Todos os direitos reservados.</p>
          <p className="footer-sub">R. Br. de Itapetininga, 221 - República, São Paulo - SP</p>
        </div>
      </footer>
    </main>
  );
}
