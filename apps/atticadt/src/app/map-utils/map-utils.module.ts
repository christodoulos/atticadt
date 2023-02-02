import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiprimitivesModule } from '@uwmh/uiprimitives';
import { UiwidgetsModule } from '@uwmh/uiwidgets';

import { MapUtilsRoutingModule } from './map-utils.routing';
import { MapDashboardComponent } from './map-dashboard/map-dashboard.component';

@NgModule({
  declarations: [MapDashboardComponent],
  imports: [
    CommonModule,
    MapUtilsRoutingModule,
    UiprimitivesModule,
    UiwidgetsModule,
  ],
})
export class MapUtilsModule {}
