import { Component, OnInit } from '@angular/core';
import { StorageService } from "app/services/storage.service"
import { Router, ActivatedRoute } from "@angular/router";
import { employeeDesignations } from "app/mock-data/mock-employee-data";
import { EmployeeModel } from "app/models/employee.model";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-add.component.html'
})
export class EmployeeEditComponent implements OnInit {
  public empId: number = null;
  public model: EmployeeModel;
  public mode: string = "edit";
  public designations: Array<any> = [];

  constructor (private storageService: StorageService, 
  			       private route: Router,
               private activatedRoute: ActivatedRoute) {
  }

  ngOnInit () {
    this.designations = employeeDesignations;
    let empId = this.activatedRoute.snapshot.params['id'];
    this.empId = +empId;
    this.model = this.storageService.fetchEmployee(this.empId);
  }

  onSubmit () {
    this.storageService.saveEditEmployee(this.model);
    alert("Employee details successfully saved!");
    this.route.navigate(['/employee']);
  }

  onCancel () {
    this.route.navigate(['/employee']);
  }
} 