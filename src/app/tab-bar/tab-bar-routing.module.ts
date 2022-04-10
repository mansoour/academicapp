// tab-bar-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabBarPage } from './tab-bar.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabBarPage,
    children: [
      {
        path: 'home2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home2/home2.module').then(m => m.Home2PageModule)
          }
        ]
      },
      {
        path: 'deletesupject',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../deletesupject/deletesupject.module').then(m => m.DeletesupjectPageModule)
          }
        ]
      },
      {
        path: 'addsupject',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../addsubject/addsubject.module').then(m => m.AddsubjectPageModule)
          }
        ]
      },
      {
        path: 'modify',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../modify/modify.module').then(m => m.ModifyPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../fa-profile/fa-profile.module').then(m => m.FaProfilePageModule)
          }
        ]
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabBarPageRoutingModule { }