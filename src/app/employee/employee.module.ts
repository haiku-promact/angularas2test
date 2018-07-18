import { NgModule } from "@angular/core";
import { EmployeeListComponent } from "./employee-list.component";
import { SharedModule } from "../shared/shared.module";
import { EmployeeSevrice } from "./employee.service";
import { RouterModule } from "@angular/router";

import { EmployeeResolver } from './employee-resolver.service';
import { EmployeeEditComponent } from './employee-edit.component';


@NgModule({
    imports:[
        RouterModule.forChild([
            {path:'',component:EmployeeListComponent},
            {
                path: ':id/edit',
                component: EmployeeListComponent,
                resolve:{employee: EmployeeResolver},               
              },
        ]),
        SharedModule
    ],

    declarations:[
        EmployeeListComponent,
        EmployeeEditComponent
    ],

    providers:[
        EmployeeSevrice,
        EmployeeResolver
    ]

})
export class EmployeeModule{}