import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddguardianPageRoutingModule } from './addguardian-routing.module';

import { AddguardianPage } from './addguardian.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddguardianPageRoutingModule
  ],
  declarations: [AddguardianPage]
})
export class AddguardianPageModule {}
