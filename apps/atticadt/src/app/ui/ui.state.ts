import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createStore, withProps, select } from '@ngneat/elf';

export interface uiStateInterface {
  overlayVisible: boolean;
  flyto?: string;
}

const AppStateInit: uiStateInterface = {
  overlayVisible: false,
};

const uiState = createStore(
  { name: 'app' },
  withProps<uiStateInterface>(AppStateInit)
);

@Injectable()
export class UIState {
  overlayVisible$ = uiState.pipe(select((state) => state.overlayVisible));

  toggleOverlayVisible() {
    uiState.update((state) => {
      const overlayVisible = { state };
      if (overlayVisible) this.router.navigate(['']);
      return { ...state, overlayVisible: !state.overlayVisible };
    });
  }

  ensureOverlayVisible() {
    uiState.update((state) => ({ ...state, overlayVisible: true }));
  }

  setFlyTo(flyto: string) {
    uiState.update((state) => ({ ...state, flyto }));
  }

  constructor(private router: Router) {}
}
