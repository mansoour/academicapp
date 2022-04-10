import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) { }

  deletesubject(){
    this.navCtrl.navigateRoot('deletesupject')
  }

  addsubject(){
    this.navCtrl.navigateRoot('addsubject')
  }

  modify(){
    this.navCtrl.navigateRoot('modify')
  }
}


