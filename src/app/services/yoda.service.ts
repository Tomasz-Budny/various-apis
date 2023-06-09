import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YodaService {

  URL: string = 'https://api.funtranslations.com/translate/yoda.json';

  constructor(
    private http: HttpClient
  ) {}

  getTextTranslatedByYoda(text: string) {
    return this.http.get(this.URL, {
      params: new HttpParams().set('text', text)
    });
  }
}
