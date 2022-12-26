import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPrimaryComponent } from './button-primary/button-primary.component';
import { SvgIconComponent } from './svg-icon-button/svg-icon.component';
import { IconButtonComponent } from './icon-button/icon-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonPrimaryComponent, SvgIconComponent, IconButtonComponent],
  exports: [ButtonPrimaryComponent, SvgIconComponent, IconButtonComponent],
})
export class UiprimitivesModule {}
