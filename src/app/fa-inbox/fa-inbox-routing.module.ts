import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaInboxPage } from './fa-inbox.page';

const routes: Routes = [
  {
    path: '',
    component: FaInboxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaInboxPageRoutingModule {}
