import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


import { IEmployee } from './employee';

@Injectable()
export class EmployeeService{
     employeedata: any[]= [{
        "employeeId":1,
        "firstName":"Haiku",
        "lastName":"Thakkar",
        "email":"haiku@promactinfo.com",
        "contactNumber":9876543210,
        "address":"5,asd,vadodadra",
        "userName":"haikuT",
        "password":"qwerty",
        "gender":"female",
        "qualification":"B.E",
        "experience":"1.5 year",
        "language":"C/C++"
    },
    {
        "employeeId":2,
        "firstName":"Jhon",
        "lastName":"Doe",
        "email":"jhon@promactinfo.com",
        "contactNumber":986543210,
        "address":"9,qwe,vadodadra",
        "userName":"jhonD",
        "password":"qwerty12345",
        "gender":"male",
        "qualification":"M.E",
        "experience":"2 year",
        "language":"C/C++,PHP"
    },
    {
        "employeeId":3,
        "firstName":"Hammerson",
        "lastName":"Rake",
        "email":"hammerson@promactinfo.com",
        "contactNumber":6589543210,
        "address":"5,asd,L.A",
        "userName":"R.hamson",
        "password":"notyourbusiness",
        "gender":"male",
        "qualification":"MCA",
        "experience":"1 year",
        "language":"C/C++,JAVA,PHP"
    }];

    constructor(){}

    getEmployees() :Observable<IEmployee[]>{
        return of (this.employeedata);
    }

    getEmployee(id:number){
        return
    }

    // getEmployees():Observable<IEmployee[]>{
    //     return this._http.get<IEmployee[]>(this._employeeUrl).pipe(
    //     tap(data => console.log('All:' +JSON.stringify(data))),
    //     catchError(this.handleError));
    // }

    // getEmployee(id:number){
    //     return this.getEmployees().pipe(
    //         map((employees:IEmployee[])=>
    //         employees.find(e=>e.employeeId===id)));
    // }

    // private handleError(err:HttpErrorResponse){
    //     let errorMessage='';

    //     if(err.error instanceof Error){
    //         errorMessage=`An error occourred: ${err.error.message}`;
    //     }
    //     else{
    //         errorMessage=`Server returned code: ${err.status},error message is: ${err.message}`;

    //     }
    //     console.error(errorMessage);
    //     return Observable.throw(errorMessage);
    // }   
            
}
