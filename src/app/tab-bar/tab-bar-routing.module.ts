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
        path: 'inbox',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../inbox/inbox.module').then(m => m.InboxPageModule)
          }
        ]
      },
      {
        path: 'myrequest',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../myrequest/myrequest.module').then(m => m.MyrequestPageModule)
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