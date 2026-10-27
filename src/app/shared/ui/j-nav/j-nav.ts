import { ChangeDetectionStrategy, Component, HostListener, Input, signal } from '@angular/core';
import { NavigationItem } from '../../../core/models/portfolio.models';
import { JThemeToggle } from '../j-theme-toggle/j-theme-toggle';

@Component({
  selector: 'j-nav',
  imports: [JThemeToggle],
  templateUrl: './j-nav.html',
  styleUrl: './j-nav.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JNav {
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
