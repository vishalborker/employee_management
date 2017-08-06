import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-base',
  template: `
    <router-outlet></router-outlet>
  `
})
export class EmployeeBaseComponent implements OnInit {
  ngOnInit () {
  	console.log("base component");
  }
} 