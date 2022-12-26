import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UiprimitivesModule } from '@uwmh/uiprimitives';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiprimitivesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
