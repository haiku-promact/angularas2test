import { Component, OnInit } from "@angular/core";
import { EmployeeSevrice } from "./employee.service";
import { IEmployee } from "./employee";
import { Router } from "@angular/router";

@Component({
    selector:'app-employee-list',
    templateUrl:'./employee-list.component.html',

})

export class EmployeeListComponent implements OnInit{
   pageTitle: string='Employee List';
   errorMessage:string;
   employees:IEmployee[];
   private router: Router;

   public currentEmployee:IEmployee;
   public originalEmployee:IEmployee;
   public dataIsValid: { [key: string]: boolean } = {};
   private messages: string[] = [];
   isDisplayed = false;


   constructor(private employeeService:EmployeeSevrice){}

    ngOnInit(): void {
        this.employeeService.getEmployees()
        .subscribe(employees=>
            this.employees=employees,
    error=>this.errorMessage=<any>error);
    }

    get employee():IEmployee{
        return this.currentEmployee;
    }
    set employee(value:IEmployee){
        this.currentEmployee=value;
        this.originalEmployee=Object.assign({},value);
    }
//Delete Employee
    deleteEmployee():void{
        if(this.employee.employeeId === 0){
           this.onSaveComplete(`${this.employee.firstName} was deleted`);
        }else{
            if(confirm(`Really delete the employee: ${this.employee.firstName}?`)){
                this.employeeService.deleteEmployee(this.employee.employeeId)
                .subscribe(
                    ()=>this.onSaveComplete(`${this.employee.firstName} was deleted`),
                    (error:any)=>this.errorMessage=<any>error
                );
            }
        }
    }
    
    onSaveComplete(message?:string):void{    
        if(message){
            this.addMessage(message)
        }       
        this.reset();
        this.router.navigate(['/employeesList']);      
    }
    reset():void{
           this.dataIsValid=null;
           this.currentEmployee=null;
           this.originalEmployee=null; 
    }
    addMessage(message: string): void {
        let currentDate = new Date();
        this.messages.unshift(message + ' at ' + currentDate.toLocaleString());
    }
}