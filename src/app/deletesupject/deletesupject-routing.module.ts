import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletesupjectPage } from './deletesupject.page';

const routes: Routes = [
  {
    path: '',
    component: DeletesupjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletesupjectPageRoutingModule {}
