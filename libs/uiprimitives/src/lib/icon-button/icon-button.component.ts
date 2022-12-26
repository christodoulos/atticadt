import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'uwmh-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButtonComponent {
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() icon = 'login';
  @Input() text = 'Button text';
}
