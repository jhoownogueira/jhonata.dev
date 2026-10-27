import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { computed, effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { APP_TRANSLATIONS } from '../../data/translations.data';
import { AppLocale, SUPPORTED_LOCALES } from './i18n.models';

const STORAGE_KEY = 'jhonata.dev.locale';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly browser = isPlatformBrowser(this.platformId);
  private readonly selectedLocale = signal<AppLocale>(this.detectLocale());

  readonly locale = this.selectedLocale.asReadonly();
  readonly translations = computed(() => APP_TRANSLATIONS[this.locale()]);
  readonly ui = computed(() => this.translations().ui);
  readonly content = computed(() => this.translations().content);
  readonly locales = SUPPORTED_LOCALES;

  constructor() {
    effect(() => {
      const locale = this.locale();
      const ui = this.ui();

      this.document.documentElement.lang = locale;
      this.title.setTitle(ui.pageTitle);
      this.meta.updateTag({ name: 'description', content: ui.pageDescription });
    });
  }

  setLocale(locale: AppLocale): void {
    this.selectedLocale.set(locale);

    if (this.browser) {
      localStorage.setItem(STORAGE_KEY, locale);
    }
  }

  isSupportedLocale(value: string): value is AppLocale {
    return SUPPORTED_LOCALES.includes(value as AppLocale);
  }

  private detectLocale(): AppLocale {
    if (!this.browser) {
      return 'pt-BR';
    }

    const savedLocale = localStorage.getItem(STORAGE_KEY);
    if (savedLocale && this.isSupportedLocale(savedLocale)) {
      return savedLocale;
    }

    for (const language of navigator.languages.length
      ? navigator.languages
      : [navigator.language]) {
      const normalized = language.toLowerCase();

      if (normalized.startsWith('pt')) return 'pt-BR';
      if (normalized.startsWith('es')) return 'es-ES';
      if (normalized.startsWith('en')) return 'en-US';
    }

    return 'pt-BR';
  }
}
