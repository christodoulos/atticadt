import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UIState } from '../ui.state';

@Component({
  selector: 'uwmh-router-outlet',
  templateUrl: './router-outlet.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouterOutletComponent {
  @Input() title = 'Title';
  overlayVisible$ = this.uiState.overlayVisible$;

  toggleOverLayVisible() {
    this.uiState.toggleOverlayVisible();
  }

  constructor(private uiState: UIState) {}
}
