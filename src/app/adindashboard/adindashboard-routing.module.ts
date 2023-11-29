import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdindashboardPage } from './adindashboard.page';

const routes: Routes = [
  {
    path: '', 
    
    component: AdindashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdindashboardPageRoutingModule {}
