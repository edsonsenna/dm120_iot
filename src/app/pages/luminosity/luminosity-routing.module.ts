import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LuminosityPage } from './luminosity.page';

const routes: Routes = [
  {
    path: '',
    component: LuminosityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LuminosityPageRoutingModule {}
