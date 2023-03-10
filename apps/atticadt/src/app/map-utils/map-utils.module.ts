import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClipboardModule } from '@angular/cdk/clipboard';

import { UiprimitivesModule } from '@uwmh/uiprimitives';
import { UiwidgetsModule } from '@uwmh/uiwidgets';

import { MapUtilsRoutingModule } from './map-utils.routing';
import { MapDashboardComponent } from './map-dashboard/map-dashboard.component';
import { MapDownloadComponent } from './map-download/map-download.component';

@NgModule({
  declarations: [MapDashboardComponent, MapDownloadComponent],
  imports: [
    CommonModule,
    ClipboardModule,
    MapUtilsRoutingModule,
    UiprimitivesModule,
    UiwidgetsModule,
  ],
})
export class MapUtilsModule {}
