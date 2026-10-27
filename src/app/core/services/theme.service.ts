import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly currentTheme = signal<ThemeMode>('light');

  readonly theme = this.currentTheme.asReadonly();
  readonly isDark = computed(() => this.currentTheme() === 'dark');

  constructor() {
    if (!isPlatformBrowser(this.platformId)) return;

    const stored = window.localStorage.getItem('jhonata-theme') as ThemeMode | null;
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    this.set(stored ?? preferred, false);
  }

  toggle(): void {
    this.set(this.isDark() ? 'light' : 'dark');
  }

  set(theme: ThemeMode, persist = true): void {
    this.currentTheme.set(theme);
    this.document.documentElement.classList.toggle('dark-theme', theme === 'dark');
    this.document.documentElement.style.colorScheme = theme;

    if (persist && isPlatformBrowser(this.platformId)) {
      window.localStorage.setItem('jhonata-theme', theme);
    }
  }
}
