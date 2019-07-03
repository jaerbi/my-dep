import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./shared/home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list', loadChildren: './modules/list'},
  {path: 'category', loadChildren: './modules/list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
