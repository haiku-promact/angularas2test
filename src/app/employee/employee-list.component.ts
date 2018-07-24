import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "./employee.service";
import { IEmployee } from "./employee";
//import { Router } from "@angular/router";

@Component({
    selector:'app-employee-list',
    templateUrl:'./employee-list.component.html',

})

export class EmployeeListComponent implements OnInit{
    pageTitle: string='Employee List';
    errorMessage:string;

    employees: IEmployee[];

    constructor( private _employeeService:EmployeeService){}

    ngOnInit(): void {
        this._employeeService.getEmployees()
            .subscribe(employees => this.employees=employees);            
        
    } 
}