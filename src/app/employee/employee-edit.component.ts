import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeSevrice } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  pageTitle: string='Employee Edit';
  errorMessage: string;

  private currentEmployee: IEmployee;
  private originalEmployee: IEmployee;
  private dataIsValid: { [key: string]: boolean } = {};

  get isDirty():boolean{
    return JSON.stringify(this.originalEmployee) !== JSON.stringify(this.currentEmployee);
  }

  get employee():IEmployee{
    return this.currentEmployee;
  }

  set employee(value:IEmployee){
    this.currentEmployee=value;
    this.originalEmployee=Object.assign({},value);
  }

  //employee:IEmployee;

  constructor(private employeeService: EmployeeSevrice,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit():void {
    this.route.data.subscribe(data=>{
      this.onEmployeeRetrieved(data['employee']);
    });
  } 

  onEmployeeRetrieved(employee:IEmployee):void{
    this.employee=employee;

    if(this.employee.employeeId===0){
      this.pageTitle='Add Employee';
    }else{
      this.pageTitle=`Edit Employee: ${this.employee.firstName}`;
    }
  }
  
  deleteEmployee():void{
    if(this.employee.employeeId===0){
      this.onSaveComplete(`${this.employee.firstName} was deleted`);
    }else{
      if(confirm(`Really delete the employee: ${this.employee.firstName} was deleted`),
    error);
     )
    }
  }

}
