import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { loginRouting } from "app/routes/login.routes";
import { LoginComponent } from "app/modules/login/login.component";

@NgModule({
	imports:[
		FormsModule, 
		CommonModule,
		loginRouting
	],
	declarations:[
		LoginComponent
	],
	providers:[]
})

export class LoginModule {
	
}