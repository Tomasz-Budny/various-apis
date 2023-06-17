import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YodaFakeService {

  getTextTranslatedByYoda(text: string) {
    return of({contents: {translated: text}})
    .pipe(delay(700));
  }
}
