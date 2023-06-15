import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslocoRootModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

}
