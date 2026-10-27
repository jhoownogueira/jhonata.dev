import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { LanguageService } from '../../core/i18n/language.service';
import { JAccordion } from '../../shared/ui/j-accordion/j-accordion';
import { JButton } from '../../shared/ui/j-button/j-button';
import { JLanguageSelect } from '../../shared/ui/j-language-select/j-language-select';
import { JThemeToggle } from '../../shared/ui/j-theme-toggle/j-theme-toggle';

@Component({
  selector: 'app-project-case-page',
  imports: [JAccordion, JButton, JLanguageSelect, JThemeToggle, RouterLink],
  templateUrl: './project-case.page.html',
  styleUrl: './project-case.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCasePage {
  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);
  protected readonly language = inject(LanguageService);
  protected readonly ui = this.language.ui;
  private readonly slug = toSignal(this.route.paramMap.pipe(map((params) => params.get('slug'))), {
    initialValue: '',
  });

  protected readonly project = computed(
    () =>
      this.language.content().projects.find((item) => item.slug === this.slug()) ??
      this.language.content().projects[0],
  );
  protected readonly architectureItems = computed(() =>
    this.project().architecture.map((content, index) => ({
      title:
        this.ui().architectureItemTitles[index] ?? `${this.ui().decisionFallback} ${index + 1}`,
      content,
    })),
  );

  constructor() {
    effect(() => this.title.setTitle(`${this.project().title} — ${this.ui().casePageTitle}`));
  }
}
