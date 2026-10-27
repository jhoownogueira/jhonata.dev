import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  Input,
  signal,
} from '@angular/core';
import { NavigationItem } from '../../../core/models/portfolio.models';
import { LanguageService } from '../../../core/i18n/language.service';
import { JLanguageSelect } from '../j-language-select/j-language-select';
import { JThemeToggle } from '../j-theme-toggle/j-theme-toggle';

@Component({
  selector: 'j-nav',
  imports: [JLanguageSelect, JThemeToggle],
  templateUrl: './j-nav.html',
  styleUrl: './j-nav.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JNav {
  protected readonly language = inject(LanguageService);
  @Input({ required: true }) items: readonly NavigationItem[] = [];

  protected readonly open = signal(false);

  @HostListener('document:keydown.escape')
  protected closeOnEscape(): void {
    this.open.set(false);
  }

  protected toggle(): void {
    this.open.update((value) => !value);
  }

  protected close(): void {
    this.open.set(false);
  }
}
