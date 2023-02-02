import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { saveAs } from 'file-saver';

@Injectable({ providedIn: 'root' })
export class AppService {
  routeTitle$: Observable<string | undefined> = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map(() => this.getRouteTitle(this.activatedRoute.firstChild))
  );

  private getRouteTitle(activatedRoute: ActivatedRoute | null) {
    // thanks to https://tinyurl.com/28x66dky
    while (activatedRoute) {
      if (activatedRoute.firstChild) {
        activatedRoute = activatedRoute.firstChild;
      } else if (
        activatedRoute.snapshot.data &&
        activatedRoute.snapshot.data['title']
      ) {
        return activatedRoute.snapshot.data['title'] as string;
      } else {
        return undefined;
      }
    }
    return undefined;
  }

  downloadMap() {
    // Τhanks to https://tinyurl.com/22vht9zc accepted answer
    const img = new Image();
    const mapCanvas = document.querySelector(
      '.mapboxgl-canvas'
    ) as HTMLCanvasElement;
    if (mapCanvas) {
      img.src = mapCanvas.toDataURL();
      saveAs(img.src, 'map.png');
    }
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
}
