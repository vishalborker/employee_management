import { Routes, RouterModule } from "@angular/router";
import { EmployeeListComponent } from "app/modules/employee/employee-list.component";
import { ModuleWithProviders } from "@angular/core";

import { EmployeeAddComponent } from "app/modules/employee/employee-add.component";
import { EmployeeEditComponent } from "app/modules/employee/employee-edit.component";
import { LoggedInGuardService } from "app/services/logged-in-guard.service";
import { EmployeeBaseComponent } from "app/modules/employee/employee-base.component";

export const employeeRoutes: Routes = [
	{
		path: "",
		component: EmployeeBaseComponent,
		canActivate: [LoggedInGuardService],
		children: [
		  {
		  	path: "",
			component: EmployeeListComponent,
		  },
	      {
	        path: 'add',
	        component: EmployeeAddComponent
	      },
	      {
	        path: 'edit/:id',
	        component: EmployeeEditComponent
	      }
	    ]
	}
];

export const employeeRouting: ModuleWithProviders = RouterModule.forChild(employeeRoutes);