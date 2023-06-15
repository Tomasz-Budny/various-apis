import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemesComponent } from './memes/memes.component';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@Component({
  selector: 'memes-view',
  standalone: true,
  imports: [CommonModule, MemesComponent, TranslocoRootModule],
  templateUrl: './memes-view.component.html',
  styleUrls: ['./memes-view.component.scss']
})
export class MemesViewComponent {

}
