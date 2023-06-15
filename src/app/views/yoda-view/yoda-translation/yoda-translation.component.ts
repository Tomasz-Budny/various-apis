import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { YodaService } from 'src/app/services/yoda.service';
import { Observable, map, of } from 'rxjs';

@Component({
  selector: 'yoda-translation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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

  yodaText$: Observable<any> = of("Ja być mistrz yoda!")

  constructor(
    private fb: FormBuilder,
    private yodaService: YodaService
  ) {}

  ngOnInit() {
    console.log(this.yodaForm.get('text'));
  }

  onSubmit() {
    console.log(this.yodaForm.get('text'));

    if(this.yodaForm.valid) {
      const text = this.yodaForm.value.text;
      this.yodaText$ = this.yodaService.getTextTranslatedByYoda(text).pipe(map((text: any) => text.contents.translated));
    }
  }
}
