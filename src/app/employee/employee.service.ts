import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


import { IEmployee } from './employee';

@Injectable()
export class EmployeeSevrice{
    // private _employeeUrl='./assets/api/employees/employee.json';

    // constructor(private _http: HttpClient,
    //     private http: Http){}

    // getEmployees():Observable<IEmployee[]>{
    //     return this._http.get<IEmployee[]>(this._employeeUrl).pipe(
    //     tap(data => console.log('All:' +JSON.stringify(data))),
    //     catchError(this.handleError));
    // }

    // getEmployee(id:number){
    //     return this.getEmployees().pipe(map((employees:IEmployee[])=>employees.find(e=>e.employeeId===id)));
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

    
            
    // }

    private baseUrl ='api/employees';

    constructor(private http:Http){}

    getEmployees():Observable<IEmployee[]>{
        return this.http.get(this.baseUrl).pipe(
            map(this.extractData),
            tap(data=>console.log('getProducts: '+JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
    getEmployee(id:number):Observable<IEmployee>{
        if (id===0){
            return of(this.initializeEmployee());
        };
        const url= `${this.baseUrl}/${id}`;
        return this.http.get(url).pipe(
            map(this.extractData),
            tap(data=>console.log('getEmployee: '+JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
    private handleError(error:Response):Observable<any>{
       console.error(error);
        return Observable.throw(error.json().error||'Server error');
    }
    private extractData(response:Response){
        let body=response.json();
        return body.data||{};
    }

    deleteEmployee(id: number): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const url = `${this.baseUrl}/${id}`;
        return this.http.delete(url, options).pipe(
            tap(data => console.log('deleteEmployee: ' + JSON.stringify(data)))
            ,catchError(this.handleError)
        );
    }

    initializeEmployee():IEmployee{
        return{
            employeeId:0,
            firstName:null,
            lastName:null,
            email:null,
            contactNumber:null,
            address:null,
            userName:null,
            password:null,
            gender:null,
            qualification:null,
            experience:null,
            language:null
        };
    }

}