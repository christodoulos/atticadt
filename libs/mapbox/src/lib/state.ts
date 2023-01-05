import { Injectable } from '@angular/core';
import { createStore, withProps, select } from '@ngneat/elf';
import { map } from 'rxjs';

export interface DTMap {
  style?: string;
  bounds?: number[][];
  bearing?: number;
  pitch?: number;
  zoom?: number;
  center?: number[];
  lat?: number;
  lng?: number;
  antialias?: boolean;
  skyLayer?: boolean;
  accessToken?: string;
  dateTime?: Date;
}

const DTMapInit: DTMap = {
  style: 'mapbox://styles/mapbox/satellite-streets-v9',
};

const mapState = createStore({ name: 'map' }, withProps<DTMap>(DTMapInit));

@Injectable()
export class MapState {
  style$ = mapState.pipe(select((state) => state.style));
  bounds$ = mapState.pipe(select((state) => state.bounds));
  bearing$ = mapState.pipe(select((state) => state.bearing));
  pitch$ = mapState.pipe(select((state) => state.pitch));
  zoom$ = mapState.pipe(select((state) => state.zoom));
  skyLayer$ = mapState.pipe(select((state) => state.skyLayer));
  center$ = mapState.pipe(select((state) => state.center));
  lat$ = mapState.pipe(select((state) => state.lat));
  lng$ = mapState.pipe(select((state) => state.lng));
  dateTime$ = mapState.pipe(select((state) => state.dateTime));

  setStyle(style: string) {
    mapState.update((state) => ({ ...state, style }));
  }

  setBounds(bounds: number[][]) {
    mapState.update((state) => ({ ...state, bounds }));
  }

  setBearing(bearing: number) {
    mapState.update((state) => ({ ...state, bearing }));
  }

  setPitch(pitch: number) {
    mapState.update((state) => ({ ...state, pitch }));
  }

  setZoom(zoom: number) {
    mapState.update((state) => ({ ...state, zoom }));
  }

  setSkyLayer(visible: boolean) {
    mapState.update((state) => ({ ...state, skyLayer: visible }));
  }

  toggleSkyLayer() {
    this.skyLayer$
      .pipe(map((visible) => this.setSkyLayer(!!visible)))
      .subscribe();
  }

  setCenter(center: number[]) {
    const lng = center[0];
    const lat = center[1];
    mapState.update((state) => ({ ...state, center, lng, lat }));
  }

  setLat(lat: number) {
    const center = mapState.state.center ?? [0, 0];
    mapState.update((state) => ({ ...state, lat, center: [center[0], lat] }));
  }

  setLng(lng: number) {
    const center = mapState.state.center ?? [0, 0];
    mapState.update((state) => ({ ...state, lng, center: [lng, center[1]] }));
  }

  setDateTime(dateTime: Date) {
    mapState.update((state) => ({ ...state, dateTime }));
  }
}
