import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'j-theme-toggle',
  templateUrl: './j-theme-toggle.html',
  styleUrl: './j-theme-toggle.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JThemeToggle {
  protected readonly theme = inject(ThemeService);
}
