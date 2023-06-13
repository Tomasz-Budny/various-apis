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
  <div class="choose-meme">
    <button
      *ngFor="let category of categories" 
      (click)="getMemeOfSpecifficCategory(category.subreddit)">
      {{ category.name }}
    </button>
  </div>
  `,
  styleUrls: [`../../assets/styles/meme.scss`]
})
export class MemeViewComponent {

  meme$: Observable<MemeModel>
  categories = [
    {name: 'Losowy', subreddit: 'memes'},
    {name: 'Polityczny', subreddit: 'politicalmemes'},
    {name: 'Wholesome', subreddit: 'videogamememes'}
  ]

  constructor(
    public memeService: MemeService
  ) {}

  ngOnInit() {
    this.meme$ = this.memeService.getRandomMeme()
  }

  getMemeOfSpecifficCategory(category: string) {
    this.meme$ = this.memeService.getRandomMeme(category);
  }
}
