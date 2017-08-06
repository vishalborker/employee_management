import { Component, OnInit } from '@angular/core';
import { StorageService } from "app/services/storage.service"
import { Router } from "@angular/router";
import { employeeDesignations } from "app/mock-data/mock-employee-data";
import { EmployeeModel } from "app/models/employee.model";

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html'
})
export class EmployeeAddComponent implements OnInit {
  public title = 'employee works!';
  public employeeList: Array<any> = [];
  public designations: Array<any> = [];
  public model: EmployeeModel;
  public mode: string = "new";

  constructor (private storageService: StorageService, 
  			       private route: Router) {
  }

  ngOnInit () {
    this.designations = employeeDesignations;
    this.model = {
      id: this.storageService.fetchNextId(),
      firstName: "",
      lastName:"",
      joining: "",
      designation: "",
      email: "",
      phone: "",
      address: ""
    }
  }

  onSubmit () {
    this.storageService.saveEmployee(this.model);
    alert("Employee details successfully saved!");
    this.route.navigate(['/employee']);
  }

  onCancel () {
    this.route.navigate(['/employee']);
  }
} 