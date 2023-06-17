import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ScrollService } from 'src/app/services/scroll.service';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@Component({
  standalone: true,
  selector: 'navbar',
  imports: [TranslocoRootModule, AngularSvgIconModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private translocoService: TranslocoService,
    public scrollService: ScrollService
  ) {}

  setLang(newLang: string) {
    this.translocoService.setActiveLang(newLang);
  }
}
