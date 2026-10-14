import type { Profile } from "../data/profile";
import { Icon } from "./Icon";

interface HeroProps {
  profile: Profile;
}

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function Hero({ profile }: HeroProps) {
  return (
    <section id="topo" className="hero">
      <div className="hero-avatar" aria-hidden={profile.avatarUrl ? undefined : "true"}>
        {profile.avatarUrl ? (
          <img src={profile.avatarUrl} alt={profile.name} width="96" height="96" fetchPriority="high" />
        ) : (
          <span>{initials(profile.name)}</span>
        )}
      </div>
      <div className="hero-text">
        <p className="eyebrow">Tech Lead Sênior · {profile.location}</p>
        <h1>{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-summary">{profile.introduction}</p>
        <div className="hero-actions">
          <a className="button-primary" href="#projetos">Conheça meu trabalho <span aria-hidden="true">↗</span></a>
          <a className="button-secondary" href="https://www.linkedin.com/in/emerson-oliveira-eng/" target="_blank" rel="noreferrer">Meu LinkedIn ↗</a>
        </div>
        <div className="impact-strip" aria-label="Resultados da trajetória profissional"><div><strong>500K+</strong><span>transações/dia</span></div><div><strong>99,95%</strong><span>disponibilidade</span></div><div><strong>15+</strong><span>sistemas integrados</span></div></div>
        <ul className="hero-contacts">
          {profile.contacts.map((contact) => (
            <li key={contact.label}>
              <a href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                <Icon name={contact.icon} />
                <span>{contact.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
