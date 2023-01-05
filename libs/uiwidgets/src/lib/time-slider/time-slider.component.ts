import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  Output,
} from '@angular/core';
import { MapState } from '@uwmh/mapbox';
import * as SunCalc from 'suncalc';

@Component({
  selector: 'uwmh-time-slider',
  templateUrl: './time-slider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeSliderComponent implements OnDestroy {
  @Output() newTime = new EventEmitter<Date>();
  subscription = this.state.center$.subscribe((center) => {
    this.center = center ?? [0, 0];
  });
  center = [0, 0];
  date = new Date();
  times = SunCalc.getTimes(this.date, this.center[0], this.center[1]);
  time = this.date2time();

  constructor(private state: MapState) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

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
    this.time = this.date2time();
    this.newTime.emit(this.date);
  }

  date2time() {
    return (
      this.date.getHours() * 60 * 60 +
      this.date.getMinutes() * 60 +
      this.date.getSeconds()
    );
  }

  dec() {
    this.time -= 20 * 60;
    this.date = this.setDate();
    this.newTime.emit(this.date);
  }

  inc() {
    this.time += 20 * 60;
    this.date = this.setDate();
    this.newTime.emit(this.date);
  }

  dusk() {
    this.date = this.times.dusk;
    this.time = this.date2time();
    this.newTime.emit(this.date);
  }

  noon() {
    this.date = this.times.solarNoon;
    this.time = this.date2time();
    this.newTime.emit(this.date);
  }

  dawn() {
    this.date = this.times.dawn;
    this.time = this.date2time();
    this.newTime.emit(this.date);
  }
}
