import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@Component({
  selector: 'cookie-policy-pop-up',
  standalone: true,
  imports: [CommonModule, TranslocoRootModule],
  templateUrl: './cookie-policy-pop-up.component.html',
  styleUrls: ['./cookie-policy-pop-up.component.scss']
})
export class CookiePolicyPopUpComponent {

  @Output() close = new EventEmitter<string>();
}
