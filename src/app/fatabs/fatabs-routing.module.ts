import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FatabsPage } from './fatabs.page';


const routes: Routes = [
  {
    path: 'fatabs',
    component: FatabsPage,
    children: [
      {
        path: 'fa-inbox',
        loadChildren: () => import('../fa-inbox/fa-inbox.module').then(m => m.FaInboxPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FatabsPage
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FatabsPageRoutingModule {}
