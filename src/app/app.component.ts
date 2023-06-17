import { Component } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isCookiePolicyVisible: boolean = false;

  constructor(
    private iconReg:SvgIconRegistryService,
    private cookieService: CookieService
  ) { }

  setCokkiePolicy(policy: string) {
    this.cookieService.set('cookie-policy', policy);
    this.isCookiePolicyVisible = false;
  }

  ngOnInit(): void { 
    const isCookiePolicyExist = this.cookieService.get('cookie-policy');
    if(!isCookiePolicyExist) {
      this.isCookiePolicyVisible = true;
    }

    this.iconReg.loadSvg('../assets/icons/pl-flag.svg', 'pl').subscribe();

    this.iconReg.loadSvg('../assets/icons/us-flag.svg', 'us').subscribe();
  }
}
