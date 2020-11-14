import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChartModule } from 'angular2-highcharts';

import { HumidityPageRoutingModule } from './humidity-routing.module';
import { HumidityPage } from './humidity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HumidityPageRoutingModule,
    ChartModule
  ],
  declarations: [HumidityPage]
})
export class HumidityPageModule {}
