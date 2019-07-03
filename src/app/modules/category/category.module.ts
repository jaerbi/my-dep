import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {CategoryRoutingModule} from "./category-routing.module";
import {CategoryComponent} from "./category-component/category.component";

@NgModule({
	declarations: [
		CategoryComponent,
	],
	imports: [
		CategoryRoutingModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [
	]
})
export class CategoryModule {
}
