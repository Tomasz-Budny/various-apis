import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MemeModel } from '../models/meme.model';

@Injectable({
  providedIn: 'root'
})
export class MemeService {

  URL: string = 'https://meme-api.com/gimme'

  constructor(
    private http: HttpClient
  ) {}

  getRandomMeme(subreddit: string = '') {
    if(subreddit != '') {
      subreddit = '/' + subreddit;
    }

    return this.http.get<MemeModel>(this.URL + subreddit);
  }
}
