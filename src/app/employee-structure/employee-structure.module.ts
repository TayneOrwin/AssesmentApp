import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeStructurePageRoutingModule } from './employee-structure-routing.module';

import { EmployeeStructurePage } from './employee-structure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeStructurePageRoutingModule
  ],
  declarations: [EmployeeStructurePage]
})
export class EmployeeStructurePageModule {}
