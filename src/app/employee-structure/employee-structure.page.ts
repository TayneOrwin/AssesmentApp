import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EmployeeService } from '../services/employee.service';
import { ViewSubordinatesPage } from '../view-subordinates/view-subordinates.page';
import { ManagerViewModel } from '../ViewModels/ManagerViewModel';

@Component({
  selector: 'app-employee-structure',
  templateUrl: './employee-structure.page.html',
  styleUrls: ['./employee-structure.page.scss'],
})
export class EmployeeStructurePage implements OnInit {

  Employees:ManagerViewModel[];


  constructor(public modalController: ModalController, private router : Router, private service: EmployeeService) { }

  ngOnInit():void
   {
this.Employees = [];

this.service.getManagers().subscribe(res => {
  var Employees = res as any[]
  console.log(res)

for (var i=0; i<Employees.length; i++)
{
  var Item = new ManagerViewModel();
Item.ManagerID = res[i].managerID;
  Item.name = res[i].name;
  Item.surname = res[i].surname;
  Item.dob = res[i].dob
  Item.profileImage =   "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" //md5(response.profileImage.toLowerCase(), 'hex');
  Item.salary = res[i].salary
this.Employees.push(Item);


}


})





  }

async viewSub(managerID: number)
{
  this.service.managerid = managerID
  const modal = await this.modalController.create({
    component: ViewSubordinatesPage
  })
  return await modal.present();
}



  searchRequest(event)
  {
  var empsearchtxt = event.target.value;
  console.log(empsearchtxt); // what is typed
  //console.log(event);
  
  this.Employees = [];
  
  this.service.SearchManager(empsearchtxt).subscribe(res => {
  
      var Employees = res as any;
  
     for(var i = 0; Employees.length; i++)
    {
      var Item = new ManagerViewModel();
  
      var Item = new ManagerViewModel();
  Item.name = res[i].name;
  Item.surname = res[i].surname;

  Item.ManagerID = res[i].ManagerID
 
  Item.dob = res[i].dob
  Item.profileImage = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" //md5(response.profileImage.toLowerCase(), 'hex');
  Item.salary = res[i].salary
this.Employees.push(Item);
    }
  
    console.log(Employees);
  return;
    
  
  });
  
  }
}