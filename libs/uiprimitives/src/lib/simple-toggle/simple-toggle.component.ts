import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'uwmh-simple-toggle',
  templateUrl: './simple-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleToggleComponent {
  @Input() text = 'Toggle text';
  @Output() toggle = new EventEmitter<boolean>();
  enabled = false;

  toggleIt() {
    this.enabled = !this.enabled;
    this.toggle.emit(this.enabled);
  }
}
