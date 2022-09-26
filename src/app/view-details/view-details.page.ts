import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { EmployeeViewModel } from '../ViewModels/EmployeeViewModel';
//import {md5} from 'crypto-md5';
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.page.html',
  styleUrls: ['./view-details.page.scss'],
})
export class ViewDetailsPage implements OnInit {

  Employees:EmployeeViewModel[];
  constructor(private service:EmployeeService) { }

  ngOnInit() {
    this.Employees = [];

this.service.getEmployee(this.service.employeeid).subscribe(res => {
  var response = res as any
console.log(response)


  var Item = new EmployeeViewModel();
  Item.name = response.name;
  Item.surname = response.surname;
  Item.EmployeeNumber = response.employeeNumber
  Item.ManagerID = response.managerID
  Item.AccessRoleID = response.accessRoleID
  Item.dob = response.dob
  Item.profileImage ="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" //md5(response.profileImage.toLowerCase(), 'hex');
  Item.salary = response.salary
this.Employees.push(Item);
console.log(this.Employees)


})

  }
}
