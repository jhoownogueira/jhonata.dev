import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PORTFOLIO_CONTENT } from '../../core/tokens/portfolio-content.token';
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
  protected readonly content = inject(PORTFOLIO_CONTENT);
}
