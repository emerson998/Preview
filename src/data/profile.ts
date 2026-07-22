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
  title: "Desenvolvedor Back-End · Java & Python",
  location: "São Paulo, SP",
  avatarUrl: "/foto.png",
  summary:
    "Desenvolvedor Back-End com experiência sólida em Java e Python, atuando no desenvolvimento de sistemas " +
    "robustos e escaláveis. Domínio em arquiteturas baseadas em eventos síncronos e assíncronos, com vivência " +
    "em REST APIs, mensageria (Kafka, RabbitMQ) e processamento reativo. Aderência a princípios SOLID e Clean " +
    "Architecture, com domínio em queries avançadas (SQL, JPQL, Criteria Builder). Experiência em " +
    "microsserviços, integração de sistemas e boas práticas de engenharia de software, incluindo testes " +
    "automatizados, CI/CD e versionamento de código. Perfil orientado a resultados, com capacidade de atuar " +
    "em ambientes ágeis e multidisciplinares, entregando soluções de alta qualidade e performance.",
  contacts: [
    { label: "(11) 93225-8211", href: "tel:+5511932258211", icon: "phone" },
    { label: "github.com/emerson998", href: "https://github.com/emerson998", icon: "github" },
    { label: "São Paulo, SP", href: "#", icon: "location" },
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "Solutis",
      start: "Out/2025",
      end: "Atual",
      highlights: [
        "Desenvolvimento e manutenção de microsserviços em Java (Spring Boot) e Python (FastAPI).",
        "Implementação de comunicação assíncrona com mensageria e eventos.",
        "Integração de sistemas e APIs RESTful em ambientes de alta disponibilidade.",
        "Aplicação de padrões de resiliência e observabilidade em arquiteturas distribuídas.",
        "Participação ativa em cerimônias ágeis e code reviews.",
      ],
    },
    {
      role: "Desenvolvedor Java Pleno",
      company: "Almaviva Solutions",
      start: "Out/2021",
      end: "Out/2025",
      highlights: [
        "Desenvolvimento de aplicações back-end em Java e Python para sistemas corporativos.",
        "Aplicação de princípios SOLID e Clean Architecture para código limpo, desacoplado e de fácil manutenção.",
        "Criação e consumo de APIs REST e integração com serviços externos.",
        "Construção de queries avançadas com SQL nativo, JPQL e Criteria Builder (JPA).",
        "Implementação de fluxos de eventos síncronos e assíncronos para processamento de dados.",
        "Utilização de bancos de dados relacionais (PostgreSQL, MySQL) e práticas de DevOps com CI/CD e Docker.",
        "Colaboração em equipes multidisciplinares seguindo metodologias ágeis (Scrum/Kanban).",
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
      label: "Certificado completo de cursos",
      issuer: "Alura",
      href: "https://cursos.alura.com.br/user/oemerson1000/fullCertificate/af23fa8126b9a8412038291cfaf3aca4",
    },
  ],
};
