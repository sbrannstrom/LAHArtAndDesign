import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  visible: boolean = false;
  showBackdrop: boolean = false;
  menuVisible: boolean = false;
  route: string = '';
  routeText: string = '';

  constructor(router: Router) {
    this.route = router.url;
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
      this.route = event.url.split('/')[1];
      switch (this.route) {
        case 'hem':
          this.routeText = 'Hem';
          break;
        case 'tovningar':
          this.routeText = 'Nåltovningar';
          break;
        case 'oljemalningar':
          this.routeText = 'Oljemålningar';
          break;
        case 'blandat':
          this.routeText = 'Blandat';
          break;
        default:
          break;
      }
    });
  }

  clickProfile() {
    this.showBackdrop = true;
    setTimeout(() => {
      this.visible = true;
    }, 200);
  }

  closeProfile() {
    this.showBackdrop = false;
    setTimeout(() => {
      this.visible = false;
    }, 200);
  }
}
