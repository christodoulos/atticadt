import { Component } from '@angular/core';
import { MapState } from '@uwmh/mapbox';
import { AppService } from './app.service';

@Component({
  selector: 'uwmh-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  title = this.service.routeTitle$;

  bounds() {
    this.mapState.setBounds([
      [24.116494, 38.340999],
      [22.890434, 35.823757],
    ]);
  }

  onCommand(command: string) {
    console.log(command);
    switch (command) {
      case 'download':
        this.service.downloadMap();
        break;

      default:
        break;
    }
  }

  constructor(private mapState: MapState, private service: AppService) {}
}
