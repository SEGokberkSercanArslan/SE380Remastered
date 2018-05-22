import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SignUpPage} from "../sign-up/sign-up";
import {ForgetPasswordPage} from "../forget-password/forget-password";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the LogInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogInPage');
  }

  navigateSignUpPage(){
    this.navCtrl.push(SignUpPage);
  }

  navigateForgetPasswordPage(){
    this.navCtrl.push(ForgetPasswordPage);
  }

  navigateHomePage(){
    //Authentication will add later!
    this.navCtrl.push(TabsPage);
  }

}
