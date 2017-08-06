import { Component, OnInit } from '@angular/core';
import { StorageService } from "app/services/storage.service"
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent {
  public title = 'nav works!';

  constructor (private storageService: StorageService, 
  			       private route: Router) {
  }

  onLogout() {
    this.storageService.onLogout();
    location.reload();
  }
} 