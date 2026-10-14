import type { Profile } from "../data/profile";
import { Section } from "./Section";

export function Projects({ profile }: { profile: Profile }) {
  if (!profile.projects.length) return null;
  return (
    <Section id="projetos" title="Projetos & atuação">
      <p className="section-intro">Da integração de sistemas à sustentação em produção.</p>
      <div className="project-grid">
        {profile.projects.map((project, index) => (
          <article className="project-card" key={project.name}>
            <p className="eyebrow">{String(index + 1).padStart(2, "0")} / Atuação profissional</p>
            <h3>{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <ul className="skill-tags" aria-label="Tecnologias do projeto">
              {project.tags.map(tag => <li className="skill-tag" key={tag}>{tag}</li>)}
            </ul>
            {project.link && <a className="project-link" href={project.link} target="_blank" rel="noreferrer">Conhecer projeto ↗</a>}
          </article>
        ))}
      </div>
    </Section>
  );
}
