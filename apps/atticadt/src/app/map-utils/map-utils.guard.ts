import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UIState } from '../ui/ui.state';

@Injectable({ providedIn: 'root' })
export class MapUtilsGuard implements CanActivate {
  canActivate(): boolean {
    this.uiState.ensureOverlayVisible();
    return true;
  }

  constructor(private uiState: UIState) {}
}
