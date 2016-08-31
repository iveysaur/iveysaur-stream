import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { routing, appRoutingProviders } from './app/app.routing';
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdIconModule } from '@angular2-material/icon';
import { MdMenuModule } from '@angular2-material/menu';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { OverlayModule } from '@angular2-material/core/overlay/overlay-directives';

import { AppComponent, environment } from './app/';
import { AboutComponent } from './app/about';
import { ContactComponent } from './app/contact';
import { FaqComponent } from './app/faq';
import { MainPageComponent } from './app/main-page';

@NgModule({
  imports: [
    BrowserModule,
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdMenuModule,
    MdToolbarModule,
    OverlayModule,
    routing,
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    MainPageComponent,
  ],
  providers: [
    appRoutingProviders
  ],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private _appRef: ApplicationRef) { }

  ngDoBootstrap() {
    this._appRef.bootstrap(AppComponent);
  }
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
