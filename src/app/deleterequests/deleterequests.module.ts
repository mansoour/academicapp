import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleterequestsPageRoutingModule } from './deleterequests-routing.module';

import { DeleterequestsPage } from './deleterequests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleterequestsPageRoutingModule
  ],
  declarations: [DeleterequestsPage]
})
export class DeleterequestsPageModule {}
