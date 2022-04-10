import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:any;
  password:any;

  constructor(private navCtrl: NavController) { }

  SignIn(){
    firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(res=>{
      console.log('response=',res);
      this.navCtrl.navigateRoot('home')
    }, err => {
      let msg;
      switch (err.code) { // SWITCH THE CODE RETURNED TO SEE WHAT MESSAGE YOU'LL DISPLAY
        case "auth/wrong-password":
          msg= "Email or Password is wrong.";
          break;
  
        case "auth/user-not-found":
          msg= 'User not found.'
          break;
  
        case "auth/invalid-email":
          msg= 'Email or Password is wrong.';
          break;
      }
      alert(msg);
    });
  }

  ngOnInit() {
  }

  gotosignup(){
    this.navCtrl.navigateForward('signup')
  }

}
