import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'uwmh-time-slider',
  templateUrl: './time-slider.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeSliderComponent {
  date = new Date();
  time =
    this.date.getHours() * 60 * 60 +
    this.date.getMinutes() * 60 +
    this.date.getSeconds();

  onOutValue(value: number) {
    this.time = value;
    this.date = this.setDate();
  }

  setDate(): Date {
    const date = new Date();
    date.setHours(Math.floor(this.time / 60 / 60));
    date.setMinutes(Math.floor(this.time / 60) % 60);
    date.setSeconds(this.time % 60);
    console.log(date);
    return date;
  }

  now() {
    this.date = new Date();
    this.time =
      this.date.getHours() * 60 * 60 +
      this.date.getMinutes() * 60 +
      this.date.getSeconds();
  }
}
