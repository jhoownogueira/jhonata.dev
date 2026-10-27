import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { PORTFOLIO_CONTENT } from '../../core/tokens/portfolio-content.token';
import { JAccordion } from '../../shared/ui/j-accordion/j-accordion';
import { JButton } from '../../shared/ui/j-button/j-button';
import { JThemeToggle } from '../../shared/ui/j-theme-toggle/j-theme-toggle';

@Component({
  selector: 'app-project-case-page',
  imports: [JAccordion, JButton, JThemeToggle, RouterLink],
  templateUrl: './project-case.page.html',
  styleUrl: './project-case.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCasePage {
  private readonly route = inject(ActivatedRoute);
  private readonly content = inject(PORTFOLIO_CONTENT);
  private readonly slug = toSignal(this.route.paramMap.pipe(map((params) => params.get('slug'))), {
    initialValue: '',
  });

  protected readonly project = computed(
    () =>
      this.content.projects.find((item) => item.slug === this.slug()) ?? this.content.projects[0],
  );
  protected readonly architectureItems = computed(() =>
    this.project().architecture.map((content, index) => ({
      title:
        ['Limites e responsabilidades', 'Fluxo principal', 'Camada de apresentação'][index] ??
        `Decisão ${index + 1}`,
      content,
    })),
  );
}
