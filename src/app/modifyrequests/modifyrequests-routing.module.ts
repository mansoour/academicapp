import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifyrequestsPage } from './modifyrequests.page';

const routes: Routes = [
  {
    path: '',
    component: ModifyrequestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifyrequestsPageRoutingModule {}
