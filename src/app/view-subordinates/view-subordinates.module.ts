import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewSubordinatesPageRoutingModule } from './view-subordinates-routing.module';

import { ViewSubordinatesPage } from './view-subordinates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSubordinatesPageRoutingModule
  ],
  declarations: [ViewSubordinatesPage]
})
export class ViewSubordinatesPageModule {}
