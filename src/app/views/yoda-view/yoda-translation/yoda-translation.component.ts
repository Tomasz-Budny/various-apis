import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { YodaService } from 'src/app/services/yoda.service';
import { Observable, map, of } from 'rxjs';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { YodaFakeService } from 'src/app/services/yoda-fake.service';
import { TranslocoRootModule } from 'src/app/transloco-root.module';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'yoda-translation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxTypedJsModule,
  TranslocoRootModule],
  templateUrl: './yoda-translation.component.html',
  styleUrls: ['./yoda-translation.component.scss']
})
export class YodaTranslationComponent {

  yodaForm = this.fb.group({
    text: [null, [
      Validators.required,
      Validators.maxLength(250)
    ]]
  });

  yodaText$: Observable<any>;

  constructor(
    private fb: FormBuilder,
    //private yodaService: YodaService
    private yodaService: YodaFakeService,
    private translocoService: TranslocoService
  ) {}

  ngOnInit() {
    this.translocoService.selectTranslate('yoda.quote').subscribe(value => {
      this.yodaText$ = of(value);
    })
    
  }

  onSubmit() {
    if(this.yodaForm.valid) {
      const text = this.yodaForm.value.text;
      this.yodaText$ = this.yodaService.getTextTranslatedByYoda(text).pipe(map((text: any) => text.contents.translated));
    }
  }
}
