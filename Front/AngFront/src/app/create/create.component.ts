import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emp } from '../emp.model';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
createForm: FormGroup;
  constructor( private empservice: EmployeeService, private router: Router, private fb : FormBuilder ) {

    this.createForm = this.fb.group({
      name: ['', Validators.required],
      age: '',
      dept: ''
    });

   }


     addEmployee(name, age, dept) {
       this.empservice.addEmployee(name, age, dept).subscribe(() => {
         this.router.navigate(['/list']);
       });
     }

  ngOnInit() {
  }

}
