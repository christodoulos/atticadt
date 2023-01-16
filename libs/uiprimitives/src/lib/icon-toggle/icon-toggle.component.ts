import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'uwmh-icon-toggle',
  templateUrl: './icon-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconToggleComponent {
  @Input() toggle = false;
  @Output() status = new EventEmitter<boolean>();

  onClick() {
    this.toggle = !this.toggle;
    this.status.emit(this.toggle);
  }
}
