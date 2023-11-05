import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddreminderPage } from './addreminder.page';

const routes: Routes = [
  {
    path: '',
    component: AddreminderPage
  },
  {
    path: 'add-medicine',
    loadChildren: () => import('./add-medicine/add-medicine.module').then( m => m.AddMedicinePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddreminderPageRoutingModule {}
