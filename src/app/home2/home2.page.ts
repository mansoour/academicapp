import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  deletesubject(){
    this.navCtrl.navigateForward('tabs/deletesupject')
  }

  addsubject(){
    this.navCtrl.navigateForward('tabs/addsupject')
  }

  modify(){
    this.navCtrl.navigateForward('tabs/modify')
  }

}
