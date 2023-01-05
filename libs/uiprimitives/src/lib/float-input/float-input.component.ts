import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'uwmh-float-input',
  templateUrl: './float-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatInputComponent {
  @Input() text = 'Float Input';
  @Input() value = 0.0;
  @Input() delta = 0.0001;
  @Output() valueOut = new EventEmitter<number>();

  onChange(value: number) {
    this.valueOut.emit(value);
  }
}
