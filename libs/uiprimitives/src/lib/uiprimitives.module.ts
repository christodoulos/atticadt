import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPrimaryComponent } from './button-primary/button-primary.component';
import { SvgIconComponent } from './svg-icon-button/svg-icon.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { SimpleToggleComponent } from './simple-toggle/simple-toggle.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonPrimaryComponent,
    SvgIconComponent,
    IconButtonComponent,
    SimpleToggleComponent,
  ],
  exports: [
    ButtonPrimaryComponent,
    SvgIconComponent,
    IconButtonComponent,
    SimpleToggleComponent,
  ],
})
export class UiprimitivesModule {}
