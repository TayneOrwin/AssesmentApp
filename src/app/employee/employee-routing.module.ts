import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeePage } from './employee.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeePage
  },
  {
    path: 'create-employee',
    loadChildren: () => import('./create-employee/create-employee.module').then( m => m.CreateEmployeePageModule)
  },
  {
    path: 'update-employee',
    loadChildren: () => import('./update-employee/update-employee.module').then( m => m.UpdateEmployeePageModule)
  },
  {
    path: 'delete-employee',
    loadChildren: () => import('./delete-employee/delete-employee.module').then( m => m.DeleteEmployeePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeePageRoutingModule {}
