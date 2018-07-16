import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  formVar:FormGroup;

  qualification;
  experience;
  lang:[
    {languageName : string , isEnable : boolean},
    {languageName : string , isEnable : boolean},
    {languageName : string , isEnable : boolean},
    {languageName : string , isEnable : boolean},
    {languageName : string , isEnable : boolean}

  ];

  model:Employee;

  constructor(private fb:FormBuilder) { }

  ngOnInit():void {

    this.experience=['0.5 year','1 year','1.5 year','2 year','2.5 year'];
    this.qualification=['B.E','M.E','BCA','MCA'];
    this.lang=
            [
                {languageName : "C/C++",isEnable : true},
                {languageName : "Java",isEnable  : true},
                {languageName : "C#",isEnable  : false},
                {languageName : "PHP",isEnable  : false},
                {languageName : "Pyphon",isEnable  : false},
            ];
    // this.model.lang.push("C/C++");
    // this.model.lang.push("Java");

     this.model = new Employee('','','','','','','','','','',[]);

  }

  onChange(langu:string, isChecked:boolean)
   {
     if(isChecked)
     {
       this.model.lang.push(langu);
     }
     else{
       let index =this.model.lang.indexOf(langu);
       this.model.lang.splice(index,1);
     }
   }
  onSubmit(){
      console.log(this.model);
  }

}
