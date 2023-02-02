import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
}
