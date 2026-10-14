import type { Profile } from "../data/profile";
import { Icon } from "./Icon";
import { Section } from "./Section";

interface ContactProps {
  profile: Profile;
}

export function Contact({ profile }: ContactProps) {
  return (
    <Section id="contato" title="Contato">
      <p className="contact-intro">Vamos conversar sobre a próxima oportunidade?</p>
      <p className="contact-description">Para oportunidades em back-end e integração de sistemas, entre em contato pelo telefone abaixo. No GitHub, você encontra meus repositórios públicos.</p>
      <ul className="contact-list">
        {profile.contacts.map((contact) => (
          <li key={contact.label}>
            <a href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <Icon name={contact.icon} />
              <span>{contact.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
