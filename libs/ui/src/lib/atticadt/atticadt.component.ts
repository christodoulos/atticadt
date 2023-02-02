import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MapState } from '@uwmh/mapbox';

@Component({
  selector: 'uwmh-atticadt',
  templateUrl: './atticadt.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtticadtComponent {
  overlayVisible = true;
  constructor(private mapState: MapState) {}

  bounds() {
    this.mapState.setBounds([
      [24.116494, 38.340999],
      [22.890434, 35.823757],
    ]);
  }

  toggleOverLay() {
    this.overlayVisible = !this.overlayVisible;
  }
}
