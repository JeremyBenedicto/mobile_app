import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ChartModule } from "../chart/chart.module";
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ChartModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    RouterModule.forChild([{ path: "", component: Tab1Page }])
  ],
  declarations: [Tab1Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab1PageModule {}
