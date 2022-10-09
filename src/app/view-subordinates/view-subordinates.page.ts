import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { EmployeeViewModel } from '../ViewModels/EmployeeViewModel';

@Component({
  selector: 'app-view-subordinates',
  templateUrl: './view-subordinates.page.html',
  styleUrls: ['./view-subordinates.page.scss'],
})
export class ViewSubordinatesPage implements OnInit {

  constructor(private service: EmployeeService) { }
Employees: EmployeeViewModel[]

  ngOnInit() {
    this.Employees = [];

this.service.getManagerEmployees(this.service.managerid).subscribe(res => {
  var Employees = res as any[]
  console.log(res)

for (var i=0; i<Employees.length; i++)
{
  var Item = new EmployeeViewModel();
  Item.name = res[i].name;
  Item.surname = res[i].surname;
  Item.EmployeeNumber = res[i].employeeNumber
  Item.ManagerID = res[i].ManagerID
  Item.AccessRoleID = res[i].accessRoleID
  Item.dob = res[i].dob
  Item.profileImage = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" //md5(response.profileImage.toLowerCase(), 'hex');
  Item.salary = res[i].salary
this.Employees.push(Item);

}


})

  }

}
