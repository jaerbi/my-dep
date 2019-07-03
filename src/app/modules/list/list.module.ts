import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {ListComponent} from "./components/list-component/list.component";
import {ListRoutingModule} from "./list-routing.module";
import {ItemComponent} from "./components/item/item.component";


@NgModule({
	declarations: [
		ListComponent,
		ItemComponent
	],
	imports: [
		ListRoutingModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [
	]
})
export class ListModule {
}