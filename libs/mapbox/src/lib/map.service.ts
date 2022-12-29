import { Injectable } from '@angular/core';
import { Map } from 'mapbox-gl';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  map: BehaviorSubject<Map> | undefined;
}
