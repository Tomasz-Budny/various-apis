import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  scrollToSection(y: number) {
    const height = window.innerHeight;
    window.scroll(0, y * height);
  }
}
