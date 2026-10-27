import { PortfolioContent } from '../core/models/portfolio.models';

export const PORTFOLIO_DATA: PortfolioContent = {
  navigation: [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Competências', href: '#competencias' },
    { label: 'Contato', href: '#contato' },
  ],
  experiences: [
    {
      period: '2026 — agora',
      role: 'Engenheiro de Software',
      company: 'Ivetech',
      summary:
        'Desenvolvimento full stack de aplicações web e serviços escaláveis, conectando interfaces, APIs, integrações e operação.',
      technologies: ['Angular', 'React', 'Node.js', 'Java', 'ASP.NET Core', 'Docker'],
    },
    {
      period: '2025 — agora',
      role: 'SaaS Architecture & Development',
      company: 'DenteFlow',
      summary:
        'Arquitetura e evolução end-to-end de uma plataforma de gestão e relacionamento para clínicas odontológicas.',
      technologies: ['Next.js', 'TypeScript', 'Quarkus', 'PostgreSQL', 'CI/CD'],
    },
    {
      period: '2021 — 2026',
      role: 'Desenvolvedor',
      company: 'Flash Net Brasil',
      summary:
        'Transição de marketing para engenharia, com atuação no desenvolvimento de produtos e experiências digitais.',
      technologies: ['Frontend', 'Backend', 'Produto', 'UX'],
    },
  ],
  projects: [
    {
      slug: 'oasfuse',
      eyebrow: 'OpenAPI diff · release safety',
      title: 'OASFuse',
      summary:
        'Motor determinístico e stateless para comparar contratos OpenAPI antes que mudanças incompatíveis cheguem aos consumidores.',
      image: 'assets/projects/oasfuse-home.png',
      imageAlt: 'Interface escura do OASFuse mostrando uma comparação de contratos OpenAPI',
      role: 'Arquitetura e desenvolvimento end-to-end',
      stack: ['Next.js', 'TypeScript', 'Java 21', 'Quarkus', 'Docker'],
      facts: [
        'OpenAPI 3.0 e 3.1 em YAML ou JSON',
        'Mesma engine no navegador, API e CLI',
        'Achados classificados para release gates e revisão humana',
      ],
      siteUrl: 'https://oasfuse.jhonata.dev',
      repositoryUrl: 'https://github.com/jhoownogueira/OASFuse',
      metrics: [
        { label: 'Entradas', value: 'YAML / JSON' },
        { label: 'Execução', value: 'Web · API · CLI' },
        { label: 'Modelo', value: 'Stateless' },
      ],
      challenge:
        'Comparar contratos sem transformar diferenças sintáticas em ruído e sem depender de persistência ou referências externas.',
      architecture: [
        'Core Java compartilhado concentra as regras determinísticas de comparação.',
        'API Quarkus expõe o motor por HTTP e o CLI empacota a mesma lógica para automação offline.',
        'Aplicação Next.js mantém chamadas same-origin e atua como camada de apresentação e BFF.',
      ],
      decisions: [
        'Saída reproduzível para o mesmo par de especificações.',
        'Limites explícitos de tamanho, profundidade e resolução de referências locais.',
        'Separação entre breaking, review e informational para políticas de CI diferentes.',
      ],
      learning:
        'Ferramentas de contrato ficam mais úteis quando explicam a mudança com contexto e preservam o mesmo comportamento entre uso humano e automação.',
    },
    {
      slug: 'denteflow',
      eyebrow: 'SaaS · gestão odontológica',
      title: 'DenteFlow',
      summary:
        'Plataforma operacional para clínicas, reunindo agenda, pacientes, prontuário, relacionamento e gestão financeira.',
      image: 'assets/projects/denteflow-login.png',
      imageAlt: 'Ambiente de clínica odontológica usado na experiência de entrada do DenteFlow',
      role: 'Arquitetura SaaS e desenvolvimento full stack',
      stack: ['Next.js', 'React', 'Quarkus', 'PostgreSQL', 'Docker'],
      facts: [
        'Aplicação e portal operados em um monorepo',
        'Backends independentes com serviços Quarkus',
        'Deploy seletivo por componente e imagens versionadas',
      ],
      status: 'Produto em evolução',
      metrics: [
        { label: 'Domínio', value: 'Clínicas' },
        { label: 'Arquitetura', value: 'Monorepo' },
        { label: 'Operação', value: 'Docker · CI/CD' },
      ],
      challenge:
        'Organizar um domínio operacional amplo sem perder clareza entre a experiência da clínica, o portal e os serviços responsáveis por cada fluxo.',
      architecture: [
        'Aplicação principal e portal possuem frontends e backends independentes.',
        'Serviços Java/Quarkus acessam PostgreSQL e mantêm limites operacionais separados.',
        'Pipelines detectam os componentes alterados e preparam deploys seletivos.',
      ],
      decisions: [
        'Separação por produto executável, mantendo coordenação no monorepo.',
        'Segredos e chaves permanecem fora do código e dos artefatos públicos.',
        'Operação e rollback tratados como parte da arquitetura do produto.',
      ],
      learning:
        'Em SaaS operacional, a qualidade do produto depende tanto dos fluxos de domínio quanto de limites claros de deploy, configuração e segurança.',
    },
    {
      slug: 'geomora',
      eyebrow: 'AEC tech · geração paramétrica',
      title: 'Geomora',
      summary:
        'Estudos preliminares de planta a partir de parâmetros urbanísticos, terreno e programa residencial.',
      image: 'assets/projects/geomora.jpg',
      imageAlt: 'Vista aérea urbana que representa o contexto de planejamento do Geomora',
      role: 'Produto, arquitetura e engenharia full stack',
      stack: ['Angular', 'PrimeNG', '.NET 10', 'PostgreSQL', 'NetTopologySuite'],
      facts: [
        'Parâmetros urbanísticos tipados e versionados',
        'Modelo geométrico canônico com validação independente',
        'Resultado tratado explicitamente como estudo preliminar',
      ],
      status: 'Pesquisa aplicada em evolução',
      metrics: [
        { label: 'Frontend', value: 'Angular' },
        { label: 'Backend', value: '.NET' },
        { label: 'Saída', value: 'Estudo preliminar' },
      ],
      challenge:
        'Transformar parâmetros urbanos e um briefing residencial em alternativas comparáveis, mantendo hipóteses, unidades e limites visíveis.',
      architecture: [
        'Backend em camadas separa domínio, aplicação, infraestrutura e API.',
        'Cenários preservam snapshots dos parâmetros usados na geração.',
        'Frontend encapsula PrimeNG em um design system próprio.',
      ],
      decisions: [
        'Parâmetros ausentes viram hipóteses explícitas em vez de valores silenciosos.',
        'Validador geométrico independente rejeita alternativas inconsistentes.',
        'O gerador não é apresentado como projeto executivo ou aprovação municipal.',
      ],
      learning:
        'Em software técnico, rastreabilidade e limites bem comunicados são tão importantes quanto o algoritmo que produz a saída.',
    },
    {
      slug: 'kiarafin',
      eyebrow: 'Fintech · finanças compartilhadas',
      title: 'KiaraFin',
      summary:
        'Gestão financeira pessoal e familiar com contas, lançamentos, cartões, previsões e relatórios sobre dados reais.',
      image: 'assets/projects/kiarafin-logo.png',
      imageAlt: 'Identidade visual do KiaraFin em fundo verde',
      role: 'Arquitetura e desenvolvimento full stack',
      stack: ['Next.js', 'React', 'ASP.NET Core', 'PostgreSQL', 'Open Finance'],
      facts: [
        'Isolamento financeiro por núcleo familiar',
        'JWT curto e refresh token rotativo',
        'Integração Open Finance controlada no backend',
      ],
      status: 'MVP funcional',
      metrics: [
        { label: 'Modelo', value: 'Household' },
        { label: 'Dados', value: 'PostgreSQL' },
        { label: 'Integração', value: 'Open Finance' },
      ],
      challenge:
        'Representar operações financeiras recorrentes e compartilhadas mantendo autorização, consistência de saldos e previsões legíveis.',
      architecture: [
        'Frontend Next.js consome uma API ASP.NET Core tipada.',
        'Persistência usa Entity Framework Core e PostgreSQL.',
        'Integrações sensíveis permanecem atrás do backend e de verificações adicionais.',
      ],
      decisions: [
        'O identificador enviado pelo cliente nunca basta para autorizar acesso ao núcleo.',
        'Migrations e deploy são etapas explícitas da operação.',
        'Sem mocks financeiros permanentes na experiência do produto.',
      ],
      learning:
        'Modelos financeiros pedem regras de domínio precisas e testes voltados a transações, recorrências, faturas e projeções.',
    },
    {
      slug: 'climafer',
      eyebrow: 'Web · presença digital',
      title: 'Climafer',
      summary:
        'Site institucional rápido e acessível para serviços de ar-condicionado e elétrica, orientado a contato direto.',
      image: 'assets/projects/climafer.webp',
      imageAlt: 'Sala clara com ar-condicionado, imagem ilustrativa do projeto Climafer',
      role: 'Design e desenvolvimento frontend',
      stack: ['Next.js 16', 'React 19', 'TypeScript', 'CSS', 'SEO'],
      facts: [
        'Conteúdo principal renderizado no servidor',
        'Interatividade restrita aos fluxos que precisam dela',
        'Galeria acessível com imagens reais preservadas',
      ],
      status: 'Pronto para publicação',
      metrics: [
        { label: 'Entrega', value: 'Institucional' },
        { label: 'Render', value: 'Server-first' },
        { label: 'Contato', value: 'WhatsApp' },
      ],
      challenge:
        'Criar presença digital confiável com poucos dados institucionais, sem inventar avaliações, métricas ou credenciais comerciais.',
      architecture: [
        'App Router com conteúdo principal renderizado no servidor.',
        'JavaScript de cliente limitado a menu, galeria e contato flutuante.',
        'Metadados e dados estruturados acompanham a configuração do domínio.',
      ],
      decisions: [
        'Fotos de serviço são exibidas lado a lado, sem sobreposição enganosa.',
        'Não há formulário, analytics ou cookies adicionados pela aplicação.',
        'A imagem do hero é identificada como ambiente ilustrativo.',
      ],
      learning:
        'Um site simples ganha confiança ao ser rigoroso com a origem das imagens, o conteúdo publicado e a quantidade de JavaScript entregue.',
    },
  ],
  skills: [
    { name: 'Frontend', items: ['Angular', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend', items: ['Node.js', 'NestJS', 'ASP.NET Core', 'Java', 'Quarkus'] },
    { name: 'Arquitetura', items: ['DDD', 'APIs REST', 'Contratos', 'Modularidade', 'Testes'] },
    { name: 'Operação', items: ['Docker', 'CI/CD', 'Linux', 'NGINX', 'PostgreSQL'] },
  ],
};
