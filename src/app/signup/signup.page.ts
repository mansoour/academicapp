import { LoginPage } from './../login/login.page';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupForm: FormGroup;


  constructor(
    private navCtrl: NavController,
    private afs: AngularFirestore,
    private auth: AngularFireAuth
  ) { }

  SignUp() {
    if (this.signupForm.invalid) {
      return;
    }

    this.auth.createUserWithEmailAndPassword(this.signupForm.value.email, this.signupForm.value.password).then(res => {
      this.createUserOnFirestore();
      if (this.signupForm.value.engineering === 'Faculty') {
        this.navCtrl.navigateForward('fatabs/home2');
        console.log("go");
      } else if (this.signupForm.value.engineering === 'Student') {
        this.navCtrl.navigateForward('tabs/home2');
      }

    }, err => {
      let msg;
      switch (err.code) { // SWITCH THE CODE RETURNED TO SEE WHAT MESSAGE YOU'LL DISPLAY
        case "auth/invalid-password":
          msg = 'Password is wrong.';
          break;

        case "auth/invalid-email":
          msg = 'Email or password is wrong.';
          break;
      }
      alert(msg);
    });


  }

  /**
   * create user on firestore
   */
  async createUserOnFirestore() {


    const payload = this.signupForm.value;
    delete payload.password;
    try {
      this.afs.collection('users').add(payload)
      console.log("Document written with ID: ");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  gotosignin() {
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
    this.signupForm = new FormGroup({
      name: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl(''),
      academicId: new FormControl(''),
      engineering: new FormControl(''),
      collage: new FormControl(''),
      department: new FormControl('')
    });
  }

}
