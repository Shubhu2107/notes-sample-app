import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './compo/home/home.component';
import { CreateNewComponent } from './compo/create-new/create-new.component';
import { SettingsComponent } from './compo/settings/settings.component';
import { SearchComponent } from './compo/search/search.component';
import { ColorComponentComponent } from './compo/color-component/color-component.component';
import { CosmaticComponentComponent } from './compo/cosmatic-component/cosmatic-component.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateNewComponent,
    SettingsComponent,
    SearchComponent,
    ColorComponentComponent,
    CosmaticComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
