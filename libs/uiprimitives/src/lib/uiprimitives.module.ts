import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonPrimaryComponent } from './button-primary/button-primary.component';
import { SvgIconComponent } from './svg-icon-button/svg-icon.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { SimpleToggleComponent } from './simple-toggle/simple-toggle.component';
import { IntegerInputComponent } from './integer-input/integer-input.component';
import { RangeInputComponent } from './range-input/range-input.component';
import { FloatInputComponent } from './float-input/float-input.component';
import { SimpleSelectComponent } from './simple-select/simple-select.component';
import { IconToggleComponent } from './icon-toggle/icon-toggle.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    ButtonPrimaryComponent,
    SvgIconComponent,
    IconButtonComponent,
    SimpleToggleComponent,
    IntegerInputComponent,
    RangeInputComponent,
    FloatInputComponent,
    SimpleSelectComponent,
    IconToggleComponent,
    CheckboxComponent,
  ],
  exports: [
    ButtonPrimaryComponent,
    SvgIconComponent,
    IconButtonComponent,
    SimpleToggleComponent,
    IntegerInputComponent,
    RangeInputComponent,
    FloatInputComponent,
    SimpleSelectComponent,
    IconToggleComponent,
    CheckboxComponent,
  ],
})
export class UiprimitivesModule {}
