import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ListComponent } from './modules/list/components/list-component/list.component';
// import { CategoryComponent } from './modules/category/category-component/category.component';
// import { ItemComponent } from './modules/list/components/item/item.component';
// import { HomeComponent } from './shared/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    // ListComponent,
    // CategoryComponent,
    // ItemComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
