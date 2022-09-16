import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeStructurePage } from './employee-structure.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeStructurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeStructurePageRoutingModule {}
