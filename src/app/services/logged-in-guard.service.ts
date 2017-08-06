import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { StorageService } from "app/services/storage.service"

@Injectable() 
export class LoggedInGuardService implements CanActivate {

	constructor	(private route: Router,
				 private storageService: StorageService) {
	}

	canActivate () {
		if(this.storageService.isLoggedIn()) {
			return true;
		} else {
			this.route.navigate(['/login'])
		}
	}
} 