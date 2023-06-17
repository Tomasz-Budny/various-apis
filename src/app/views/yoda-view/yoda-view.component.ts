import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YodaTranslationComponent } from './yoda-translation/yoda-translation.component';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@Component({
  selector: 'yoda-view',
  standalone: true,
  imports: [CommonModule, YodaTranslationComponent,
  TranslocoRootModule],
  templateUrl: './yoda-view.component.html',
  styleUrls: ['./yoda-view.component.scss']
})
export class YodaViewComponent {

}
