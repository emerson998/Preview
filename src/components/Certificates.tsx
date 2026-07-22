import type { Profile } from "../data/profile";
import { Section } from "./Section";

interface CertificatesProps {
  profile: Profile;
}

export function Certificates({ profile }: CertificatesProps) {
  if (profile.certificates.length === 0) return null;

  return (
    <Section id="certificados" title="Certificados">
      <ul className="certificate-list">
        {profile.certificates.map((cert) => (
          <li key={cert.href} className="certificate-item">
            <div>
              <h3>{cert.label}</h3>
              <p>{cert.issuer}</p>
            </div>
            <a href={cert.href} target="_blank" rel="noreferrer" className="certificate-link">
              Ver certificado →
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
