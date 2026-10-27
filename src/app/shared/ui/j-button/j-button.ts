import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RippleModule } from 'primeng/ripple';

export type JButtonVariant = 'primary' | 'secondary' | 'ghost' | 'text';

@Component({
  selector: 'j-button',
  imports: [RouterLink, RippleModule],
  templateUrl: './j-button.html',
  styleUrl: './j-button.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JButton {
  @Input({ required: true }) label = '';
  @Input() href?: string;
  @Input() icon?: string;
  @Input() variant: JButtonVariant = 'primary';
  @Input() target: '_self' | '_blank' = '_self';
  @Input() disabled = false;
  @Input() download?: string;
  @Input() ariaLabel?: string;

  @Output() readonly pressed = new EventEmitter<void>();

  protected get isInternalRoute(): boolean {
    return Boolean(this.href?.startsWith('/') && !this.href?.startsWith('//'));
  }
}
