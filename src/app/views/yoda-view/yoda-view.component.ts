import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YodaTranslationComponent } from './yoda-translation/yoda-translation.component';

@Component({
  selector: 'yoda-view',
  standalone: true,
  imports: [CommonModule, YodaTranslationComponent],
  templateUrl: './yoda-view.component.html',
  styleUrls: ['./yoda-view.component.scss']
})
export class YodaViewComponent {

}
