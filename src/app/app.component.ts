import { Component } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private iconReg:SvgIconRegistryService) { }

  ngOnInit(): void { 
    this.iconReg.loadSvg('../assets/icons/pl-flag.svg', 'pl').subscribe();

    this.iconReg.loadSvg('../assets/icons/us-flag.svg', 'us').subscribe();
  }
}
