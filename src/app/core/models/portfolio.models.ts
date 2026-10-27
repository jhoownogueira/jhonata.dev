export type LinkTarget = '_self' | '_blank';

export interface NavigationItem {
  readonly label: string;
  readonly href: string;
}

export interface ActionLink {
  readonly label: string;
  readonly href: string;
  readonly target?: LinkTarget;
  readonly icon?: string;
}

export interface Experience {
  readonly period: string;
  readonly role: string;
  readonly company: string;
  readonly summary: string;
  readonly technologies: readonly string[];
}

export interface ProjectMetric {
  readonly label: string;
  readonly value: string;
}

export interface Project {
  readonly slug: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly summary: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly role: string;
  readonly stack: readonly string[];
  readonly facts: readonly string[];
  readonly status?: string;
  readonly siteUrl?: string;
  readonly repositoryUrl?: string;
  readonly metrics: readonly ProjectMetric[];
  readonly challenge: string;
  readonly architecture: readonly string[];
  readonly decisions: readonly string[];
  readonly learning: string;
}

export interface SkillGroup {
  readonly name: string;
  readonly items: readonly string[];
}

export interface PortfolioContent {
  readonly navigation: readonly NavigationItem[];
  readonly experiences: readonly Experience[];
  readonly projects: readonly Project[];
  readonly skills: readonly SkillGroup[];
}
