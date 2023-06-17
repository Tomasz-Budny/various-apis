import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemeService } from 'src/app/services/meme.service';
import { Observable } from 'rxjs';
import { MemeModel } from 'src/app/models/meme.model';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

@Component({
  selector: 'memes',
  standalone: true,
  imports: [CommonModule, TranslocoRootModule],
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.scss']
})
export class MemesComponent {

  meme$: Observable<MemeModel>
  categories = [
    'videogamememes', 'politicalmemes', 'memes',
    'sciencememes', 'StudyMemes', 'dunkmemes',
    'videogamememes', 'EuropeMemes', 'PolishMemes',
    'YouTubeMemes', 'politicalmemes', 'marvelmemes',
    'Animemes', 'spidermanmemes', 'WitcherMemes'
  ];

  constructor(
    public memeService: MemeService
  ) {}

  ngOnInit() {
    this.meme$ = this.memeService.getRandomMeme('memes')
  }

  getMemeOfSpecifficCategory(category: string) {
    this.meme$ = this.memeService.getRandomMeme(category);
  }
}
