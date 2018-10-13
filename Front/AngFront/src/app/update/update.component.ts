import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { emp } from '../emp.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: String;
    Employee: any = {};
    UpdateForm: FormGroup;

    constructor( private empservice: EmployeeService, private router: Router,private route : ActivatedRoute, private fb : FormBuilder )
     {
       this.createForm();
      }
createForm(){
  this.UpdateForm = this.fb.group({
    name: ['', Validators.required],
    age: '',
    dept: ''
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.empservice.getemployeebyID(this.id).subscribe(res => {
        this.Employee = res;
        this.UpdateForm.get('name').setValue(this.Employee.name);
        this.UpdateForm.get('age').setValue(this.Employee.age);
        this.UpdateForm.get('dept').setValue(this.Employee.dept);
      });
    });
  }

  UpdateEmployee(name, age, dept){
      this.empservice.UpdateEmployee(this.id, name, age,dept).subscribe(() => {
        this.router.navigate(['/list']);
      });

    }
}
