import type { Profile } from "../data/profile";
import { Section } from "./Section";

interface AboutProps {
  profile: Profile;
}

export function About({ profile }: AboutProps) {
  return (
    <Section id="sobre" title="Sobre">
      <p className="about-text">{profile.summary}</p>
      {profile.languages.length > 0 && (
        <ul className="language-list">
          {profile.languages.map((lang) => (
            <li key={lang.name}>
              <strong>{lang.name}</strong> — {lang.level}
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
