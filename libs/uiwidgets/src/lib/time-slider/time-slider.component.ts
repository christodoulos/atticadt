import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'uwmh-time-slider',
  templateUrl: './time-slider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeSliderComponent {
  @Output() newTime = new EventEmitter<Date>();
  date = new Date();
  time =
    this.date.getHours() * 60 * 60 +
    this.date.getMinutes() * 60 +
    this.date.getSeconds();

  onOutValue(value: number) {
    this.time = value;
    this.date = this.setDate();
    this.newTime.emit(this.date);
  }

  setDate(): Date {
    const date = new Date();
    date.setHours(Math.floor(this.time / 60 / 60));
    date.setMinutes(Math.floor(this.time / 60) % 60);
    date.setSeconds(this.time % 60);
    return date;
  }

  now() {
    this.date = new Date();
    this.newTime.emit(this.date);
    this.time =
      this.date.getHours() * 60 * 60 +
      this.date.getMinutes() * 60 +
      this.date.getSeconds();
  }
}
