import type { Profile } from "../data/profile";
import { Section } from "./Section";

interface ExperienceProps {
  profile: Profile;
}

export function Experience({ profile }: ExperienceProps) {
  return (
    <Section id="experiencia" title="Experiência">
      <ol className="timeline">
        {profile.experience.map((job) => (
          <li key={`${job.company}-${job.start}`} className="timeline-item">
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content">
              <div className="timeline-heading">
                <h3>{job.role}</h3>
                <span className="timeline-period">
                  {job.start} — {job.end}
                </span>
              </div>
              <p className="timeline-company">
                {job.company}
                {job.location ? ` · ${job.location}` : ""}
              </p>
              <ul>
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
