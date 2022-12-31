import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiprimitivesModule } from '@uwmh/uiprimitives';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SimpleNavbarComponent } from './simple-navbar/simple-navbar.component';

@NgModule({
  imports: [CommonModule, UiprimitivesModule],
  declarations: [NavbarComponent, FooterComponent, SimpleNavbarComponent],
  exports: [NavbarComponent, FooterComponent, SimpleNavbarComponent],
})
export class UiwidgetsModule {}
