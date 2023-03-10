declare global {
  interface Window {
    tb: any;
  }
}
window.tb = window.tb || {};

declare let Threebox: any;

import { ElementRef, Injectable } from '@angular/core';
import { Map, LngLatBoundsLike, LngLatLike, MapMouseEvent } from 'mapbox-gl';
import { MapState } from './map.state';

import { centroid } from '@turf/turf';
import { debounce } from 'lodash-es';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  map!: Map;
  tb: any;
  style$ = this.state.style$;
  bounds$ = this.state.bounds$;
  bearing$ = this.state.bearing$;
  pitch$ = this.state.pitch$;
  zoom$ = this.state.zoom$;
  skyLayer$ = this.state.skyLayer$;
  center$ = this.state.center$;
  dateTime$ = this.state.dateTime$;
  follow$ = this.state.follow$;
  terrain$ = this.state.terrain$;
  shadows$ = this.state.shadows$;

  followMouse = debounce((e) => this.onMouseMove(e, this.map), 100);

  newMap(container: ElementRef): { map: Map; tb: any } {
    console.log('newMap');
    this.map = new Map({
      style: 'mapbox://styles/mapbox/streets-v12',
      container: container.nativeElement,
      antialias: true,
      // hash: true,
      attributionControl: false,
      preserveDrawingBuffer: true,
      bearingSnap: 0,
      accessToken:
        'pk.eyJ1IjoiY2hyaXN0b2RvdWxvcyIsImEiOiJja3luYTd3eW0ydGFiMm9xcHRmMGJyOHVrIn0.c1mSurunkjU4Wyf2hxcy0g',
    });

    window.tb = this.newThreeBox(this.map);
    this.tb = window.tb;

    return { map: this.map, tb: this.tb };
  }

  newThreeBox(map: Map) {
    console.log('newTreebox');
    return new Threebox(map, map.getCanvas().getContext('webgl'), {
      willReadFrequently: true,
      realSunlight: true,
      sky: true,
      terrain: true,
      enableSelectingObjects: true,
      enableSelectingFeatures: true,
    });
  }

  add3DBuildingsLayer(map: Map) {
    console.log('add3DBuildingsLayer');
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
          minzoom: 9,
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

  //f addGLBLayer() {
  //   console.log('addGLBLayer');
  //   // 23.781372557061157, 37.988260208268386

  //   const te = this.map.queryTerrainElevation([23.73664159, 37.87891007], {
  //     exaggerated: false,
  //   });
  //   console.log('TERRAIN ELEVATION ', te);
  //   this.map.addLayer({
  //     id: 'custom_layer',
  //     type: 'custom',
  //     renderingMode: '3d',
  //     // onAdd: function (map, mbxContext) {
  //     onAdd: (map, mbxContext) => {
  //       const options = {
  //         obj: '/assets/flood.glb',
  //         type: 'gltf',
  //         scale: 1,
  //         units: 'meters',
  //         rotation: { x: 90.0, y: 180.0, z: 0 },
  //         anchor: 'center',
  //       };
  //       this.tb.loadObj(options, (model: any) => {
  //         model.setCoords([23.73664159, 37.87891007]);
  //         model.color = 0x0000ff;
  //         model.addTooltip('Flood example', true);
  //         this.tb.add(model);
  //         // model.castShadow = true;
  //         this.tb.lights.dirLight.target = model;
  //       });
  //     },

  //     // render: function (gl, matrix) {
  //     render: (gl, matrix) => {
  //       // window.tb.update();
  //       this.tb.update();
  //     },
  //   });

  // addGLBLayer(map: Map, tb: any) {
  addGLBLayer(
    where: LngLatLike,
    elevated: boolean,
    modelFile: string,
    modelCastShadow: boolean = true,
    modelToolTip: string = ''
  ) {
    let elevation = 0;
    if (elevated)
      elevation =
        this.map.queryTerrainElevation(where, { exaggerated: true }) ?? 0;
    console.log('GLB LAYER TERRAIN ELEVATION ', elevation);

    this.map.addLayer({
      id: 'custom_layer',
      type: 'custom',
      renderingMode: '3d',
      onAdd: () => {
        const options = {
          obj: modelFile,
          type: 'gltf',
          scale: 1,
          units: 'meters',
          rotation: { x: 0.0, y: 0.0, z: 180.0 },
          anchor: 'top-right',
        };
        this.tb.loadObj(options, (model: any) => {
          const pos = elevated ? [...(where as number[]), elevation] : where;
          model.setCoords(pos);
          model.color = 0x0000ff;
          if (modelToolTip) model.addTooltip(modelToolTip, true);
          this.tb.add(model);
          model.castShadow = modelCastShadow;
          this.tb.lights.dirLight.target = model;
        });
      },

      render: () => {
        this.tb.update();
      },
    });
  }

  onLoad(map: Map) {
    console.log('MAP LOAD');
    this.map = map;
    this.state.setBounds([
      [24.116494, 38.340999],
      [22.890434, 35.823757],
    ]);
    this.addGLBLayer([23.74510255, 37.88579824], false, '/assets/test.glb');
    this.map.flyTo({
      center: [23.73508263685423, 37.87729612062206],
      zoom: 15.26,
      bearing: 46.8,
      pitch: 75.5,
    });
  }

  onStyleLoad(map: Map) {
    console.log('MAP STYLE LOAD');

    this.add3DBuildingsLayer(map);
  }

  getMapBounds(): number[][] {
    const bounds = this.map.getBounds();
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
    return [
      [ne.lng, ne.lat],
      [sw.lng, ne.lat],
    ];
  }

  getMapCenter(): number[] {
    const center = this.map.getCenter();
    const lng = center.lng;
    const lat = center.lat;
    return [lng, lat];
  }

  getMapZoom(): number {
    const zoom = this.map.getZoom();
    return Math.round((zoom + Number.EPSILON) * 100) / 100;
  }

  getMapBearing(): number {
    const bearing = this.map.getBearing();
    return Math.round((bearing + Number.EPSILON) * 100) / 100;
  }

  getMapPitch(): number {
    const pitch = this.map.getPitch();
    return Math.round((pitch + Number.EPSILON) * 100) / 100;
  }

  setMapCursor(cursor: string) {
    this.map.getCanvas().style.cursor = cursor;
  }

  onMouseMove(e: MapMouseEvent, map: Map) {
    const point = { x: e.point.x, y: e.point.y };
    const lngLat = { lng: e.lngLat.lng, lat: e.lngLat.lat };
    const features = map.queryRenderedFeatures(e.point);
    const properties = features.length ? features[0]['properties'] : {};
    const where = {
      point,
      lngLat,
      properties: properties as { [key: string]: any },
    };
    this.state.setWhere(where);
  }

  onZoomEnd(map: Map) {
    let zoom = map.getZoom();
    zoom = Math.round((zoom + Number.EPSILON) * 100) / 100;
    this.state.setZoom(zoom);
  }

  onBoxZoomEnd() {
    console.log('Box Zoom End, waiting 1 sec to update dashboard ...');
    setTimeout(() => {
      const bounds = this.getMapBounds();
      const zoom = this.getMapZoom();
      const center = this.getMapCenter();
      this.state.update({ bounds, zoom, center });
    }, 1000);
  }

  onWheel() {
    const bounds = this.getMapBounds();
    const center = this.getMapCenter();
    const zoom = this.getMapZoom();
    this.state.update({ bounds, center, zoom });
  }

  onRotateEnd() {
    this.state.setBearing(this.getMapBearing());
  }

  onPitchEnd() {
    this.state.setPitch(this.getMapPitch());
  }

  onDragEnd() {
    this.state.setCenter(this.getMapCenter());
  }

  // Map constants

  mapStyles(): string[] {
    return [
      'mapbox://styles/mapbox/streets-v12',
      'mapbox://styles/mapbox/streets-v9',
      'mapbox://styles/mapbox/satellite-streets-v9',
      'mapbox://styles/christodoulos/ckzichi5q001l15p1wpq6sbvs',
    ];
  }

  atticaLandmarks(): string[] {
    return ['Athens Plant Nursery', 'Hellinikon Development'];
  }

  atticaLandmarkPosition(landmark: string): number[] {
    switch (landmark) {
      case 'Athens Plant Nursery':
        return [23.781372557061157, 37.988260208268386];
      case 'Hellinikon Development':
        return [23.73664159, 37.87891007];
      default:
        return [0, 0];
    }
  }

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
    this.follow$.subscribe((follow) => {
      if (follow) {
        this.map && this.map.on('mousemove', this.followMouse);
      } else {
        this.map && this.map.off('mousemove', this.followMouse);
      }
    });
    this.terrain$.subscribe((visible) => {
      if (this.map) this.tb.terrain = visible;
    });
    this.shadows$.subscribe((visible) => {
      if (this.map && visible) {
        this.tb.setBuildingShadows({
          map: this.map,
          layerId: 'building-shadows',
          buildingsLayerId: '3d-buildings',
          minAltitude: 0.1,
        });
      } else if (this.map) this.tb.removeLayer('building-shadows');
    });
  }
}
