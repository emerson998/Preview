import type { Profile } from "../data/profile";
import { Section } from "./Section";

interface SkillsProps {
  profile: Profile;
}

export function Skills({ profile }: SkillsProps) {
  return (
    <Section id="habilidades" title="Habilidades">
      <div className="skill-groups">
        {profile.skills.map((group) => (
          <div key={group.category} className="skill-group">
            <h3>{group.category}</h3>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span key={item} className="skill-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
