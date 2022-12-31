import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'uwmh-simple-navbar',
  templateUrl: './simple-navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleNavbarComponent {
  @Input() brand = 'Brand';
  @Input() options: string[] = ['Option1', 'Option2', 'Option3'];
}
