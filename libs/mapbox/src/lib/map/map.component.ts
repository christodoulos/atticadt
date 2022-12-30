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
    const map = this.service.newMap(this.mapDiv);
    map.on('load', () => {
      this.service.map = map;
      // this.mapState.setBounds([
      //   [24.116494, 38.340999],
      //   [22.890434, 35.823757],
      // ]);
      this.state.setCenter([23.781372557061157, 37.988260208268386]);
      this.state.setZoom(17);
      this.state.setBearing(45);
      this.state.setPitch(85);
    });
  }
}
