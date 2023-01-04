declare global {
  interface Window {
    Threebox: any;
  }
}
window.Threebox = window.Threebox || {};

import { ElementRef, Injectable } from '@angular/core';
import { Map, LngLatBoundsLike, LngLatLike } from 'mapbox-gl';
import { MapState } from './state';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  map: Map | undefined;
  tb: any;
  style$ = this.state.style$;
  bounds$ = this.state.bounds$;
  bearing$ = this.state.bearing$;
  pitch$ = this.state.pitch$;
  zoom$ = this.state.zoom$;
  skyLayer$ = this.state.skyLayer$;
  center$ = this.state.center$;
  dateTime$ = this.state.dateTime$;

  constructor(private state: MapState) {
    // subscribe to map selectors and update map
    this.style$.subscribe((style) => {
      this.map && style ? this.map.setStyle(style) : {};
    });
    this.bounds$.subscribe((bounds) => {
      this.map && bounds ? this.map.fitBounds(bounds as LngLatBoundsLike) : {};
    });
    this.bearing$.subscribe((bearing) => {
      this.map && bearing ? this.map.setBearing(bearing) : {};
    });
    this.pitch$.subscribe((pitch) => {
      this.map && pitch ? this.map.setPitch(pitch) : {};
    });
    this.zoom$.subscribe((zoom) => {
      this.map && zoom ? this.map.setZoom(zoom) : {};
    });
    this.skyLayer$.subscribe((visible) => {
      visible ? this.addSkyLayer() : this.removeSkyLayer();
    });
    this.center$.subscribe((center) => {
      this.map && center ? this.map.setCenter(center as LngLatLike) : {};
    });
    this.dateTime$.subscribe((dateTime) => {
      this.tb ? this.tb.setSunlight(dateTime) : {};
    });
  }

  newMap(container: ElementRef): { map: Map; tb: any } {
    this.map = new Map({
      style: 'mapbox://styles/mapbox/streets-v11',
      container: container.nativeElement,
      antialias: true,
      center: [23.781372557061157, 37.988260208268386],
      bearing: 45,
      zoom: 17,
      accessToken:
        'pk.eyJ1IjoiY2hyaXN0b2RvdWxvcyIsImEiOiJja3lvdzVhb2MwNGJoMnVwN2ptd2tna2Y1In0.jiaYFXf01T5_R73Tf6T4jA',
    });

    this.tb = this.newThreeBox(this.map);

    return { map: this.map, tb: this.tb };
  }

  newThreeBox(map: Map) {
    return new window.Threebox(map, map.getCanvas().getContext('webgl'), {
      willReadFrequently: true,
      realSunlight: true,
      sky: true,
      // terrain: true,
      // enableSelectingObjects: true,
      // enableSelectingFeatures: true,
    });
  }

  add3DBuildingsLayer(map: Map, tb: any) {
    if (map.getLayer('building')) {
      map.removeLayer('building');
    }
    if (map.getSource('composite')) {
      map.addLayer(
        {
          id: '3d-buildings',
          source: 'composite',
          'source-layer': 'building',
          type: 'fill-extrusion',
          minzoom: 14,
          paint: {
            'fill-extrusion-color': '#ddd',
            'fill-extrusion-height': ['number', ['get', 'height'], 5],
            'fill-extrusion-base': ['number', ['get', 'min_height'], 0],
            'fill-extrusion-opacity': 1,
          },
        },
        'waterway-label'
      );
    }
    tb.setBuildingShadows({
      map: this.map,
      layerId: 'building-shadows',
      buildingsLayerId: '3d-buildings',
      minAltitude: 0.1,
    });
  }

  addSkyLayer() {
    this.map?.setLight({ anchor: 'map' });
    this.map?.addLayer({
      id: 'sky-layer',
      type: 'sky',
      paint: {
        'sky-opacity': [
          'interpolate',
          ['linear'],
          ['zoom'],
          0,
          0,
          5,
          0.3,
          8,
          1,
        ],
        // set up the sky layer for atmospheric scattering
        'sky-type': 'atmosphere',
        // explicitly set the position of the sun rather than allowing the sun to be attached to the main light source
        // 'sky-atmosphere-sun': this.getSunPosition(),
        // set the intensity of the sun as a light source (0-100 with higher values corresponding to brighter skies)
        'sky-atmosphere-sun-intensity': 5,
      },
    });
  }

  removeSkyLayer() {
    this.map?.removeLayer('sky-layer');
  }

  onLoad(map: Map) {
    console.log('MAP LOAD');
    this.map = map;
    // this.mapState.setBounds([
    //   [24.116494, 38.340999],
    //   [22.890434, 35.823757],
    // ]);
    this.state.setCenter([23.781372557061157, 37.988260208268386]);
    this.state.setZoom(17);
    this.state.setBearing(45);
    this.state.setPitch(85);
  }

  onStyleLoad(map: Map, tb: any) {
    console.log('MAP STYLE LOAD');
    this.add3DBuildingsLayer(map, tb);
  }
}
