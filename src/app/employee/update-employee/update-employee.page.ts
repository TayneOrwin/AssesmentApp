import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { EmployeeService } from 'src/app/services/employee.service';
import { AccessRoleViewModel } from 'src/app/ViewModels/AccessRoleViewModel';
import { EmployeeViewModel } from 'src/app/ViewModels/EmployeeViewModel';
import { ManagerViewModel } from 'src/app/ViewModels/ManagerViewModel';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.page.html',
  styleUrls: ['./update-employee.page.scss'],
})
export class UpdateEmployeePage implements OnInit {

  FormInput : FormGroup = new FormGroup({
    Name : new FormControl("", Validators.required),
    Surname : new FormControl("", Validators.required),
    Salary : new FormControl("", Validators.required ), // ask group about email
    Date : new FormControl("", Validators.required),
    AccessRole : new FormControl("", Validators.required),
    Manager : new FormControl("", Validators.required)

  });
AccessRoleValue: any = ""
ManagerValue: any = ""

  AccessRole : AccessRoleViewModel[];
Manager: ManagerViewModel[];
roleID:number;
managerID: number;
  constructor(public modalController:ModalController,private service : EmployeeService, private alertCtrl : AlertController) { }

  ngOnInit():void
{
    this.AccessRole = [];
this.Manager = [];
this.FormInput.setValue({
  Name : this.service.toUpdate.name,
  Surname :this.service.toUpdate.surname,
  Salary: this.service.toUpdate.salary,
  Date: this.service.toUpdate.dob,
  AccessRole: "",
  Manager: ""

});


this.service.getAccessRoles().subscribe(res => {
  var roles = res as any[];
  
  for (var i =0; i < roles.length; i++)
  {
    var item = new AccessRoleViewModel();
    item.accessRoleID = res[i].accessRoleID;
    item.roleDescription = res[i]. roleDescription
    this.AccessRole.push(item);
    
    
  }
  })

  this.service.getManagers().subscribe(res => {

    var Managers = res as any[];
    console.log(res)

    for (var i = 0; i < Managers.length; i++)
    {
      var Item = new ManagerViewModel();
      Item.ManagerID = res[i].managerID
      Item.name = res[i].name

      this.Manager.push(Item);
    }


  })





  }







  async confirmAlert()
{

  if (this.FormInput.valid == false)
  {
    const alert = await this.alertCtrl.create({
      header: 'Invalid',
      message: 'Please type in valid details',
      buttons:[{
        cssClass: 'alertButton',
        text: 'OK'
      }]
    });
    await alert.present()
    return;
  }

  var access  = this.FormInput.value.AccessRole;

  this.service.GetIdByAccessRole(this.AccessRoleValue).subscribe(res => {
    var id = res as number;
    console.log(res)
    this.roleID = id;



    var manager  = this.FormInput.value.Manager;

    this.service.GetIdByManager(this.ManagerValue).subscribe(res => {
      var id = res as number;
      console.log(res)
      this.managerID= id;
      var Employee = new EmployeeViewModel;
      Employee.AccessRoleID = this.roleID
      Employee.ManagerID = this.managerID
      Employee.dob = this.FormInput.value.Date;
      Employee.name = this.FormInput.value.Name;
      Employee.profileImage = "";
      Employee.surname = this.FormInput.value.Surname;
      Employee.salary = this.FormInput.value.Salary;
      console.log(Employee)
      this.service.updateEmployees(this.service.employeeid,Employee).subscribe(res => {})
    this.success();
    this.dismiss();





    })
  })






  
}



async success()
{
  const alert = await this.alertCtrl.create({
    header: 'Success',
    message: 'Employee Updated Succesfully',
    buttons:[{
      cssClass: 'alertButton',
      text: 'OK'
    }]
  });
  await alert.present()
  return;
}

  
  dismiss()
  {
    this.modalController.dismiss();
  }

}
