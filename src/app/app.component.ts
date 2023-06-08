import { Component } from '@angular/core';
import { MemeService } from './services/meme.service';
import { Observable } from 'rxjs';
import { MemeModel } from './models/meme.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  meme$: Observable<MemeModel>

  constructor(
    public memeService: MemeService
  ) {}

  ngOnInit() {
    this.meme$ = this.memeService.getRandomMeme()
  }
}
