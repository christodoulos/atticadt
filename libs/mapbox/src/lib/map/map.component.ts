import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Map } from 'mapbox-gl';
import { MapService } from '../map.service';

@Component({
  selector: 'uwmh-map',
  templateUrl: './map.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements AfterViewInit {
  @Output() mapEvent = new EventEmitter<Map>();
  @ViewChild('map') mapDiv!: ElementRef;
  map: Map | undefined;

  constructor(private service: MapService) {}

  ngAfterViewInit(): void {
    this.map = this.newMap(this.mapDiv);
    // this.map.on('load', () => {
    //   this.service.map = this.map;
    //   this.mapEvent.emit(this.map);
    //   this.map.setLight({ anchor: 'map' });
    //   this.map.addLayer({
    //     id: 'sky-layer',
    //     type: 'sky',
    //     paint: {
    //       'sky-opacity': [
    //         'interpolate',
    //         ['linear'],
    //         ['zoom'],
    //         0,
    //         0,
    //         5,
    //         0.3,
    //         8,
    //         1,
    //       ],
    //       // set up the sky layer for atmospheric scattering
    //       'sky-type': 'atmosphere',
    //       // explicitly set the position of the sun rather than allowing the sun to be attached to the main light source
    //       // 'sky-atmosphere-sun': this.getSunPosition(),
    //       // set the intensity of the sun as a light source (0-100 with higher values corresponding to brighter skies)
    //       'sky-atmosphere-sun-intensity': 5,
    //     },
    //   });
    // });
  }

  newMap(container: ElementRef): Map {
    return new Map({
      style: 'mapbox://styles/mapbox/satellite-streets-v9',
      container: container.nativeElement,
      antialias: true,
      accessToken:
        'pk.eyJ1IjoiY2hyaXN0b2RvdWxvcyIsImEiOiJja3lvdzVhb2MwNGJoMnVwN2ptd2tna2Y1In0.jiaYFXf01T5_R73Tf6T4jA',
      // center: [23.600814, 37.840158],
      bounds: [
        [24.116494, 38.340999],
        [22.890434, 35.823757],
      ],
      bearing: 0,
      pitch: 75,
    });
  }
}
