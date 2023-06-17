import { Component } from '@angular/core';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@Component({
  standalone: true,
  imports: [TranslocoRootModule],
  selector: 'welcome-view',
  templateUrl: './welcome-view.component.html',
  styleUrls: ['./welcome-view.component.scss']
})
export class WelcomeViewComponent {
  
}
