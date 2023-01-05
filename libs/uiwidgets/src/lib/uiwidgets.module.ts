import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiprimitivesModule } from '@uwmh/uiprimitives';
import { MapboxModule } from '@uwmh/mapbox';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SimpleNavbarComponent } from './simple-navbar/simple-navbar.component';
import { TimeSliderComponent } from './time-slider/time-slider.component';

@NgModule({
  imports: [CommonModule, UiprimitivesModule, MapboxModule],
  declarations: [
    NavbarComponent,
    FooterComponent,
    SimpleNavbarComponent,
    TimeSliderComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SimpleNavbarComponent,
    TimeSliderComponent,
  ],
})
export class UiwidgetsModule {}
