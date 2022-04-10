import { LoginPage } from './../login/login.page';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email:any;
  password:any;
  engineering: string;

  constructor(private navCtrl: NavController) { }

  SignUp(){
    firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(res=>{
      console.log('response=',res);

      if (this.engineering === 'Faculty') {
        this.navCtrl.navigateForward('tabs/home');
        console.log("go");
      } else if (this.engineering === 'Student') {
        this.navCtrl.navigateForward('home2');
      }

    }, err => {
      let msg;
      switch (err.code) { // SWITCH THE CODE RETURNED TO SEE WHAT MESSAGE YOU'LL DISPLAY
        case "auth/invalid-password":
          msg= 'Password is wrong.';
          break;
  
        case "auth/invalid-email":
          msg= 'Email or password is wrong.';
          break;
      }
      alert(msg);
    });

    
  }

  gotosignin(){
    this.navCtrl.navigateForward('login')
  }

  /*OpenPage(){
    if (this.engineering === 'Admin') {
      this.navCtrl.navigateForward('login');
      console.log("ggooo")
    } else if (this.engineering === 'Student') {
      this.navCtrl.navigateForward('home');
    }
  }*/

  ngOnInit() {
  }

}
