import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiprimitivesModule } from '@uwmh/uiprimitives';
import { UiwidgetsModule } from '@uwmh/uiwidgets';
import { MapboxModule } from '@uwmh/mapbox';

import { AtticadtComponent } from './atticadt/atticadt.component';
import { MapDashboardComponent } from './map-dashboard/map-dashboard.component';

@NgModule({
  imports: [CommonModule, UiprimitivesModule, UiwidgetsModule, MapboxModule],
  declarations: [AtticadtComponent, MapDashboardComponent],
  exports: [AtticadtComponent, MapDashboardComponent],
})
export class UiModule {}
