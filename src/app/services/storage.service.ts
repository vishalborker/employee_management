import { Injectable } from "@angular/core";
import { storageTypes, KEY_EMP, KEY_LOGGED_USER, KEY_LOGGED_IN, KEY_NEXT_EMP } from "app/configs/general-values";
import { employees } from "app/mock-data/mock-employee-data";
@Injectable() 

export class StorageService {
	public storageType: any;
	constructor	() {
		this.storageType = storageTypes[0];
	}
	saveEmployeeDetails	() {
		if(this.storageType.getItem(KEY_EMP) == null) {
			this.storageType.setItem(KEY_EMP, this.stringifyArray(employees))
		}
	}

	onLogout () {
		this.storageType.removeItem(KEY_EMP);
		this.storageType.removeItem(KEY_LOGGED_USER);
		this.storageType.removeItem(KEY_LOGGED_IN);
	}

	stringifyArray (data: Array<any>) : string {
		return JSON.stringify(data);
	}

	login (data): boolean {
		this.storageType.setItem(KEY_LOGGED_USER, this.stringifyArray(data));
		this.storageType.setItem(KEY_LOGGED_IN, 1);	
		return true;
	}

	isLoggedIn () {
		let loggedIn: number = this.storageType.getItem(KEY_LOGGED_IN);	
		if(loggedIn != null) {
		 	return 1 == loggedIn;
		}
		return false;
	}

	fetchEmpRecords (): Array<any> {
		let empData: string = this.storageType.getItem(KEY_EMP);
		if(empData != null) {
			return JSON.parse(empData);
		}
		return [];
	}

	setNextEmployeeId (next?: boolean) {
		let empId: string = this.storageType.getItem(KEY_NEXT_EMP);

		if(next) {
			if(empId != null) {
				this.storageType.setItem(KEY_NEXT_EMP, +empId + 1);
			}
		}
		else {
			if(empId == null) {
				this.storageType.setItem(KEY_NEXT_EMP, 100005);
			}
		}
	}

	fetchNextId() {
		return this.storageType.getItem(KEY_NEXT_EMP);
	}

	saveEmployee (data) {
		let tempData: string = this.storageType.getItem(KEY_EMP);
		if(tempData != null) {
			let jsonData: Array<any> = JSON.parse(tempData);
			jsonData.push(data);
			this.storageType.setItem(KEY_EMP, this.stringifyArray(jsonData))
			this.setNextEmployeeId(true);
		}
	}

	saveEditEmployee(data) {
		let tempData: string = this.storageType.getItem(KEY_EMP);
		if(tempData != null) {
			let jsonData: Array<any> = JSON.parse(tempData);
			let tempArr = jsonData.filter((item, index) => {
				return item.id != +data.id
			});
			console.log(tempArr);
			tempArr.push(data);
			this.storageType.setItem(KEY_EMP, this.stringifyArray(tempArr))
		}
	}

	deleteEmployee(id) {
		let tempData: string = this.storageType.getItem(KEY_EMP);
		if(tempData != null) {
			let jsonData: Array<any> = JSON.parse(tempData);
			let tempArr = jsonData.filter((item, index) => {
				console.log(+id)
				return item.id != +id
			});
			this.storageType.setItem(KEY_EMP, this.stringifyArray(tempArr))
		}
	}

	fetchEmployee(id) {
		let tempData: string = this.storageType.getItem(KEY_EMP);
		if(tempData != null) {
			let jsonData: Array<any> = JSON.parse(tempData);
			let tempArr = jsonData.filter((item, index) => {
				console.log(+id)
				return item.id == +id
			});
			return tempArr[0];
		}
	}
} 