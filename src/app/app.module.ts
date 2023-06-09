import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { MemeViewComponent } from './views/meme-view.component';
import { YodaComponent } from './views/yoda.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MemeViewComponent,
    YodaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
