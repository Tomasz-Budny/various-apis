import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  standalone: true,
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    public cookieService: CookieService,
    private router: Router
   ) {}

  reloadPage() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([this.router.url]);
    });
  }

  changeCulture(culture: string) {
    this.cookieService.set('firebase-country-override', culture);
    this.cookieService.set('firebase-language-override', culture);

    this.reloadPage()
  }
}
