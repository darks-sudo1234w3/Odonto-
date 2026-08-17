import { useEffect, useState, type MouseEvent } from 'react';
import { Home, Image, MapPin, MessageCircle, UserRound } from 'lucide-react';

function ToothIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 4.1c-1.6 0-2.7-1.1-4.4-1.1C4.9 3 3 5.3 3 8c0 3.1 1.5 6.2 2.7 9.1.7 1.7 1.4 3.9 3 3.9 1.4 0 1.5-3.5 3.3-3.5s1.9 3.5 3.3 3.5c1.6 0 2.3-2.2 3-3.9C19.5 14.2 21 11.1 21 8c0-2.7-1.9-5-4.6-5-1.7 0-2.8 1.1-4.4 1.1Z" />
    </svg>
  );
}

const items = [
  { label: 'Início', href: '#inicio', icon: Home },
  { label: 'Sobre', href: '#sobre', icon: UserRound },
  { label: 'Tratamentos', href: '#tratamentos', icon: ToothIcon },
  { label: 'Sorrisos', href: '#sorrisos', icon: Image },
  { label: 'Contato', href: '#contato', icon: MapPin },
];

export default function NavigationDock() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const sections = items
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.05, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const goToSection = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(href.slice(1));
  };

  return (
    <nav className="dock" aria-label="Navegação principal">
      {items.map(({ label, href, icon: Icon }) => {
        const isActive = activeSection === href.slice(1);
        return (
          <a
            key={href}
            href={href}
            className={`dock-item-btn${isActive ? ' is-active' : ''}`}
            onClick={(event) => goToSection(event, href)}
            aria-label={label}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className="glow-ring" aria-hidden="true" />
            <Icon className="dock-item-icon" aria-hidden="true" />
            <span className="dock-tooltip" role="tooltip">{label}</span>
            <span className="dock-active-dot" aria-hidden="true" />
          </a>
        );
      })}

      <a
        href="https://wa.me/5511938011790"
        target="_blank"
        rel="noopener noreferrer"
        className="dock-item-btn dock-item-whatsapp"
        aria-label="Abrir WhatsApp em uma nova aba"
      >
        <span className="glow-ring" aria-hidden="true" />
        <MessageCircle className="dock-item-icon" aria-hidden="true" />
        <span className="dock-tooltip" role="tooltip">WhatsApp</span>
      </a>
    </nav>
  );
}
