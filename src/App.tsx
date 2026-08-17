import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import heroToothVideo from './assets/videos/hero_tooth_video.mp4';
import heroToothImg from './assets/images/hero_tooth_render_1786930380496.jpg';
import draMayumePortrait from './assets/images/dra-mayume-professional.png';
import LogoM from './components/LogoM.tsx';
import {
  IconLimpeza,
  IconClareamento,
  IconOrtodontia,
  IconImplante,
  IconEstetica,
} from './components/DentalServiceIcons.tsx';

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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const whatsappUrl = 'https://wa.me/5511938011790';

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
          <LogoM size={46} color="#4B552B" />
          <span className="logo-text">Dra. Mayume Amorim</span>
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
            <span className="dot-gold">↗</span>
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

      {/* Hero Section (3-Layered background with olive dark base, olive mid organic blob, gold droplets & floating cream card) */}
      <section className="hero" id="inicio">
        {/* Camada 2: Mancha Pincelada Orgânica Média com Borda Dourada (#4B552B) com suave flutuação */}
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

        {/* Camada 3: Gotas e Respingos Soltos Dourados (#C8A858) */}
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

        {/* Camada 4: Cartão Creme Flutuante (#F5F0E7) com todo o conteúdo do Hero */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="hero-card"
          id="hero-main-card"
        >
          <div className="hero-copy" id="hero-copy">
            {/* Rating Pill & Real-time Status */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 mb-5"
            >
              <div className="rating-pill mb-0" id="hero-rating-pill">
                <span className="stars">★ 4.8</span>
                <span className="reviews">(Avaliações no Google)</span>
              </div>
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
              Estética e saúde bucal em São Miguel Paulista / Vila Americana, São Paulo — atendimento acolhedor, pontual e dedicado.
            </motion.p>

            {/* Call to Action Button & Real-time schedule info */}
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
                <span className="online-dot" /> Atendimento via WhatsApp
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
                aria-label="Vídeo 3D de manutenção e polimento dental com a Dra. Mayume Amorim"
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
              <strong>4.8</strong>
              <span>nota média no Google</span>
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

      {/* About Section with photo of Dra. Mayume Amorim */}
      <section className="about" id="sobre">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="about-photo-wrapper"
        >
          <img
            src={draMayumePortrait}
            alt="Dra. Mayume Amorim - Dentista especializada em estética e saúde bucal"
            className="about-photo"
            id="about-photo-img"
            referrerPolicy="no-referrer"
          />
          <div className="about-badge">
            <LogoM size={38} color="#4B552B" />
            <div>
              <strong className="block text-2xl font-serif text-[#C8A858] leading-tight">Dra. Mayume</strong>
              <span>Excelência e acolhimento</span>
            </div>
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
          <span className="eyebrow" style={{ textAlign: 'left' }}>SOBRE A PROFISSIONAL</span>
          <h2>Perto de você, em São Miguel Paulista</h2>
          <p>
            No consultório da <strong>Dra. Mayume Amorim</strong>, unimos excelência técnica, tecnologias modernas e um
            olhar humano e acolhedor para cuidar do seu sorriso. Localizado na Vila Americana / São Miguel Paulista, oferecemos tratamentos de estética e saúde bucal com conforto, pontualidade e dedicação exclusiva a cada paciente.
          </p>
          <p>
            Contamos com consultório equipado, procedimentos de alta precisão e atendimento odontológico especializado pronto para transformar o seu sorriso em um ambiente seguro e confortável.
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
              Agendar Consulta ↗
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
            <h2>Pacientes satisfeitos com o atendimento</h2>
            <div className="rating-summary-box">
              <span className="big-rating">4.8</span>
              <div className="rating-stars-col">
                <div className="stars-row">★★★★★</div>
                <span className="rating-count">Avaliações reais de pacientes no Google</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Location / Contato Section (Única fonte de endereço, status em tempo real e mapa) */}
      <section className="location" id="contato">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Venha nos visitar</h2>
          <p className="location-subtitle">Localização de fácil acesso na Zona Leste de São Paulo</p>
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
            <div className="location-header-row flex items-center justify-between">
              <span className="location-badge">Consultório Odontológico</span>
              <span className="appointment-only-badge">Atendimento agendado</span>
            </div>
            <p className="address-text">Rua José Otoni, 284, 1º andar, sala 13 - Vila Americana, São Paulo–SP, 08010-290</p>
            <p className="building-name">1º andar, sala 13 · Vila Americana / São Miguel Paulista</p>
            
            <div className="location-status-row my-1 p-3 rounded-xl bg-stone-100/80 border border-stone-200/60">
              <div className="flex items-center gap-2 text-sm font-semibold text-stone-800">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8A858" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>Horário apenas com consulta agendada</span>
              </div>
            </div>

            <p className="disclaimer text-xs text-stone-600 mt-2 leading-relaxed border-t border-stone-200 pt-2">
              * O endereço pode aparecer como Vila Jacuí em alguns cadastros; o consultório informa Vila Americana / São Miguel Paulista. Confirme pelo WhatsApp antes de ir.
            </p>

            <a href="tel:5511938011790" id="location-phone-link" className="phone-link mt-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>(11) 93801-1790</span>
            </a>

            <div>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full text-center"
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
              title="Localização Dra. Mayume Amorim no Google Maps"
              src="https://maps.google.com/maps?q=Dra%20Mayume%20Amorim%20Consult%C3%B3rio%20Odontol%C3%B3gico%20Rua%20Jos%C3%A9%20Otoni%20284%20S%C3%A3o%20Paulo&t=&z=16&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Site Footer */}
      <footer className="site-footer" id="site-footer">
        <div className="footer-content">
          <div className="flex justify-center mb-2">
            <LogoM size={32} color="#4B552B" />
          </div>
          <p>© {new Date().getFullYear()} Dra. Mayume Amorim — Consultório Odontológico. Todos os direitos reservados.</p>
          <p className="footer-sub">Rua José Otoni, 284, 1º andar, sala 13 - Vila Americana / São Miguel Paulista, São Paulo - SP</p>
        </div>
      </footer>
    </main>
  );
}
