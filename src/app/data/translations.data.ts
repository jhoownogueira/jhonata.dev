import { AppTranslations, UiTranslations } from '../core/i18n/i18n.models';
import { PortfolioContent } from '../core/models/portfolio.models';
import { PORTFOLIO_DATA } from './portfolio.data';

const UI_PT: UiTranslations = {
  language: 'Idioma',
  languageName: 'Português',
  pageTitle: 'Jhonata Nogueira — Engenheiro de Software',
  pageDescription:
    'Portfólio técnico de Jhonata Nogueira, engenheiro de software full stack com atuação do frontend à infraestrutura.',
  casePageTitle: 'Case técnico — jhonata.dev',
  brandHome: 'jhonata.dev — início',
  mainNavigation: 'Navegação principal',
  mobileNavigation: 'Navegação mobile',
  openMenu: 'Abrir menu',
  lightTheme: 'Tema claro',
  darkTheme: 'Tema escuro',
  activateLightTheme: 'Ativar tema claro',
  activateDarkTheme: 'Ativar tema escuro',
  heroKicker: 'Engenharia de software · Full stack',
  heroRole: 'Desenvolvedor & arquiteto de software',
  heroIntro:
    'Crio software do frontend à infraestrutura, conectando interfaces, serviços e os ambientes que os sustentam.',
  viewProjects: 'Ver projetos',
  downloadResume: 'Baixar currículo',
  practiceAreas: 'Áreas de atuação',
  fromCodeToEnvironment: 'Do código ao ambiente',
  interfaces: 'Interfaces',
  apisAndServices: 'APIs e serviços',
  infrastructure: 'Infraestrutura',
  resumeAndPortfolio: 'Currículo + portfólio técnico',
  goToAbout: 'Ir para a seção sobre',
  aboutLabel: 'Sobre',
  aboutTitle: 'Uma visão do sistema inteiro. Atenção a cada camada.',
  aboutIntro:
    'Meu escopo conecta frontend, backend e infraestrutura. Penso nas interfaces, nos serviços e na operação como partes do mesmo software — com responsabilidades claras, contratos estáveis e evolução sustentável.',
  aboutLead:
    'Engenharia orientada a produto, com repertório em design, comunicação e arquitetura para transformar problemas ambíguos em entregas concretas.',
  principles: [
    {
      title: 'Contexto antes da solução',
      description:
        'Entender domínio, restrições e operação para decidir o que realmente precisa existir.',
    },
    {
      title: 'Contratos que protegem mudanças',
      description:
        'Interfaces próprias e dependências encapsuladas reduzem acoplamento e custo de evolução.',
    },
    {
      title: 'Produção faz parte do produto',
      description:
        'Build, deploy, observabilidade e segurança entram na conversa desde a arquitetura.',
    },
  ],
  experienceLabel: 'Experiência',
  experienceTitle: 'Software com responsabilidade de ponta a ponta.',
  experienceIntro:
    'Atuação em produtos digitais, plataformas SaaS e serviços web, da descoberta à publicação.',
  technologies: 'Tecnologias',
  projectsLabel: 'Projetos selecionados',
  projectsTitle: 'Produtos em contexto.',
  projectsIntro:
    'Problema, arquitetura e decisões técnicas apresentados sem esconder limites nem preencher lacunas com suposições.',
  skillsLabel: 'Competências técnicas',
  skillsTitle: 'Decisões atravessam camadas.',
  skillsIntro:
    'Ferramentas importam; a capacidade de escolher, combinar e substituir cada uma importa mais.',
  resumeLabel: 'Currículo',
  resumeTitle: 'Experiência e competências, em um documento.',
  resumeDescription: 'Versão em PDF para consulta, compartilhamento ou impressão.',
  contactLabel: 'Contato',
  contactTitleLine1: 'Vamos conversar',
  contactTitleLine2: 'sobre software.',
  contactDescription:
    'Para falar sobre engenharia, arquitetura ou conhecer melhor os projetos, me encontre nestes canais.',
  softwareEngineering: 'Engenharia de software',
  backToTop: 'Voltar ao topo',
  viewCase: 'Ver case',
  projectHighlights: 'Destaques do projeto',
  myRole: 'Meu papel',
  visitSite: 'Visitar site',
  backToProjects: 'Voltar aos projetos',
  technicalCase: 'Case técnico',
  visualReference:
    'Referência visual do projeto · conteúdo técnico resumido a partir do repositório local',
  visitProduct: 'Visitar produto',
  viewRepository: 'Ver repositório',
  contextLabel: 'Contexto',
  contextTitle: 'O problema antes da tecnologia.',
  architectureLabel: 'Arquitetura',
  architectureTitle: 'Limites explícitos para evoluir.',
  decisionsLabel: 'Decisões',
  learningLabel: 'Aprendizado',
  architectureItemTitles: [
    'Limites e responsabilidades',
    'Fluxo principal',
    'Camada de apresentação',
  ],
  decisionFallback: 'Decisão',
  caseFooter: 'Mais contexto, menos suposições.',
};

const UI_EN: UiTranslations = {
  ...UI_PT,
  language: 'Language',
  languageName: 'English',
  pageTitle: 'Jhonata Nogueira — Software Engineer',
  pageDescription:
    'Technical portfolio of Jhonata Nogueira, a full-stack software engineer working from frontend to infrastructure.',
  casePageTitle: 'Technical case study — jhonata.dev',
  brandHome: 'jhonata.dev — home',
  mainNavigation: 'Main navigation',
  mobileNavigation: 'Mobile navigation',
  openMenu: 'Open menu',
  lightTheme: 'Light theme',
  darkTheme: 'Dark theme',
  activateLightTheme: 'Switch to light theme',
  activateDarkTheme: 'Switch to dark theme',
  heroKicker: 'Software engineering · Full stack',
  heroRole: 'Software developer & architect',
  heroIntro:
    'I build software from frontend to infrastructure, connecting interfaces, services, and the environments that support them.',
  viewProjects: 'View projects',
  downloadResume: 'Download résumé',
  practiceAreas: 'Areas of expertise',
  fromCodeToEnvironment: 'From code to environment',
  interfaces: 'Interfaces',
  apisAndServices: 'APIs and services',
  infrastructure: 'Infrastructure',
  resumeAndPortfolio: 'Résumé + technical portfolio',
  goToAbout: 'Go to the about section',
  aboutLabel: 'About',
  aboutTitle: 'A view of the whole system. Attention to every layer.',
  aboutIntro:
    'My scope connects frontend, backend, and infrastructure. I see interfaces, services, and operations as parts of the same software — with clear responsibilities, stable contracts, and sustainable evolution.',
  aboutLead:
    'Product-oriented engineering, backed by design, communication, and architecture experience to turn ambiguous problems into concrete deliveries.',
  principles: [
    {
      title: 'Context before the solution',
      description:
        'Understand the domain, constraints, and operations to decide what truly needs to exist.',
    },
    {
      title: 'Contracts that protect change',
      description:
        'Purpose-built interfaces and encapsulated dependencies reduce coupling and the cost of change.',
    },
    {
      title: 'Production is part of the product',
      description:
        'Build, deployment, observability, and security are part of the conversation from day one.',
    },
  ],
  experienceLabel: 'Experience',
  experienceTitle: 'End-to-end ownership of software.',
  experienceIntro:
    'Work across digital products, SaaS platforms, and web services, from discovery to release.',
  technologies: 'Technologies',
  projectsLabel: 'Selected projects',
  projectsTitle: 'Products in context.',
  projectsIntro:
    'Problems, architecture, and technical decisions presented without hiding constraints or filling gaps with assumptions.',
  skillsLabel: 'Technical skills',
  skillsTitle: 'Decisions span every layer.',
  skillsIntro:
    'Tools matter; the ability to choose, combine, and replace each one matters even more.',
  resumeLabel: 'Résumé',
  resumeTitle: 'Experience and skills, in one document.',
  resumeDescription: 'PDF version for viewing, sharing, or printing.',
  contactLabel: 'Contact',
  contactTitleLine1: "Let's talk",
  contactTitleLine2: 'about software.',
  contactDescription:
    'To talk about engineering, architecture, or learn more about these projects, reach me through these channels.',
  softwareEngineering: 'Software engineering',
  backToTop: 'Back to top',
  viewCase: 'View case study',
  projectHighlights: 'Project highlights',
  myRole: 'My role',
  visitSite: 'Visit website',
  backToProjects: 'Back to projects',
  technicalCase: 'Technical case study',
  visualReference: 'Project visual · technical content summarized from the local repository',
  visitProduct: 'Visit product',
  viewRepository: 'View repository',
  contextLabel: 'Context',
  contextTitle: 'The problem before the technology.',
  architectureLabel: 'Architecture',
  architectureTitle: 'Explicit boundaries built to evolve.',
  decisionsLabel: 'Decisions',
  learningLabel: 'Key learning',
  architectureItemTitles: ['Boundaries and responsibilities', 'Main flow', 'Presentation layer'],
  decisionFallback: 'Decision',
  caseFooter: 'More context, fewer assumptions.',
};

const UI_ES: UiTranslations = {
  ...UI_PT,
  language: 'Idioma',
  languageName: 'Español',
  pageTitle: 'Jhonata Nogueira — Ingeniero de Software',
  pageDescription:
    'Portafolio técnico de Jhonata Nogueira, ingeniero de software full stack con experiencia desde el frontend hasta la infraestructura.',
  casePageTitle: 'Caso técnico — jhonata.dev',
  brandHome: 'jhonata.dev — inicio',
  mainNavigation: 'Navegación principal',
  mobileNavigation: 'Navegación móvil',
  openMenu: 'Abrir menú',
  lightTheme: 'Tema claro',
  darkTheme: 'Tema oscuro',
  activateLightTheme: 'Activar tema claro',
  activateDarkTheme: 'Activar tema oscuro',
  heroKicker: 'Ingeniería de software · Full stack',
  heroRole: 'Desarrollador y arquitecto de software',
  heroIntro:
    'Creo software desde el frontend hasta la infraestructura, conectando interfaces, servicios y los entornos que los sostienen.',
  viewProjects: 'Ver proyectos',
  downloadResume: 'Descargar currículum',
  practiceAreas: 'Áreas de especialidad',
  fromCodeToEnvironment: 'Del código al entorno',
  interfaces: 'Interfaces',
  apisAndServices: 'APIs y servicios',
  infrastructure: 'Infraestructura',
  resumeAndPortfolio: 'Currículum + portafolio técnico',
  goToAbout: 'Ir a la sección sobre mí',
  aboutLabel: 'Sobre mí',
  aboutTitle: 'Una visión del sistema completo. Atención a cada capa.',
  aboutIntro:
    'Mi trabajo conecta frontend, backend e infraestructura. Pienso en las interfaces, los servicios y la operación como partes del mismo software — con responsabilidades claras, contratos estables y evolución sostenible.',
  aboutLead:
    'Ingeniería orientada al producto, con experiencia en diseño, comunicación y arquitectura para transformar problemas ambiguos en entregas concretas.',
  principles: [
    {
      title: 'El contexto antes que la solución',
      description:
        'Entender el dominio, las restricciones y la operación para decidir qué necesita existir.',
    },
    {
      title: 'Contratos que protegen los cambios',
      description:
        'Las interfaces propias y las dependencias encapsuladas reducen el acoplamiento y el coste de evolución.',
    },
    {
      title: 'Producción es parte del producto',
      description:
        'Build, despliegue, observabilidad y seguridad forman parte de la conversación desde la arquitectura.',
    },
  ],
  experienceLabel: 'Experiencia',
  experienceTitle: 'Software con responsabilidad de principio a fin.',
  experienceIntro:
    'Trabajo en productos digitales, plataformas SaaS y servicios web, desde el descubrimiento hasta la publicación.',
  technologies: 'Tecnologías',
  projectsLabel: 'Proyectos seleccionados',
  projectsTitle: 'Productos en contexto.',
  projectsIntro:
    'Problema, arquitectura y decisiones técnicas presentados sin ocultar límites ni completar vacíos con suposiciones.',
  skillsLabel: 'Competencias técnicas',
  skillsTitle: 'Las decisiones atraviesan las capas.',
  skillsIntro:
    'Las herramientas importan; la capacidad de elegir, combinar y sustituir cada una importa aún más.',
  resumeLabel: 'Currículum',
  resumeTitle: 'Experiencia y competencias, en un documento.',
  resumeDescription: 'Versión en PDF para consultar, compartir o imprimir.',
  contactLabel: 'Contacto',
  contactTitleLine1: 'Hablemos',
  contactTitleLine2: 'sobre software.',
  contactDescription:
    'Para conversar sobre ingeniería, arquitectura o conocer mejor los proyectos, encuéntrame en estos canales.',
  softwareEngineering: 'Ingeniería de software',
  backToTop: 'Volver arriba',
  viewCase: 'Ver caso',
  projectHighlights: 'Aspectos destacados del proyecto',
  myRole: 'Mi rol',
  visitSite: 'Visitar sitio',
  backToProjects: 'Volver a proyectos',
  technicalCase: 'Caso técnico',
  visualReference:
    'Referencia visual del proyecto · contenido técnico resumido del repositorio local',
  visitProduct: 'Visitar producto',
  viewRepository: 'Ver repositorio',
  contextLabel: 'Contexto',
  contextTitle: 'El problema antes que la tecnología.',
  architectureLabel: 'Arquitectura',
  architectureTitle: 'Límites explícitos para evolucionar.',
  decisionsLabel: 'Decisiones',
  learningLabel: 'Aprendizaje',
  architectureItemTitles: [
    'Límites y responsabilidades',
    'Flujo principal',
    'Capa de presentación',
  ],
  decisionFallback: 'Decisión',
  caseFooter: 'Más contexto, menos suposiciones.',
};

const PORTFOLIO_DATA_EN: PortfolioContent = {
  navigation: [
    { label: 'About', href: '#sobre' },
    { label: 'Experience', href: '#experiencia' },
    { label: 'Projects', href: '#projetos' },
    { label: 'Skills', href: '#competencias' },
    { label: 'Contact', href: '#contato' },
  ],
  experiences: [
    {
      ...PORTFOLIO_DATA.experiences[0],
      period: '2026 — present',
      role: 'Software Engineer',
      summary:
        'Full-stack development of scalable web applications and services, connecting interfaces, APIs, integrations, and operations.',
    },
    {
      ...PORTFOLIO_DATA.experiences[1],
      period: '2025 — present',
      summary:
        'End-to-end architecture and development of a management and relationship platform for dental clinics.',
    },
    {
      ...PORTFOLIO_DATA.experiences[2],
      period: '2021 — 2026',
      role: 'Developer',
      summary:
        'Transition from marketing to engineering, working on the development of digital products and experiences.',
      technologies: ['Frontend', 'Backend', 'Product', 'UX'],
    },
  ],
  projects: [
    {
      ...PORTFOLIO_DATA.projects[0],
      summary:
        'A deterministic, stateless engine that compares OpenAPI contracts before incompatible changes reach consumers.',
      imageAlt: 'Dark OASFuse interface showing an OpenAPI contract comparison',
      role: 'End-to-end architecture and development',
      facts: [
        'OpenAPI 3.0 and 3.1 in YAML or JSON',
        'The same engine in the browser, API, and CLI',
        'Findings classified for release gates and human review',
      ],
      metrics: [
        { label: 'Inputs', value: 'YAML / JSON' },
        { label: 'Execution', value: 'Web · API · CLI' },
        { label: 'Model', value: 'Stateless' },
      ],
      challenge:
        'Compare contracts without turning syntactic differences into noise and without relying on persistence or external references.',
      architecture: [
        'A shared Java core centralizes deterministic comparison rules.',
        'A Quarkus API exposes the engine over HTTP, while the CLI packages the same logic for offline automation.',
        'The Next.js application keeps calls same-origin and serves as the presentation and BFF layer.',
      ],
      decisions: [
        'Reproducible output for the same pair of specifications.',
        'Explicit limits for size, depth, and local reference resolution.',
        'Separation between breaking, review, and informational findings for different CI policies.',
      ],
      learning:
        'Contract tools are most useful when they explain changes in context and preserve the same behavior for people and automation.',
    },
    {
      ...PORTFOLIO_DATA.projects[1],
      eyebrow: 'SaaS · dental management',
      summary:
        'An operational platform for clinics bringing scheduling, patients, records, relationships, and financial management together.',
      imageAlt: 'Dental clinic environment used in the DenteFlow sign-in experience',
      role: 'SaaS architecture and full-stack development',
      facts: [
        'Application and portal operated in a monorepo',
        'Independent backends with Quarkus services',
        'Selective deployment by component and versioned images',
      ],
      status: 'Product under active development',
      metrics: [
        { label: 'Domain', value: 'Clinics' },
        { label: 'Architecture', value: 'Monorepo' },
        { label: 'Operations', value: 'Docker · CI/CD' },
      ],
      challenge:
        'Organize a broad operational domain without losing clarity between the clinic experience, the portal, and the services responsible for each flow.',
      architecture: [
        'The main application and portal have independent frontends and backends.',
        'Java/Quarkus services access PostgreSQL while maintaining separate operational boundaries.',
        'Pipelines detect changed components and prepare selective deployments.',
      ],
      decisions: [
        'Separation by executable product, with coordination retained in the monorepo.',
        'Secrets and keys remain outside the source code and public artifacts.',
        'Operations and rollback are treated as part of the product architecture.',
      ],
      learning:
        'In operational SaaS, product quality depends as much on domain flows as on clear deployment, configuration, and security boundaries.',
    },
    {
      ...PORTFOLIO_DATA.projects[2],
      eyebrow: 'AEC tech · artificial intelligence',
      summary:
        'AI-assisted creation of preliminary floor-plan studies from site data, parameters, and requirements provided by the user.',
      imageAlt: 'Aerial urban view representing the planning context for Geomora',
      role: 'Product, architecture, and full-stack engineering',
      facts: [
        'Site, parameters, and residential program as input context',
        'AI proposes alternative room arrangements',
        'Preliminary studies subject to validation and professional review',
      ],
      status: 'AI product in development',
      metrics: [
        { label: 'Input', value: 'Site + brief' },
        { label: 'Generation', value: 'AI-assisted' },
        { label: 'Output', value: 'Preliminary study' },
      ],
      challenge:
        'Turn objective data and user preferences into coherent, comparable floor-plan alternatives while making their limitations transparent.',
      architecture: [
        'The interface structures site data, parameters, and requirements before sending them into the generation flow.',
        'The application layer prepares context for the AI and normalizes proposals into a shared architectural model.',
        'Independent geometric validations check alternatives before they are shown to the user.',
      ],
      decisions: [
        'Missing data becomes explicit questions or assumptions, never silent autofill.',
        'AI proposes alternatives, while critical rules and validations remain verifiable.',
        'The result is presented as a preliminary study, not construction documentation or municipal approval.',
      ],
      learning:
        'AI adds value when it turns a brief into concrete possibilities without hiding assumptions, constraints, or the need for professional review.',
    },
    {
      ...PORTFOLIO_DATA.projects[3],
      eyebrow: 'Fintech · shared finances',
      summary:
        'Personal and family financial management with accounts, transactions, cards, forecasts, and reports based on real data.',
      role: 'Architecture and full-stack development',
      facts: [
        'Financial isolation by household',
        'Short-lived JWT and rotating refresh tokens',
        'Open Finance integration controlled by the backend',
      ],
      status: 'Functional MVP',
      metrics: [
        { label: 'Model', value: 'Household' },
        { label: 'Data', value: 'PostgreSQL' },
        { label: 'Integration', value: 'Open Finance' },
      ],
      challenge:
        'Represent recurring and shared financial operations while preserving authorization, balance consistency, and readable forecasts.',
      architecture: [
        'The Next.js frontend consumes a typed ASP.NET Core API.',
        'Persistence uses Entity Framework Core and PostgreSQL.',
        'Sensitive integrations stay behind the backend and additional checks.',
      ],
      decisions: [
        'An identifier sent by the client is never enough to authorize household access.',
        'Migrations and deployment are explicit operational steps.',
        'No permanent financial mocks in the product experience.',
      ],
      learning:
        'Financial models require precise domain rules and tests focused on transactions, recurrence, statements, and projections.',
    },
    {
      ...PORTFOLIO_DATA.projects[4],
      eyebrow: 'Web · digital presence',
      summary:
        'A fast, accessible institutional website for air-conditioning and electrical services, designed for direct contact.',
      imageAlt: 'Bright room with air conditioning, an illustrative image for the Climafer project',
      role: 'Design and frontend development',
      facts: [
        'Core content rendered on the server',
        'Interactivity limited to the flows that need it',
        'Accessible gallery preserving real images',
      ],
      status: 'Ready to publish',
      metrics: [
        { label: 'Delivery', value: 'Institutional' },
        { label: 'Rendering', value: 'Server-first' },
        { label: 'Contact', value: 'WhatsApp' },
      ],
      challenge:
        'Create a trustworthy digital presence from limited institutional data without inventing reviews, metrics, or business credentials.',
      architecture: [
        'App Router with core content rendered on the server.',
        'Client-side JavaScript limited to the menu, gallery, and floating contact.',
        'Metadata and structured data follow the domain configuration.',
      ],
      decisions: [
        'Service photos are shown side by side, without misleading overlays.',
        'The application adds no form, analytics, or cookies.',
        'The hero image is identified as an illustrative environment.',
      ],
      learning:
        'A simple website earns trust by being rigorous about image sources, published content, and the amount of JavaScript delivered.',
    },
  ],
  skills: [
    { name: 'Frontend', items: ['Angular', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend', items: ['Node.js', 'NestJS', 'ASP.NET Core', 'Java', 'Quarkus'] },
    { name: 'Architecture', items: ['DDD', 'REST APIs', 'Contracts', 'Modularity', 'Testing'] },
    { name: 'Operations', items: ['Docker', 'CI/CD', 'Linux', 'NGINX', 'PostgreSQL'] },
  ],
};

const PORTFOLIO_DATA_ES: PortfolioContent = {
  navigation: [
    { label: 'Sobre mí', href: '#sobre' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Proyectos', href: '#projetos' },
    { label: 'Competencias', href: '#competencias' },
    { label: 'Contacto', href: '#contato' },
  ],
  experiences: [
    {
      ...PORTFOLIO_DATA.experiences[0],
      period: '2026 — actualidad',
      role: 'Ingeniero de Software',
      summary:
        'Desarrollo full stack de aplicaciones web y servicios escalables, conectando interfaces, APIs, integraciones y operación.',
    },
    {
      ...PORTFOLIO_DATA.experiences[1],
      period: '2025 — actualidad',
      summary:
        'Arquitectura y evolución end-to-end de una plataforma de gestión y relación para clínicas odontológicas.',
    },
    {
      ...PORTFOLIO_DATA.experiences[2],
      role: 'Desarrollador',
      summary:
        'Transición del marketing a la ingeniería, trabajando en el desarrollo de productos y experiencias digitales.',
      technologies: ['Frontend', 'Backend', 'Producto', 'UX'],
    },
  ],
  projects: [
    {
      ...PORTFOLIO_DATA.projects[0],
      summary:
        'Motor determinista y stateless para comparar contratos OpenAPI antes de que los cambios incompatibles lleguen a los consumidores.',
      imageAlt: 'Interfaz oscura de OASFuse mostrando una comparación de contratos OpenAPI',
      role: 'Arquitectura y desarrollo end-to-end',
      facts: [
        'OpenAPI 3.0 y 3.1 en YAML o JSON',
        'El mismo motor en el navegador, la API y el CLI',
        'Hallazgos clasificados para release gates y revisión humana',
      ],
      metrics: [
        { label: 'Entradas', value: 'YAML / JSON' },
        { label: 'Ejecución', value: 'Web · API · CLI' },
        { label: 'Modelo', value: 'Stateless' },
      ],
      challenge:
        'Comparar contratos sin convertir las diferencias sintácticas en ruido y sin depender de persistencia ni referencias externas.',
      architecture: [
        'Un núcleo Java compartido concentra las reglas deterministas de comparación.',
        'La API Quarkus expone el motor por HTTP y el CLI empaqueta la misma lógica para automatización offline.',
        'La aplicación Next.js mantiene llamadas same-origin y funciona como capa de presentación y BFF.',
      ],
      decisions: [
        'Salida reproducible para el mismo par de especificaciones.',
        'Límites explícitos de tamaño, profundidad y resolución de referencias locales.',
        'Separación entre breaking, review e informational para distintas políticas de CI.',
      ],
      learning:
        'Las herramientas de contratos son más útiles cuando explican el cambio con contexto y conservan el mismo comportamiento para personas y automatización.',
    },
    {
      ...PORTFOLIO_DATA.projects[1],
      eyebrow: 'SaaS · gestión odontológica',
      summary:
        'Plataforma operativa para clínicas que reúne agenda, pacientes, historial clínico, relaciones y gestión financiera.',
      imageAlt: 'Entorno de clínica odontológica usado en la experiencia de acceso de DenteFlow',
      role: 'Arquitectura SaaS y desarrollo full stack',
      facts: [
        'Aplicación y portal operados en un monorepo',
        'Backends independientes con servicios Quarkus',
        'Despliegue selectivo por componente e imágenes versionadas',
      ],
      status: 'Producto en evolución',
      metrics: [
        { label: 'Dominio', value: 'Clínicas' },
        { label: 'Arquitectura', value: 'Monorepo' },
        { label: 'Operación', value: 'Docker · CI/CD' },
      ],
      challenge:
        'Organizar un dominio operativo amplio sin perder claridad entre la experiencia de la clínica, el portal y los servicios responsables de cada flujo.',
      architecture: [
        'La aplicación principal y el portal tienen frontends y backends independientes.',
        'Los servicios Java/Quarkus acceden a PostgreSQL y mantienen límites operativos separados.',
        'Los pipelines detectan los componentes modificados y preparan despliegues selectivos.',
      ],
      decisions: [
        'Separación por producto ejecutable, manteniendo la coordinación en el monorepo.',
        'Los secretos y las claves permanecen fuera del código y de los artefactos públicos.',
        'La operación y el rollback se tratan como parte de la arquitectura del producto.',
      ],
      learning:
        'En un SaaS operativo, la calidad depende tanto de los flujos de dominio como de límites claros de despliegue, configuración y seguridad.',
    },
    {
      ...PORTFOLIO_DATA.projects[2],
      eyebrow: 'AEC tech · inteligencia artificial',
      summary:
        'Creación asistida por IA de estudios preliminares de planta a partir de los datos del terreno, parámetros y necesidades proporcionados por el usuario.',
      imageAlt: 'Vista aérea urbana que representa el contexto de planificación de Geomora',
      role: 'Producto, arquitectura e ingeniería full stack',
      facts: [
        'Terreno, parámetros y programa residencial como contexto de entrada',
        'IA para proponer alternativas de organización de los ambientes',
        'Estudios preliminares sujetos a validación y revisión profesional',
      ],
      status: 'Producto con IA en evolución',
      metrics: [
        { label: 'Entrada', value: 'Terreno + briefing' },
        { label: 'Generación', value: 'Asistida por IA' },
        { label: 'Resultado', value: 'Estudio preliminar' },
      ],
      challenge:
        'Transformar datos objetivos y preferencias del usuario en alternativas de planta coherentes y comparables, manteniendo transparentes sus limitaciones.',
      architecture: [
        'La interfaz estructura los datos del terreno, parámetros y necesidades antes de enviarlos al flujo de generación.',
        'La capa de aplicación prepara el contexto para la IA y normaliza las propuestas en un modelo arquitectónico común.',
        'Validaciones geométricas independientes verifican las alternativas antes de mostrarlas al usuario.',
      ],
      decisions: [
        'Los datos ausentes se convierten en preguntas o hipótesis explícitas, nunca en valores silenciosos.',
        'La IA propone alternativas, pero las reglas y validaciones críticas permanecen verificables.',
        'El resultado se presenta como estudio preliminar, no como proyecto ejecutivo ni aprobación municipal.',
      ],
      learning:
        'La IA aporta valor cuando transforma el briefing en posibilidades concretas sin ocultar premisas, restricciones ni la necesidad de revisión profesional.',
    },
    {
      ...PORTFOLIO_DATA.projects[3],
      eyebrow: 'Fintech · finanzas compartidas',
      summary:
        'Gestión financiera personal y familiar con cuentas, movimientos, tarjetas, previsiones e informes basados en datos reales.',
      role: 'Arquitectura y desarrollo full stack',
      facts: [
        'Aislamiento financiero por núcleo familiar',
        'JWT de corta duración y refresh token rotativo',
        'Integración Open Finance controlada en el backend',
      ],
      status: 'MVP funcional',
      metrics: [
        { label: 'Modelo', value: 'Household' },
        { label: 'Datos', value: 'PostgreSQL' },
        { label: 'Integración', value: 'Open Finance' },
      ],
      challenge:
        'Representar operaciones financieras recurrentes y compartidas manteniendo autorización, consistencia de saldos y previsiones legibles.',
      architecture: [
        'El frontend Next.js consume una API ASP.NET Core tipada.',
        'La persistencia utiliza Entity Framework Core y PostgreSQL.',
        'Las integraciones sensibles permanecen detrás del backend y de verificaciones adicionales.',
      ],
      decisions: [
        'El identificador enviado por el cliente nunca es suficiente para autorizar el acceso al núcleo.',
        'Las migraciones y el despliegue son etapas explícitas de la operación.',
        'No hay mocks financieros permanentes en la experiencia del producto.',
      ],
      learning:
        'Los modelos financieros exigen reglas de dominio precisas y pruebas enfocadas en transacciones, recurrencias, facturas y proyecciones.',
    },
    {
      ...PORTFOLIO_DATA.projects[4],
      eyebrow: 'Web · presencia digital',
      summary:
        'Sitio institucional rápido y accesible para servicios de aire acondicionado y electricidad, orientado al contacto directo.',
      imageAlt: 'Sala luminosa con aire acondicionado, imagen ilustrativa del proyecto Climafer',
      role: 'Diseño y desarrollo frontend',
      facts: [
        'Contenido principal renderizado en el servidor',
        'Interactividad restringida a los flujos que la necesitan',
        'Galería accesible que preserva imágenes reales',
      ],
      status: 'Listo para publicar',
      metrics: [
        { label: 'Entrega', value: 'Institucional' },
        { label: 'Renderizado', value: 'Server-first' },
        { label: 'Contacto', value: 'WhatsApp' },
      ],
      challenge:
        'Crear una presencia digital confiable con pocos datos institucionales, sin inventar reseñas, métricas ni credenciales comerciales.',
      architecture: [
        'App Router con el contenido principal renderizado en el servidor.',
        'JavaScript del cliente limitado al menú, la galería y el contacto flotante.',
        'Los metadatos y datos estructurados acompañan la configuración del dominio.',
      ],
      decisions: [
        'Las fotos de servicio se muestran lado a lado, sin superposiciones engañosas.',
        'La aplicación no añade formularios, analítica ni cookies.',
        'La imagen del hero se identifica como ambiente ilustrativo.',
      ],
      learning:
        'Un sitio sencillo gana confianza al ser riguroso con el origen de las imágenes, el contenido publicado y la cantidad de JavaScript entregado.',
    },
  ],
  skills: [
    { name: 'Frontend', items: ['Angular', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend', items: ['Node.js', 'NestJS', 'ASP.NET Core', 'Java', 'Quarkus'] },
    { name: 'Arquitectura', items: ['DDD', 'APIs REST', 'Contratos', 'Modularidad', 'Pruebas'] },
    { name: 'Operación', items: ['Docker', 'CI/CD', 'Linux', 'NGINX', 'PostgreSQL'] },
  ],
};

export const APP_TRANSLATIONS: Record<'pt-BR' | 'en-US' | 'es-ES', AppTranslations> = {
  'pt-BR': { ui: UI_PT, content: PORTFOLIO_DATA },
  'en-US': { ui: UI_EN, content: PORTFOLIO_DATA_EN },
  'es-ES': { ui: UI_ES, content: PORTFOLIO_DATA_ES },
};
