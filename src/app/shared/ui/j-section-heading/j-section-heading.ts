import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'j-section-heading',
  templateUrl: './j-section-heading.html',
  styleUrl: './j-section-heading.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JSectionHeading {
  @Input({ required: true }) index = '';
  @Input({ required: true }) label = '';
  @Input({ required: true }) title = '';
  @Input() intro?: string;
}
