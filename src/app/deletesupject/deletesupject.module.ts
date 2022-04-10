import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletesupjectPageRoutingModule } from './deletesupject-routing.module';

import { DeletesupjectPage } from './deletesupject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletesupjectPageRoutingModule
  ],
  declarations: [DeletesupjectPage]
})
export class DeletesupjectPageModule {}
