import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddrequestsPage } from './addrequests.page';

const routes: Routes = [
  {
    path: '',
    component: AddrequestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddrequestsPageRoutingModule {}
