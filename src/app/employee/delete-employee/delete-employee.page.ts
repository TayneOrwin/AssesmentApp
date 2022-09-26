import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.page.html',
  styleUrls: ['./delete-employee.page.scss'],
})
export class DeleteEmployeePage implements OnInit {

  constructor(public modalController: ModalController, private service : EmployeeService, private alertCtrl : AlertController ) { }

id : number;

  ngOnInit() {

console.log(this.service.employeeid); // doesnt work in init
  }
  
  async confirmAlert(){
  
  this.service.deleteEmployee(this.service.employeeid).subscribe(res => {});


    const alert = await this.alertCtrl.create({
      header: 'Success',
      message: 'Deletion Succeeded.',
      buttons:[{
        cssClass: 'alertButton',
        text: 'OK'
      }]
    });
    this.dismiss();
    await alert.present();
    
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
