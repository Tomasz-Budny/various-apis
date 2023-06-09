import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YodaService } from '../services/yoda.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'yoda',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p *ngIf="yodaText$ | async as vm">
      {{ vm.contents.translated }}
    </p>
  `,
  styles: [
  ]
})
export class YodaComponent {

  yodaText$: Observable<any>;

  constructor(
    public yodaService: YodaService
  ) {}

  ngOnInit() {
    this.yodaText$ = this.yodaService.getTextTranslatedByYoda('This night is very beatuful!');
  }
}
