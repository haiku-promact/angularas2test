import { Component } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {

  pageTitle:string= 'Employee Edit';
  errorMessage:string;

  employee:IEmployee;

  constructor(private employeeService: EmployeeService) { }

  employees=this.employeeService.getEmployees();
}
