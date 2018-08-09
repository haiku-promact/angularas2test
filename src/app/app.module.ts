import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmployeeModule } from './employee/employee.module';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmployeeData } from './employee/employee-data';
import { EmployeeSearchComponent } from './employee/employee-search.component';




@NgModule({
  declarations: [
    AppComponent,
    EmployeeSearchComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,  
    HttpClientInMemoryWebApiModule.forRoot(
      EmployeeData, { dataEncapsulation: false },
    ),
    ReactiveFormsModule,
    AppRoutingModule,    
    EmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
