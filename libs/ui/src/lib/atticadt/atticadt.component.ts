import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MapState } from '@uwmh/mapbox';

@Component({
  selector: 'uwmh-atticadt',
  templateUrl: './atticadt.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtticadtComponent {
  constructor(private mapState: MapState) {}

  pitch0() {
    this.mapState.setPitch(1);
  }

  pitch45() {
    this.mapState.setPitch(45);
  }

  bounds() {
    this.mapState.setBounds([
      [24.116494, 38.340999],
      [22.890434, 35.823757],
    ]);
  }

  addSky() {
    this.mapState.setSkyLayer(true);
  }

  removeSky() {
    this.mapState.setSkyLayer(false);
  }
}
