import { useEffect, useRef, useState } from "react";
import type { Theme } from "../useTheme";
import { useActiveSection } from "../useActiveSection";
import { Icon } from "./Icon";

interface HeaderProps {
  name: string;
  theme: Theme;
  githubUrl?: string;
  onToggleTheme: () => void;
}

const NAV_ITEMS: { href: string; id: string; label: string }[] = [
  { href: "#sobre", id: "sobre", label: "Sobre" },
  { href: "#experiencia", id: "experiencia", label: "Experiência" },
  { href: "#habilidades", id: "habilidades", label: "Habilidades" },
  { href: "#formacao", id: "formacao", label: "Formação" },
  { href: "#certificados", id: "certificados", label: "Certificados" },
  { href: "#contato", id: "contato", label: "Contato" },
];

// Referencia estavel (fora do componente) — se fosse `NAV_ITEMS.map(...)` dentro
// do render, o array seria recriado a cada render e reiniciaria o
// IntersectionObserver do useActiveSection sem necessidade.
const NAV_ITEM_IDS = NAV_ITEMS.map((item) => item.id);

interface IndicatorStyle {
  left: number;
  top: number;
  width: number;
  opacity: number;
}

export function Header({ name, theme, githubUrl, onToggleTheme }: HeaderProps) {
  const activeId = useActiveSection(NAV_ITEM_IDS);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState<IndicatorStyle>({ left: 0, top: 0, width: 0, opacity: 0 });

  useEffect(() => {
    function updateIndicator() {
      const nav = navRef.current;
      const link = activeId ? linkRefs.current[activeId] : null;
      if (!nav || !link) {
        setIndicator((prev) => ({ ...prev, opacity: 0 }));
        return;
      }
      const navBox = nav.getBoundingClientRect();
      const linkBox = link.getBoundingClientRect();
      // top calculado por link (nao fixo no rodape do nav) — funciona mesmo se
      // o menu quebrar em duas linhas em larguras intermediarias.
      setIndicator({
        left: linkBox.left - navBox.left,
        top: linkBox.bottom - navBox.top,
        width: linkBox.width,
        opacity: 1,
      });
    }

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeId]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [activeId]);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="site-header-inner">
        <a href="#topo" className="site-header-name">
          {name}
        </a>

        <nav className="site-nav" aria-label="Navegação principal" ref={navRef}>
          <span
            className="site-nav-indicator"
            style={{
              transform: `translate(${indicator.left}px, ${indicator.top - 2}px)`,
              width: indicator.width,
              opacity: indicator.opacity,
            }}
          />
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              ref={(el) => {
                linkRefs.current[item.id] = el;
              }}
              className={activeId === item.id ? "site-nav-link--active" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header-actions">
          {githubUrl && (
            <a
              className="icon-btn"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir GitHub"
              title="GitHub"
            >
              <Icon name="github" />
            </a>
          )}
          <button
            className="icon-btn icon-btn--theme"
            onClick={onToggleTheme}
            aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
            title={theme === "light" ? "Modo escuro" : "Modo claro"}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <button className="print-btn" onClick={() => window.print()}>
            Baixar PDF
          </button>
          <button
            className={`hamburger-btn ${mobileOpen ? "hamburger-btn--open" : ""}`}
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav className={`mobile-nav ${mobileOpen ? "mobile-nav--open" : ""}`} aria-label="Navegação (mobile)">
        {NAV_ITEMS.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            className={activeId === item.id ? "site-nav-link--active" : ""}
            style={{ transitionDelay: `${i * 30}ms` }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
