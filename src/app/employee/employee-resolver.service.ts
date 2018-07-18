import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { IEmployee } from "./employee";
import { EmployeeSevrice } from "./employee.service";

import { of , Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class EmployeeResolver implements Resolve<IEmployee>{
    constructor(private employeeService:EmployeeSevrice,
        private router: Router){ }
        resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<IEmployee> {
        let id = route.params['id'];
        // let id = route.paramMap.get('id');
        if (isNaN(+id)) {
            console.log(`Employee id was not a number: ${id}`);
            this.router.navigate(['/employeeList']);
            return of(null);
        }
        return this.employeeService.getEmployee(+id).pipe(
            map(employee => {
            if (employee) {
                return employee;
            }
            console.log(`Employee was not found: ${id}`);
            this.router.navigate(['/employeeList']);
            return null;
        }),
        catchError(error => {
            console.log(`Retrieval error: ${error}`);
            this.router.navigate(['/employeeList']);
            return of(null);
        }));
    }
}