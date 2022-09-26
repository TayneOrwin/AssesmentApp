import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EmployeeService } from '../services/employee.service';
import { ViewDetailsPage } from '../view-details/view-details.page';
import { EmployeeViewModel } from '../ViewModels/EmployeeViewModel';
import { CreateEmployeePage } from './create-employee/create-employee.page';
import { DeleteEmployeePage } from './delete-employee/delete-employee.page';
import { UpdateEmployeePage } from './update-employee/update-employee.page';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage implements OnInit {

Employees:EmployeeViewModel[];


  constructor(public modalController: ModalController, private router : Router, private service: EmployeeService) { }

  ngOnInit():void
   {
this.Employees = [];

this.service.getEmployees().subscribe(res => {
  var Employees = res as any[]
  console.log(res)

for (var i=0; i<Employees.length; i++)
{
  var Item = new EmployeeViewModel();
  Item.name = res[i].name;
  Item.surname = res[i].surname;
  Item.EmployeeNumber = res[i].employeeNumber
  Item.ManagerID = res[i].ManagerID
  Item.AccessRoleID = res[i].AccessRoleID
  Item.dob = res[i].dob
  Item.profileImage = res[i].profileImage
  Item.salary = res[i].salary
this.Employees.push(Item);

}


})





  }


  searchRequest(event)
  {
  var empsearchtxt = event.target.value;
  console.log(empsearchtxt); // what is typed
  //console.log(event);
  
  this.Employees = [];
  
  this.service.SearchEmployee(empsearchtxt).subscribe(res => {
  
      var Employees = res as any;
  
     for(var i = 0; Employees.length; i++)
    {
      var Item = new EmployeeViewModel();
  
      var Item = new EmployeeViewModel();
  Item.name = res[i].name;
  Item.surname = res[i].surname;
  Item.EmployeeNumber = res[i].employeeNumber
  Item.ManagerID = res[i].ManagerID
  Item.AccessRoleID = res[i].AccessRoleID
  Item.dob = res[i].dob
  Item.profileImage = res[i].profileImage
  Item.salary = res[i].salary
this.Employees.push(Item);
    }
  
    console.log(Employees);
  return;
    
  
  });
  
  }


  async DeleteModal(employee : EmployeeViewModel) {

    this.service.getIdByFullname(employee.name, employee.surname).subscribe(res => {

     var id = res as any; 
     this.service.employeeid = id;
   }); // get selected employee id

   this.service.toDelete = employee;




   



   const modal = await this.modalController.create({
     component: DeleteEmployeePage
   })
   return await modal.present();
 }






 async ViewDetails(employeeID : number) {


 this.service.employeeid = employeeID




 



 const modal = await this.modalController.create({
   component: ViewDetailsPage
 })
 return await modal.present();
}








  async create() {
    const modal = await this.modalController.create({
      component: CreateEmployeePage
    })
    return await modal.present();
  }



  async update(id:number,employee:EmployeeViewModel) {
    this.service.employeeid = id
    this.service.toUpdate = employee
    const modal = await this.modalController.create({
      component: UpdateEmployeePage
    })
    return await modal.present();
  }


}




