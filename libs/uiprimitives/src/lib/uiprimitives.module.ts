import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonPrimaryComponent } from './button-primary/button-primary.component';
import { SvgIconComponent } from './svg-icon-button/svg-icon.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { SimpleToggleComponent } from './simple-toggle/simple-toggle.component';
import { IntegerInputComponent } from './integer-input/integer-input.component';
import { RangeInputComponent } from './range-input/range-input.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    ButtonPrimaryComponent,
    SvgIconComponent,
    IconButtonComponent,
    SimpleToggleComponent,
    IntegerInputComponent,
    RangeInputComponent,
  ],
  exports: [
    ButtonPrimaryComponent,
    SvgIconComponent,
    IconButtonComponent,
    SimpleToggleComponent,
    IntegerInputComponent,
    RangeInputComponent,
  ],
})
export class UiprimitivesModule {}
