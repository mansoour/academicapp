import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaProfilePageRoutingModule } from './fa-profile-routing.module';

import { FaProfilePage } from './fa-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaProfilePageRoutingModule
  ],
  declarations: [FaProfilePage]
})
export class FaProfilePageModule {}
