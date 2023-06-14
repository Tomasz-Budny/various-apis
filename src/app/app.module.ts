import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { MemeViewComponent } from './views/meme-view.component';
import { YodaComponent } from './views/yoda.component';
import { WelcomeViewComponent } from './views/welcome-view/welcome-view.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { MemesViewComponent } from './views/memes-view/memes-view.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MemeViewComponent,
    YodaComponent,
    WelcomeViewComponent,
    NavbarComponent,
    MemesViewComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
