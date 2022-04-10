import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  gotosignup(){
    this.navCtrl.navigateForward('signup')
  }

  gotologin(){
  this.navCtrl.navigateForward('login')
}
}
