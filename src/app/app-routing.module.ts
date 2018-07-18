import { EmployeeListComponent } from "./employee/employee-list.component";

import { EmployeeComponent } from "./employee/employee.component";

import { RouterModule } from "@angular/router";

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: 'employeeAdd' ,component:EmployeeComponent},
      {path: 'employeeList' ,component:EmployeeListComponent}
    ])
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
