import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { employeeRouting } from "app/routes/employee.routes";
import { EmployeeListComponent } from "app/modules/employee/employee-list.component";
import { EmployeeAddComponent } from "app/modules/employee/employee-add.component";
import { EmployeeEditComponent } from "app/modules/employee/employee-edit.component";
import { EmployeeBaseComponent } from "app/modules/employee/employee-base.component";

@NgModule({
	imports:[
		FormsModule, 
		CommonModule,
		employeeRouting
	],
	declarations:[
		EmployeeListComponent,
		EmployeeAddComponent,
		EmployeeEditComponent,
		EmployeeBaseComponent
	],
	providers:[]
})

export class EmployeeModule {
	
}