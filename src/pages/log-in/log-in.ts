import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {SignUpPage} from "../sign-up/sign-up";
import {ForgetPasswordPage} from "../forget-password/forget-password";
import {TabsPage} from "../tabs/tabs";
import {AuthService} from "../../Service/auth";
import {NgForm} from "@angular/forms";

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

  constructor(public navCtrl: NavController,
              private authService:AuthService,
              private loadingCtrl:LoadingController,
              private alertCtrl:AlertController) {
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

  onSignin(form:NgForm){
    const loading = this.loadingCtrl.create({
      content:"Signing you in ..."
    });
    loading.present();
    this.authService.signin(form.value.email,form.value.password)
      .then(data => {loading.dismiss();})
      .catch( error => {loading.dismiss();
      const alert = this.alertCtrl.create({
        title:"Sign In Failed",
        message:error.message,
        buttons:["Understand"]
      });
      alert.present();
      });
  }

}
