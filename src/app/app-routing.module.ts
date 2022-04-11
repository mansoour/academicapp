import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{
    //path: 'home',
    //loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  //},
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tab-bar/tab-bar.module').then(m => m.TabBarPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./fatabs/fatabs.module').then(m => m.FatabsPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'addsubject',
    loadChildren: () => import('./addsubject/addsubject.module').then( m => m.AddsubjectPageModule)
  },
  {
    path: 'tab-bar',
    loadChildren: () => import('./tab-bar/tab-bar.module').then( m => m.TabBarPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'fa-profile',
    loadChildren: () => import('./fa-profile/fa-profile.module').then( m => m.FaProfilePageModule)
  },
  {
    path: 'deletesupject',
    loadChildren: () => import('./deletesupject/deletesupject.module').then( m => m.DeletesupjectPageModule)
  },
  {
    path: 'modify',
    loadChildren: () => import('./modify/modify.module').then( m => m.ModifyPageModule)
  },
  {
    path: 'addrequests',
    loadChildren: () => import('./addrequests/addrequests.module').then( m => m.AddrequestsPageModule)
  },
  {
    path: 'deleterequests',
    loadChildren: () => import('./deleterequests/deleterequests.module').then( m => m.DeleterequestsPageModule)
  },
  {
    path: 'modifyrequests',
    loadChildren: () => import('./modifyrequests/modifyrequests.module').then( m => m.ModifyrequestsPageModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./inbox/inbox.module').then( m => m.InboxPageModule)
  },
  {
    path: 'myrequest',
    loadChildren: () => import('./myrequest/myrequest.module').then( m => m.MyrequestPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'sendmessage',
    loadChildren: () => import('./sendmessage/sendmessage.module').then( m => m.SendmessagePageModule)
  },
  {
    path: 'fatabs',
    loadChildren: () => import('./fatabs/fatabs.module').then( m => m.FatabsPageModule)
  },
  {
    path: 'fa-inbox',
    loadChildren: () => import('./fa-inbox/fa-inbox.module').then( m => m.FaInboxPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
