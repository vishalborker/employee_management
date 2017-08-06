import { Component, OnInit } from '@angular/core';
import { StorageService } from "app/services/storage.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor (private storageService: StorageService) {

  }

  ngOnInit () {
  	this.storageService.saveEmployeeDetails();
  }

  isLoggedIn() {
  	return this.storageService.isLoggedIn();
  }

}
