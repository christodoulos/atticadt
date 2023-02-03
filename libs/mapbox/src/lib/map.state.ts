import { Injectable } from '@angular/core';
import { createStore, withProps, select } from '@ngneat/elf';
import { map } from 'rxjs';
import * as _ from 'lodash-es';

export interface MapWhere {
  point: { x: number; y: number };
  lngLat: { lng: number; lat: number };
  properties?: {
    category_en?: string;
    class?: string;
    maki?: string;
    name?: string;
    name_local?: string;
    name_script?: string;
    type?: string;
    iso_3166_1?: string;
    filterrank?: number;
    sizerank?: number;
  };
}

export interface DTMap {
  style: string;
  bounds: number[][];
  bearing: number;
  pitch: number;
  zoom: number;
  center: number[];
  lat: number;
  lng: number;
  follow: boolean;
  where: MapWhere;
  antialias: boolean;
  skyLayer: boolean;
  terrain: boolean;
  shadows: boolean;
  dateTime: Date;
}

const DTMapInit: DTMap = {
  style: 'mapbox://styles/mapbox/streets-v12',
  bounds: [
    [24.116494, 38.340999],
    [22.890434, 35.823757],
  ],
  bearing: 0,
  pitch: 0,
  zoom: 7.155732338703034,
  center: [23.503464000000008, 37.092829235162526],
  lat: 37.092829235162526,
  lng: 23.503464000000008,
  follow: false,
  where: {
    point: { x: 23.503464000000008, y: 37.092829235162526 },
    lngLat: { lng: 23.503464000000008, lat: 37.092829235162526 },
  },
  antialias: true,
  skyLayer: true,
  terrain: true,
  shadows: false,
  dateTime: new Date(),
};

const mapState = createStore({ name: 'map' }, withProps<DTMap>(DTMapInit));

@Injectable()
export class MapState {
  map$ = mapState.pipe(select((state) => JSON.stringify(state)));
  style$ = mapState.pipe(select((state) => state.style));
  bounds$ = mapState.pipe(select((state) => state.bounds));
  bearing$ = mapState.pipe(select((state) => state.bearing));
  pitch$ = mapState.pipe(select((state) => state.pitch));
  zoom$ = mapState.pipe(select((state) => state.zoom));
  skyLayer$ = mapState.pipe(select((state) => state.skyLayer));
  terrain$ = mapState.pipe(select((state) => state.terrain));
  shadows$ = mapState.pipe(select((state) => state.shadows));
  center$ = mapState.pipe(select((state) => state.center));
  lat$ = mapState.pipe(select((state) => state.lat));
  lng$ = mapState.pipe(select((state) => state.lng));
  where$ = mapState.pipe(select((state) => state.where));
  follow$ = mapState.pipe(select((state) => state.follow));
  dateTime$ = mapState.pipe(select((state) => state.dateTime));

  update(attrs: Partial<DTMap>) {
    console.log('Map State Update', attrs);
    const center = attrs['center'];
    if (center) {
      const lng = center[0];
      const lat = center[1];
      mapState.update((state) => ({ ...state, ...attrs, lng, lat }));
    } else {
      mapState.update((state) => ({ ...state, ...attrs }));
    }
  }

  setStyle(style: string) {
    console.log('setStyle');
    mapState.update((state) => ({ ...state, style }));
  }

  setBounds(bounds: number[][]) {
    console.log('setBounds');
    mapState.update((state) => ({ ...state, bounds }));
  }

  setBearing(bearing: number) {
    console.log('setBearing');
    mapState.update((state) => ({ ...state, bearing }));
  }

  setPitch(pitch: number) {
    console.log('setPitch');
    mapState.update((state) => ({ ...state, pitch }));
  }

  setZoom(zoom: number) {
    console.log('setZoom');
    mapState.update((state) => ({ ...state, zoom }));
  }

  setSkyLayer(visible: boolean) {
    console.log('setSkyLayer');
    mapState.update((state) => ({ ...state, skyLayer: visible }));
  }

  setTerrain(visible: boolean) {
    console.log('setTerrain');
    const change = visible
      ? { terrain: true, shadows: false }
      : { terrain: false };
    mapState.update((state) => ({ ...state, ...change }));
  }

  setShadows(visible: boolean) {
    console.log('setShadows');
    const change = visible
      ? { terrain: false, shadows: true }
      : { shadows: false };
    mapState.update((state) => ({ ...state, ...change }));
  }

  toggleSkyLayer() {
    console.log('toggleSkyLayer');
    this.skyLayer$
      .pipe(map((visible) => this.setSkyLayer(!!visible)))
      .subscribe();
  }

  setCenter(center: number[]) {
    console.log('setCenter', center);
    const lng = center[0];
    const lat = center[1];
    mapState.update((state) => ({ ...state, center, lng, lat }));
  }

  setLat(lat: number) {
    console.log('setLat');
    const center = mapState.state.center;
    console.log(center);
    mapState.update((state) => ({ ...state, lat, center: [center[0], lat] }));
  }

  setLng(lng: number) {
    console.log('setLng');
    const center = mapState.state.center;
    console.log(center);
    mapState.update((state) => ({ ...state, lng, center: [lng, center[1]] }));
  }

  setFollow(status: boolean) {
    mapState.update((state) => ({ ...state, follow: status }));
  }

  setWhere(where: MapWhere) {
    mapState.update((state) => ({ ...state, where }));
  }

  setDateTime(dateTime: Date) {
    console.log('setDateTime');
    mapState.update((state) => ({ ...state, dateTime }));
  }
}
