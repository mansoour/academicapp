import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleterequestsPage } from './deleterequests.page';

const routes: Routes = [
  {
    path: '',
    component: DeleterequestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleterequestsPageRoutingModule {}
