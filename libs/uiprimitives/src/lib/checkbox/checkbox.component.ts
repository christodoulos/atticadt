import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'uwmh-checkbox',
  templateUrl: './checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  @Input() text = 'Text';
  @Input() checked = false;
  @Output() status = new EventEmitter<boolean>();

  onChange(status: boolean) {
    this.status.emit(status);
  }
}
