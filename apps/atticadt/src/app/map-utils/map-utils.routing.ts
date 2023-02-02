import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapUtilsGuard } from './map-utils.guard';

import { MapDashboardComponent } from './map-dashboard/map-dashboard.component';
import { MapDownloadComponent } from './map-download/map-download.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: MapDashboardComponent,
    canActivate: [MapUtilsGuard],
    title: 'Attica Digital Twin Map Dashboard',
    data: { title: 'Map Dashboard' },
  },
  {
    path: 'download',
    component: MapDownloadComponent,
    canActivate: [MapUtilsGuard],
    title: 'Attica Digital Twin - Download the current map view',
    data: { title: 'Map Download' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapUtilsRoutingModule {}
