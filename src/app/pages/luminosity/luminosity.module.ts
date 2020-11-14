import { ChartModule } from 'angular2-highcharts';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

import { LuminosityPageRoutingModule } from './luminosity-routing.module';
import { LuminosityPage } from './luminosity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LuminosityPageRoutingModule,
    ChartModule
  ],
  declarations: [LuminosityPage]
})
export class LuminosityPageModule {}
