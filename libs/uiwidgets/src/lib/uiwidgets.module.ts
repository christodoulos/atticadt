import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

import { UiprimitivesModule } from '@uwmh/uiprimitives';
import { MapboxModule } from '@uwmh/mapbox';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SimpleNavbarComponent } from './simple-navbar/simple-navbar.component';
import { TimeSliderComponent } from './time-slider/time-slider.component';
import { MapBearingComponent } from './map-bearing/map-bearing.component';
import { MapCenterComponent } from './map-center/map-center.component';
import { StandaloneMenuComponent } from './standalone-menu/standalone-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    UiprimitivesModule,
    MapboxModule,
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    SimpleNavbarComponent,
    TimeSliderComponent,
    MapBearingComponent,
    MapCenterComponent,
    StandaloneMenuComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SimpleNavbarComponent,
    TimeSliderComponent,
    MapBearingComponent,
    MapCenterComponent,
    StandaloneMenuComponent,
  ],
})
export class UiwidgetsModule {}
