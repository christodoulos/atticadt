import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { MapService } from '../map.service';
import { MapState } from '../state';

@Component({
  selector: 'uwmh-map',
  templateUrl: './map.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements AfterViewInit {
  @ViewChild('map') mapDiv!: ElementRef;

  constructor(private service: MapService, private state: MapState) {}

  ngAfterViewInit(): void {
    const { map, tb } = this.service.newMap(this.mapDiv);
    map.on('style.load', () => this.service.onStyleLoad(map, tb));
    map.on('load', () => this.service.onLoad(map));
  }
}
