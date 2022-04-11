import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaInboxPageRoutingModule } from './fa-inbox-routing.module';

import { FaInboxPage } from './fa-inbox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaInboxPageRoutingModule
  ],
  declarations: [FaInboxPage]
})
export class FaInboxPageModule {}
