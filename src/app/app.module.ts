import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmployeeData } from './employee/employee-data';




import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeModule } from './employee/employee.module';
import { AppRoutingModule } from './app-routing.module';
//import { EmployeeListComponent } from './employee/employee-list.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    HttpModule,
    InMemoryWebApiModule.forRoot(EmployeeData, { delay: 1000 }),
    ReactiveFormsModule,
    AppRoutingModule,    
    EmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
