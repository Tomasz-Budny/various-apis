import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemesComponent } from './memes/memes.component';

@Component({
  selector: 'memes-view',
  standalone: true,
  imports: [CommonModule, MemesComponent],
  templateUrl: './memes-view.component.html',
  styleUrls: ['./memes-view.component.scss']
})
export class MemesViewComponent {

}
