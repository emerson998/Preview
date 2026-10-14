// Fonte unica de conteudo do site. Troque os valores abaixo pelos seus dados —
// nenhum outro arquivo precisa mudar pra atualizar o curriculo inteiro.

export type ContactIcon = "email" | "phone" | "linkedin" | "github" | "location" | "website";

export interface ContactLink {
  label: string;
  href: string;
  icon: ContactIcon;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface CertificateLink {
  label: string;
  issuer: string;
  href: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  summary: string;
  introduction: string;
  avatarUrl: string | null;
  contacts: ContactLink[];
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillGroup[];
  projects: ProjectItem[];
  languages: LanguageItem[];
  certificates: CertificateLink[];
}

export const profile: Profile = {
  name: "Emerson Andrade de Oliveira",
  title: "Tech Lead Sênior · Engenharia de Software & IA",
  location: "São Paulo, SP",
  avatarUrl: "/foto.png",
  introduction: "Tech Lead Sênior na Solutis Tecnologias, liderando times de desenvolvimento, decisões de arquitetura, modernização de legados para microsserviços e SPA, além de iniciativas com LLMs e automação com IA.",
  summary:
    "Tech Lead Sênior com experiência em liderança técnica, arquitetura de software e modernização de sistemas legados. Atuação com Java e Python no desenvolvimento de sistemas " +
    "robustos e escaláveis. Domínio em arquiteturas baseadas em eventos síncronos e assíncronos, com vivência " +
    "em REST APIs, mensageria (Kafka, RabbitMQ) e processamento reativo. Aderência a princípios SOLID e Clean " +
    "Architecture, com domínio em queries avançadas (SQL, JPQL, Criteria Builder). Experiência em " +
    "microsserviços, integração de sistemas e boas práticas de engenharia de software, incluindo testes " +
    "automatizados, CI/CD e versionamento de código. Perfil orientado a resultados, com capacidade de atuar " +
    "em ambientes ágeis e multidisciplinares, entregando soluções de alta qualidade e performance.",
  contacts: [
    { label: "(11) 93225-8211", href: "tel:+5511932258211", icon: "phone" },
    { label: "github.com/emerson998", href: "https://github.com/emerson998", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/emerson-oliveira-eng/", icon: "linkedin" },

  ],
  experience: [
    {
      role: "Tech Lead Sênior",
      company: "Solutis Tecnologias",
      location: "São Paulo, Brasil · Híbrido",
      start: "Set/2026",
      end: "Atual",
      highlights: [
        "Liderança técnica do time de desenvolvimento e orientação de profissionais júnior, pleno e sênior.",
        "Condução de iniciativas estratégicas com LLMs (IA generativa) e automação de tarefas repetitivas.",
        "Definição de arquitetura e migração de sistemas legados para microsserviços com SPA, preservando comportamentos existentes.",
        "Code reviews e entrega de soluções seguras, escaláveis e alinhadas ao negócio.",
      ],
    },
    {
      role: "Engenheiro de Software Sênior",
      company: "Solutis Tecnologias",
      location: "São Paulo, Brasil · Híbrido",
      start: "Out/2025",
      end: "Set/2026",
      highlights: [
        "Desenvolvimento e manutenção de APIs e serviços backend em Java (Spring Boot) e Python (FastAPI) para o cliente Santander.",
        "Integração de sistemas, testes automatizados e otimização de processos em equipes ágeis.",
        "Sustentação de APIs críticas com mais de 500 mil transações por dia e 99,95% de disponibilidade.",
      ],
    },
    {
      role: "Desenvolvedor Java Pleno",
      company: "Almaviva Solutions",
      start: "Jan/2024",
      end: "Out/2025",
      highlights: [
        "Desenvolvimento de sistemas corporativos da Prodesp com Java e ecossistema Spring.",
        "Liderança técnica em partes do projeto, code reviews e acompanhamento do ciclo de desenvolvimento até o deploy.",
        "Liderança de integrações entre mais de 15 sistemas, com 98% de taxa de sucesso nas entregas.",
      ],
    },
    {
      role: "Desenvolvedor Java Júnior",
      company: "Almaviva Solutions",
      start: "Out/2021",
      end: "Dez/2023",
      highlights: [
        "Desenvolvimento e manutenção de sistemas da Prodesp com Java e Spring.",
        "Participação em mais de 20 code reviews e manutenção de aplicações com 8 integrações ativas.",
      ],
    },
  ],
  education: [
    {
      degree: "Análise e Desenvolvimento de Sistemas",
      institution: "Uninove",
      period: "2021 — 2023",
      details: "São Paulo, SP",
    },
  ],
  skills: [
    {
      category: "Linguagens & Frameworks",
      items: ["Java", "Spring Boot", "Python", "FastAPI", "Spring Data JPA", "Spring WebFlux"],
    },
    {
      category: "Mensageria & Eventos",
      items: ["Apache Kafka", "RabbitMQ", "Eventos Síncronos", "Eventos Assíncronos"],
    },
    {
      category: "Banco de Dados",
      items: ["PostgreSQL", "MySQL", "SQL", "JPQL", "Criteria Builder"],
    },
    {
      category: "DevOps & Ferramentas",
      items: ["Docker", "Git", "CI/CD", "REST APIs", "Kubernetes"],
    },
    {
      category: "IA aplicada ao desenvolvimento",
      items: ["Devin AI", "Windsurf (Codeium)", "Code Review com IA", "Automação com IA"],
    },
    {
      category: "Competências",
      items: [
        "SOLID & Clean Architecture",
        "Arquitetura de Microsserviços",
        "Programação Orientada a Objetos",
        "Design Patterns",
        "Testes Unitários e de Integração",
        "Metodologias Ágeis (Scrum/Kanban)",
        "Resolução de Problemas",
        "Trabalho em Equipe",
        "Comunicação Efetiva",
        "Aprendizado Contínuo",
      ],
    },
  ],
  projects: [
    {
      name: "Termo de Quitação — Santander Brasil (via Solutis)",
      description:
        "Desenvolvimento de APIs backend no contexto de termo de quitação, com criação de fluxos, automações, " +
        "proxies e orquestradores. Migração de aplicações Java e correção de vulnerabilidades, com banco de " +
        "dados PostgreSQL, pipelines CI/CD em GitHub Actions e sustentação de serviços em ambiente cloud AWS.",
      tags: ["Java", "APIs REST", "PostgreSQL", "AWS", "GitHub Actions", "CI/CD"],
    },
  ],
  languages: [],
  certificates: [
    {
      label: "Formação continuada em tecnologia",
      issuer: "Alura",
      href: "https://cursos.alura.com.br/user/oemerson1000/fullCertificate/af23fa8126b9a8412038291cfaf3aca4",
    },
  ],
};
