import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapUtilsGuard } from './map-utils.guard';

import { MapDashboardComponent } from './map-dashboard/map-dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: MapDashboardComponent,
    canActivate: [MapUtilsGuard],
    title: 'Attica Digital Twin Map Dashboard',
    data: { title: 'Map Dashboard' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapUtilsRoutingModule {}
