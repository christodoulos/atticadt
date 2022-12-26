import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'uwmh-button-primary',
  templateUrl: './button-primary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonPrimaryComponent {
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() text = 'Button text';
}
