import type { Profile } from "../data/profile";
import { Section } from "./Section";

interface EducationProps {
  profile: Profile;
}

export function Education({ profile }: EducationProps) {
  return (
    <Section id="formacao" title="Formação">
      <ul className="education-list">
        {profile.education.map((item) => (
          <li key={`${item.institution}-${item.period}`}>
            <div className="education-heading">
              <h3>{item.degree}</h3>
              <span className="timeline-period">{item.period}</span>
            </div>
            <p>{item.institution}</p>
            {item.details && <p className="education-details">{item.details}</p>}
          </li>
        ))}
      </ul>
    </Section>
  );
}
