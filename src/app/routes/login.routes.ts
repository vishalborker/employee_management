import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "app/modules/login/login.component"
import { ModuleWithProviders } from "@angular/core";

export const loginRoutes: Routes = [
	{
		path: "",
		component: LoginComponent
	}
];

export const loginRouting: ModuleWithProviders = RouterModule.forChild(loginRoutes);