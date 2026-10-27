import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { AppLocale } from '../../../core/i18n/i18n.models';
import { LanguageService } from '../../../core/i18n/language.service';
import { APP_TRANSLATIONS } from '../../../data/translations.data';

@Component({
  selector: 'j-language-select',
  templateUrl: './j-language-select.html',
  styleUrl: './j-language-select.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JLanguageSelect {
  private readonly element = inject(ElementRef<HTMLElement>);
  protected readonly language = inject(LanguageService);
  protected readonly open = signal(false);

  @HostListener('document:click', ['$event'])
  protected closeOnOutsideClick(event: MouseEvent): void {
    if (!this.element.nativeElement.contains(event.target as Node)) {
      this.open.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  protected closeOnEscape(): void {
    this.open.set(false);
  }

  protected languageName(locale: AppLocale): string {
    return APP_TRANSLATIONS[locale].ui.languageName;
  }

  protected toggle(): void {
    this.open.update((value) => !value);
  }

  protected selectLocale(locale: AppLocale): void {
    this.language.setLocale(locale);
    this.open.set(false);
  }
}
