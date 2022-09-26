import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSubordinatesPage } from './view-subordinates.page';

const routes: Routes = [
  {
    path: '',
    component: ViewSubordinatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSubordinatesPageRoutingModule {}
