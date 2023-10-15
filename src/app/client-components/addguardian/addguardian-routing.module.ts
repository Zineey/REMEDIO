import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddguardianPage } from './addguardian.page';

const routes: Routes = [
  {
    path: '',
    component: AddguardianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddguardianPageRoutingModule {}
