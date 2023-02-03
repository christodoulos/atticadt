import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MapState, MapService } from '@uwmh/mapbox';

@Component({
  selector: 'uwmh-map-dashboard',
  templateUrl: './map-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapDashboardComponent {
  map$ = this.state.map$;
  style$ = this.state.style$;
  pitch$ = this.state.pitch$;
  bearing$ = this.state.bearing$;
  zoom$ = this.state.zoom$;
  lat$ = this.state.lat$;
  lng$ = this.state.lng$;
  center$ = this.state.center$;
  terrain$ = this.state.terrain$;
  shadows$ = this.state.shadows$;
  follow$ = this.state.follow$;

  mapStyles = this.service.mapStyles();
  landmarks = this.service.atticaLandmarks();

  onMapCenterChange(center: number[]) {
    console.log('NEW center', center);
    this.state.setCenter(center);
  }

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

  onStyleChange(style: string) {
    this.state.setStyle(style);
  }

  onLandmarkChange(landmark: string) {
    const position = this.service.atticaLandmarkPosition(landmark);
    this.state.setCenter(position);
  }

  on3DTerrainStatusChange(status: boolean) {
    this.state.setTerrain(status);
  }

  onShadowsChange(status: boolean) {
    this.state.setShadows(status);
  }

  onFollowChange(status: boolean) {
    this.state.setFollow(status);
  }

  constructor(private state: MapState, private service: MapService) {}
}
