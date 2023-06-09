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
import { FooterComponent } from './views/footer/footer.component';
import { TranslocoRootModule } from './transloco-root.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { YodaViewComponent } from './views/yoda-view/yoda-view.component';
import { CookiePolicyPopUpComponent } from './views/cookie-policy-pop-up/cookie-policy-pop-up.component';

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
    CookiePolicyPopUpComponent,
    NavbarComponent,
    MemesViewComponent,
    YodaViewComponent,
    FooterComponent,
    TranslocoRootModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
