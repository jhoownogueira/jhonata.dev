import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
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
  @Input({ required: true }) project!: Project;
  @Input() featured = false;
}
