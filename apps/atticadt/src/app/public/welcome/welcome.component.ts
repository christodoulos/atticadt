import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'uwmh-welcome',
  templateUrl: './welcome.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeComponent {}
