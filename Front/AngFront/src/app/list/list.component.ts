import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { emp } from '../emp.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  Employee : emp[];
  constructor( private empservice: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.getemployee()
     }

getemployee()
{
  this.empservice.getemployee().subscribe((Employee : emp[]) => {
    this.Employee = Employee;
     });
}

editemp(id) {
     this.router.navigate([`/update/${id}`]);
}

DeleteUser(id){
  this.empservice.DeleteUser(id).subscribe(() => {
     this.getemployee();
   });
 }
}
