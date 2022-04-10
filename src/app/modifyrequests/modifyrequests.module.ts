import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifyrequestsPageRoutingModule } from './modifyrequests-routing.module';

import { ModifyrequestsPage } from './modifyrequests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifyrequestsPageRoutingModule
  ],
  declarations: [ModifyrequestsPage]
})
export class ModifyrequestsPageModule {}
