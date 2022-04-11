import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FatabsPageRoutingModule } from './fatabs-routing.module';

import { FatabsPage } from './fatabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FatabsPageRoutingModule
  ],
  declarations: [FatabsPage]
})
export class FatabsPageModule {}
