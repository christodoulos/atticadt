import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'uwmh-map-center',
  templateUrl: './map-center.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapCenterComponent {
  @Input() lng = 0;
  @Input() lat = 0;
  @Input() delta = 0.01;
  @Output() center = new EventEmitter<number[]>();

  onLngChange(value: number) {
    this.center.emit([value, this.lat]);
  }

  onLatChange(value: number) {
    this.center.emit([this.lng, value]);
  }
}
