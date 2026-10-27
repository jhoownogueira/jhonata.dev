import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { LanguageService } from '../../../core/i18n/language.service';

@Component({
  selector: 'j-theme-toggle',
  templateUrl: './j-theme-toggle.html',
  styleUrl: './j-theme-toggle.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JThemeToggle {
  protected readonly theme = inject(ThemeService);
  protected readonly language = inject(LanguageService);
}
