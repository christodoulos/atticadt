import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MapState } from '@uwmh/mapbox';

@Component({
  selector: 'uwmh-map-dashboard',
  templateUrl: './map-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapDashboardComponent {
  constructor(private state: MapState) {}

  onSkyLayerToggle(visible: boolean) {
    this.state.setSkyLayer(visible);
  }

  onPitchChange(pitch: number) {
    this.state.setPitch(pitch);
  }

  onBearingChange(bearing: number) {
    this.state.setBearing(bearing);
  }

  onZoomChange(zoom: number) {
    this.state.setZoom(zoom);
  }

  onOutValue(value: number) {
    console.log(value);
  }
}
