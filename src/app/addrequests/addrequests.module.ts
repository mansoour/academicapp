import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddrequestsPageRoutingModule } from './addrequests-routing.module';

import { AddrequestsPage } from './addrequests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddrequestsPageRoutingModule
  ],
  declarations: [AddrequestsPage]
})
export class AddrequestsPageModule {}
