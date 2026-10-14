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
const NAV_ITEMS = [
  { id: "projetos", label: "Projetos" },
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "habilidades", label: "Habilidades" },
  { id: "formacao", label: "Formação" },
  { id: "certificados", label: "Certificados" },
  { id: "contato", label: "Contato" },
];
const IDS = NAV_ITEMS.map(item => item.id);

export function Header({ name, theme, githubUrl, onToggleTheme }: HeaderProps) {
  const activeId = useActiveSection(IDS);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
        menuButton.current?.focus();
      }
    }
    function closeOnResize() { if (window.innerWidth > 1050) setMobileOpen(false); }
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnResize);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnResize);
    };
  }, [mobileOpen]);
  const links = NAV_ITEMS.map(item => (
    <a key={item.id} href={`#${item.id}`} aria-current={activeId === item.id ? "location" : undefined}
      className={activeId === item.id ? "site-nav-link--active" : ""} onClick={() => setMobileOpen(false)}>{item.label}</a>
  ));
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="#topo" className="site-header-name" aria-label={`${name} — início`}>Emerson<span className="brand-dot">.</span></a>
        <nav className="site-nav" aria-label="Navegação principal">{links}</nav>
        <div className="site-header-actions">
          {githubUrl && <a className="icon-btn" href={githubUrl} target="_blank" rel="noreferrer" aria-label="Abrir GitHub"><Icon name="github" /></a>}
          <button className="icon-btn" onClick={onToggleTheme} aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}>{theme === "light" ? "☾" : "☀"}</button>
          <button className="print-btn" onClick={() => window.print()} title="Abra a impressão e selecione Salvar como PDF">Salvar PDF</button>
          <button ref={menuButton} className={`hamburger-btn ${mobileOpen ? "hamburger-btn--open" : ""}`} onClick={() => setMobileOpen(open => !open)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={mobileOpen} aria-controls="menu-mobile"><span /><span /><span /></button>
        </div>
      </div>
      <nav id="menu-mobile" className={`mobile-nav ${mobileOpen ? "mobile-nav--open" : ""}`} aria-label="Navegação mobile" hidden={!mobileOpen}>{links}</nav>
    </header>
  );
}
