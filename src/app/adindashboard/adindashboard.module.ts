import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdindashboardPageRoutingModule } from './adindashboard-routing.module';

import { AdindashboardPage } from './adindashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdindashboardPageRoutingModule
  ],
  declarations: [AdindashboardPage]
})
export class AdindashboardPageModule {}
