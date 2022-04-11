import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: any;
  password: any;

  constructor(
    private navCtrl: NavController,
    private auth: AngularFireAuth,
    private afs: AngularFirestore) { }

  SignIn() {
    this.auth.signInWithEmailAndPassword(this.email, this.password).then(res => {

      this.afs.collection('users', ref => ref.where('email', '==', this.email)).valueChanges().subscribe((res: any) => {
        console.log('user', res);
        if (res[0].engineering === 'Faculty') {
          this.navCtrl.navigateForward('fatabs/home');
          console.log("go");
        } else if (res[0].engineering === 'Student') {
          this.navCtrl.navigateForward('tabs/home2');
        }
      });
    }, err => {
      let msg;
      switch (err.code) { // SWITCH THE CODE RETURNED TO SEE WHAT MESSAGE YOU'LL DISPLAY
        case "auth/wrong-password":
          msg = "Email or Password is wrong.";
          break;

        case "auth/user-not-found":
          msg = 'User not found.'
          break;

        case "auth/invalid-email":
          msg = 'Email or Password is wrong.';
          break;
      }
      alert(msg);
    });
  }

  ngOnInit() {
  }

  gotosignup() {
    this.navCtrl.navigateForward('signup')
  }

}
