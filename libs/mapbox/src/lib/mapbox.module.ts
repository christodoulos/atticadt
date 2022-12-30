import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { MapState } from './state';

@NgModule({
  imports: [CommonModule],
  declarations: [MapComponent],
  exports: [MapComponent],
  providers: [MapState],
})
export class MapboxModule {}
