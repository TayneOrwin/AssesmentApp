import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeViewModel } from '../ViewModels/EmployeeViewModel';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  toUpdate : EmployeeViewModel;
  toDelete : EmployeeViewModel;
  toUpdateName : string;
  employeeid : number;
  managerid :number;



public getEmployees()
{
return this.http.get('https://localhost:5001/api/Employee/GetAllEmployees');
}

public getEmployee(id:number)
{
  return this.http.get('https://localhost:5001/api/Employee/GetEmployeeById?id='+ id)
}

public addEmployee(employee : EmployeeViewModel)
{
  return this.http.post('https://localhost:5001/api/Employee/AddEmployee', employee)
}

public updateEmployees(id : number, Employee: EmployeeViewModel) 
{
  return this.http.put('https://localhost:5001/api/Employee/UpdateEmployee?id=' + id, Employee)
}

public deleteEmployee(id : number)
{
  return this.http.delete('https://localhost:5001/api/Employee/DeleteEmployee?id=' + id)
}
public SearchEmployee(name : string)
{
  return this.http.get('https://localhost:5001/api/Employee/SearchEmployee?name='+ name)
}
public SearchManager(name : string)
{
  return this.http.get('https://localhost:5001/api/Manager/SearchManager?name='+ name)
}

public getIdByFullname(name : string, surname : string)
{
  return this.http.get('https://localhost:5001/api/Employee/GetIdByFullname?name=' + name +'&surname=' + surname)
}

public getAccessRoles()
{
  return this.http.get('https://localhost:5001/api/AccessRole/GetAllRoles');
}

public getManagers()
{
  return this.http.get('https://localhost:5001/api/Manager/GetAllManagers');
}

public getManagerEmployees(id:number)
{
  return this.http.get('https://localhost:5001/api/Employee/GetManagerEmployees?id=+'+id);
}


public GetIdByAccessRole(Title : string)
{
  return this.http.get('https://localhost:5001/api/Employee/GetIdByAccessRole?role=' + Title)
}

public GetIdByManager(Title : string)
{
  return this.http.get('https://localhost:5001/api/Employee/GetIdByManager?name=' + Title)
}




}