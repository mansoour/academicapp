import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaProfilePage } from './fa-profile.page';

const routes: Routes = [
  {
    path: '',
    component: FaProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaProfilePageRoutingModule {}
