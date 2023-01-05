import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MapState } from '@uwmh/mapbox';

@Component({
  selector: 'uwmh-map-dashboard',
  templateUrl: './map-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapDashboardComponent {
  pitch$ = this.state.pitch$;
  bearing$ = this.state.bearing$;
  zoom$ = this.state.zoom$;
  lat$ = this.state.lat$;
  lng$ = this.state.lng$;

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

  onDateTimeChange(dateTime: Date) {
    this.state.setDateTime(dateTime);
  }

  onLatChange(lat: number) {
    this.state.setLat(lat);
  }

  onLngChange(lng: number) {
    this.state.setLng(lng);
  }

  onOutValue(value: number) {
    console.log(value);
  }
}
