import { NgModule } from '@angular/core';
import { HomeComponent } from './compo/home/home.component';
import { CreateNewComponent } from './compo/create-new/create-new.component';
import { SettingsComponent } from './compo/settings/settings.component';
import { SearchComponent } from './compo/search/search.component';
import { ColorComponentComponent } from './compo/color-component/color-component.component';
import { CosmaticComponentComponent } from './compo/cosmatic-component/cosmatic-component.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
