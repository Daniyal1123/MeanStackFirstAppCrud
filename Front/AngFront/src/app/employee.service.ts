import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
// import ( emp ) from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 url = 'http://localhost:5000';
  constructor( private http : HttpClient) { }

  getemployee(){
    console.log('in func')
    return this.http.get('http://localhost:5000/issues')
  }

getemployeebyID(id)
{
  return this.http.get(`http://localhost:5000/issues/${id}`);
}

addEmployee(name, age, dept ){
   const emp  = {
    name: name,
     age : age,
     dept: dept
    };
    return this.http.post('http://localhost:5000/issues/add',emp);
  }
//
 UpdateEmployee(id,name, age,dept )
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
     const emp = {
       name:name,
       age :age,
       dept : dept
      };
      console.log(emp)
       return this.http.post(`http://localhost:5000/issues/update/${id}`,emp,httpOptions);
     }

 DeleteUser(id){
 return this.http.get(`http://localhost:5000/issues/delete/${id}`);
  }
}
