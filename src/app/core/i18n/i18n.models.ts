import { PortfolioContent } from '../models/portfolio.models';

export const SUPPORTED_LOCALES = ['pt-BR', 'en-US', 'es-ES'] as const;

export type AppLocale = (typeof SUPPORTED_LOCALES)[number];

export interface UiTranslations {
  readonly language: string;
  readonly languageName: string;
  readonly pageTitle: string;
  readonly pageDescription: string;
  readonly casePageTitle: string;
  readonly brandHome: string;
  readonly mainNavigation: string;
  readonly mobileNavigation: string;
  readonly openMenu: string;
  readonly lightTheme: string;
  readonly darkTheme: string;
  readonly activateLightTheme: string;
  readonly activateDarkTheme: string;
  readonly heroKicker: string;
  readonly heroRole: string;
  readonly heroIntro: string;
  readonly viewProjects: string;
  readonly downloadResume: string;
  readonly practiceAreas: string;
  readonly fromCodeToEnvironment: string;
  readonly interfaces: string;
  readonly apisAndServices: string;
  readonly infrastructure: string;
  readonly resumeAndPortfolio: string;
  readonly goToAbout: string;
  readonly aboutLabel: string;
  readonly aboutTitle: string;
  readonly aboutIntro: string;
  readonly aboutLead: string;
  readonly principles: readonly { readonly title: string; readonly description: string }[];
  readonly experienceLabel: string;
  readonly experienceTitle: string;
  readonly experienceIntro: string;
  readonly technologies: string;
  readonly projectsLabel: string;
  readonly projectsTitle: string;
  readonly projectsIntro: string;
  readonly skillsLabel: string;
  readonly skillsTitle: string;
  readonly skillsIntro: string;
  readonly resumeLabel: string;
  readonly resumeTitle: string;
  readonly resumeDescription: string;
  readonly contactLabel: string;
  readonly contactTitleLine1: string;
  readonly contactTitleLine2: string;
  readonly contactDescription: string;
  readonly softwareEngineering: string;
  readonly backToTop: string;
  readonly viewCase: string;
  readonly projectHighlights: string;
  readonly myRole: string;
  readonly visitSite: string;
  readonly backToProjects: string;
  readonly technicalCase: string;
  readonly visualReference: string;
  readonly visitProduct: string;
  readonly viewRepository: string;
  readonly contextLabel: string;
  readonly contextTitle: string;
  readonly architectureLabel: string;
  readonly architectureTitle: string;
  readonly decisionsLabel: string;
  readonly learningLabel: string;
  readonly architectureItemTitles: readonly string[];
  readonly decisionFallback: string;
  readonly caseFooter: string;
}

export interface AppTranslations {
  readonly ui: UiTranslations;
  readonly content: PortfolioContent;
}
