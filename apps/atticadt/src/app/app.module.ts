import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { Actions } from '@ngneat/effects-ng';
import { devTools } from '@ngneat/elf-devtools';

import { UiprimitivesModule } from '@uwmh/uiprimitives';
import { UiwidgetsModule } from '@uwmh/uiwidgets';
import { MapboxModule } from '@uwmh/mapbox';

import { UIState } from './ui/ui.state';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { RouterOutletComponent } from './ui/router-outlet-component/router-outlet.component';
import { IconBarComponent } from './ui/icon-bar-component/icon-bar.component';

export function initElfDevTools(actions: Actions) {
  return () => {
    devTools({
      name: 'Attica Digital Twin',
      actionsDispatcher: actions,
    });
  };
}

@NgModule({
  declarations: [AppComponent, RouterOutletComponent, IconBarComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    UiprimitivesModule,
    UiwidgetsModule,
    MapboxModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: initElfDevTools,
      deps: [Actions],
    },
    UIState,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
