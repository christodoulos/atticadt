import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiwidgetsModule } from '@uwmh/uiwidgets';
import { MapboxModule } from '@uwmh/mapbox';

import { AtticadtComponent } from './atticadt/atticadt.component';

@NgModule({
  imports: [CommonModule, UiwidgetsModule, MapboxModule],
  declarations: [AtticadtComponent],
  exports: [AtticadtComponent],
})
export class UiModule {}
