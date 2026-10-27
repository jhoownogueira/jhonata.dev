import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface JAccordionItem {
  readonly title: string;
  readonly content: string;
}

@Component({
  selector: 'j-accordion',
  templateUrl: './j-accordion.html',
  styleUrl: './j-accordion.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JAccordion {
  @Input({ required: true }) items: readonly JAccordionItem[] = [];
}
