import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemeService } from 'src/app/services/meme.service';
import { MemeModel } from 'src/app/models/meme.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'meme-view',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div 
     *ngIf="meme$ | async as vm"
      class="meme-container">
    <img [src]="vm.url" alt="">
    <span>Autor: {{ vm.author }}</span>
  </div>
  `,
  styles: [`
    .meme-container {
      display: flex;
      flex-direction: column;

      img {
        width: 300px;
        height: 300px
      }
    }
  `]
})
export class MemeViewComponent {

  meme$: Observable<MemeModel>

  constructor(
    public memeService: MemeService
  ) {}

  ngOnInit() {
    this.meme$ = this.memeService.getRandomMeme()
  }
}
