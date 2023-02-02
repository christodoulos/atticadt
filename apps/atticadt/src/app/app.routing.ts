import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'map',
    loadChildren: () =>
      import('./map-utils/map-utils.module').then((m) => m.MapUtilsModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
  },
];

@NgModule({ imports: [RouterModule.forRoot(routes)] })
export class AppRoutingModule {}
