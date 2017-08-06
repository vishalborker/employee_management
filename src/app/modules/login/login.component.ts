import { Component, OnInit } from '@angular/core';
import { StorageService } from "app/services/storage.service"
import { Router } from "@angular/router";
import { users } from "app/mock-data/mock-users";
import { LoginModel } from "app/models/login.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public model: LoginModel;
  
  constructor (private storageService: StorageService, 
  			   private route: Router) {
  }

  ngOnInit () {
  	this.model = {
      username: "",
      password: ""
    }
  }

  onSubmit () {
    let findUser = users.filter((item, index) => {
      return item.username == this.model.username && item.password == this.model.password;
    });

    if(findUser.length == 0) {
      alert("Please enter valid user credentials");
      return false;
    }
  	if(this.storageService.login(this.model)) {
      alert("Login successfull!")
  		this.route.navigate(['/employee'])
  	}
  }
} 