import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'uwmh-svg-icon-button',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconComponent {
  @Input() icon = '';
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

  get iconclass(): string {
    if (this.size === 'xs') return '-ml-0.5 mr-2 h-4 w-4';
    else if (this.size === 'sm') return '-ml-1 mr-2 h-5 w-5';
    else return '-ml-1 mr-3 h-5 w-5';
  }
}
