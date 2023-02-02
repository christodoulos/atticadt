import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UIState } from '../ui.state';

@Component({
  selector: 'uwmh-icon-bar',
  templateUrl: './icon-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBarComponent {
  toggleOverLayVisible() {
    this.uiState.toggleOverlayVisible();
  }
  constructor(private uiState: UIState) {}
}
