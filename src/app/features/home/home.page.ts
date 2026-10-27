import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LanguageService } from '../../core/i18n/language.service';
import { JButton } from '../../shared/ui/j-button/j-button';
import { JNav } from '../../shared/ui/j-nav/j-nav';
import { JProjectCard } from '../../shared/ui/j-project-card/j-project-card';
import { JSectionHeading } from '../../shared/ui/j-section-heading/j-section-heading';

@Component({
  selector: 'app-home-page',
  imports: [JButton, JNav, JProjectCard, JSectionHeading],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  private readonly title = inject(Title);
  protected readonly language = inject(LanguageService);
  protected readonly content = this.language.content;
  protected readonly ui = this.language.ui;

  constructor() {
    effect(() => this.title.setTitle(this.ui().pageTitle));
  }
}
