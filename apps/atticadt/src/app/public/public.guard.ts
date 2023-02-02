import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UIState } from '../ui/ui.state';

@Injectable({ providedIn: 'root' })
export class PublicGuard implements CanActivate {
  canActivate(): boolean {
    this.uiState.ensureOverlayVisible();
    return true;
  }

  constructor(private uiState: UIState) {}
}
