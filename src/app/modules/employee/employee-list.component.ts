import { Component, OnInit } from '@angular/core';
import { StorageService } from "app/services/storage.service"
import { Router } from "@angular/router";
import { employeeDesignations } from "app/mock-data/mock-employee-data";

@Component({
  selector: 'app-employee',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
  public employeeList: Array<any> = [];
  
  constructor (private storageService: StorageService, 
  			       private route: Router) {
  }

  ngOnInit () {
    this.fetchEmployeeRecords();
    this.storageService.setNextEmployeeId();
  }

  fetchEmployeeRecords () {
    this.employeeList = this.storageService.fetchEmpRecords();
  }

  onAddNew () {
    this.route.navigate(['/employee/add'])
  }

  onDelete(id) {
    if(confirm("Are you sure you want to delete this record?")) {
      this.storageService.deleteEmployee(id);
      this.fetchEmployeeRecords();
      alert("Record successfully deleted!")
    }
  }

  onEdit(id) {
    this.route.navigate(['/employee/edit/' + id]);
  }

  findDesignation(id) {
    let tempDesignation = employeeDesignations.filter((val, index) => {
        return val.value == id;
    })
    return tempDesignation[0].text;
  }
} 