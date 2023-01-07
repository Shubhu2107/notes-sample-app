import { SandeepComponent } from './sandeep/sandeep.component';
import { ShubhangiComponent } from './shubhangi/shubhangi.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'shubhangi', component: ShubhangiComponent },
  { path: 'sandeep', component: SandeepComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
