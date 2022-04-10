//import { AngularFireModule } from '@angular/fire';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {initializeApp} from 'firebase/app'


const firebaseConfig = {
  apiKey: "AIzaSyAwjfViFxW1vZmfr-tyOms4PkZIef7aMV8",
  authDomain: "academic-6c207.firebaseapp.com",
  projectId: "academic-6c207",
  storageBucket: "academic-6c207.appspot.com",
  messagingSenderId: "627305616538",
  appId: "1:627305616538:web:6df10602194096db49fb23",
  measurementId: "G-4VP7EEEJWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
