import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './compo/home/home.component';
import { CreateNewComponent } from './compo/create-new/create-new.component';
import { SettingsComponent } from './compo/settings/settings.component';
import { SearchComponent } from './compo/search/search.component';
import { ColorComponentComponent } from './compo/color-component/color-component.component';
import { CosmaticComponentComponent } from './compo/cosmatic-component/cosmatic-component.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateNewComponent,
    SettingsComponent,
    SearchComponent,
    ColorComponentComponent,
    CosmaticComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
