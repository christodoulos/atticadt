import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'uwmh-range-input',
  templateUrl: './range-input.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RangeInputComponent {
  @Input() inValue = 0;
  @Input() min = 0;
  @Input() max = 100;
  @Output() outValue = new EventEmitter<number>();

  onChange() {
    this.outValue.emit(this.inValue);
  }
}
