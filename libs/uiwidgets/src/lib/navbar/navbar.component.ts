import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'uwmh-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {}
