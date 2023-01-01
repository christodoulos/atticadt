import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'uwmh-integer-input',
  templateUrl: './integer-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntegerInputComponent {
  @Input() text = 'Integer Input';
  @Input() value = 0;
  @Input() min = 0;
  @Input() max = 100;
  @Output() valueOut = new EventEmitter<number>();

  onChange(value: number) {
    this.valueOut.emit(value);
  }
}
