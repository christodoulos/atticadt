import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'uwmh-map-bearing',
  templateUrl: './map-bearing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapBearingComponent {
  @Input() value = 0;
  @Output() bearing = new EventEmitter<number>();

  onChange(value: number) {
    this.bearing.emit(value);
  }

  north() {
    this.value = 1;
    this.bearing.emit(this.value);
  }

  east() {
    this.value = 90;
    this.bearing.emit(this.value);
  }

  south() {
    this.value = 180;
    this.bearing.emit(this.value);
  }

  west() {
    this.value = -90;
    this.bearing.emit(this.value);
  }
}
