import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'client/index',
    pathMatch: 'full'
  },

  {
    path: 'client/index',
    loadChildren: () => import('./client-components/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'client/addreminder',
    loadChildren: () => import('./client-components/addreminder/addreminder.module').then( m => m.AddreminderPageModule)
  },
  {
    path: 'client/addguardian',
    loadChildren: () => import('./client-components/addguardian/addguardian.module').then( m => m.AddguardianPageModule)
  },
  {
    path: 'client/badges',
    loadChildren: () => import('./client-components/badges/badges.module').then( m => m.BadgesPageModule)
  },
  {
    path: 'client/plant',
    loadChildren: () => import('./client-components/plant/plant.module').then( m => m.PlantPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
