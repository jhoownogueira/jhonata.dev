import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../core/i18n/language.service';
import { Project } from '../../../core/models/portfolio.models';
import { JButton } from '../j-button/j-button';

@Component({
  selector: 'j-project-card',
  imports: [JButton, RouterLink],
  templateUrl: './j-project-card.html',
  styleUrl: './j-project-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JProjectCard {
  protected readonly language = inject(LanguageService);
  @Input({ required: true }) project!: Project;
  @Input() featured = false;
}
