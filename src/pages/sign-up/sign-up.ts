import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {AuthService} from "../../Service/auth";
import {NgForm} from "@angular/forms";

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  constructor(public navCtrl: NavController,
              private authService:AuthService,
              private loadingCtrl:LoadingController,
              private alertCtrl:AlertController) {

  }

  onSignUp(form: NgForm){
    const loading = this.loadingCtrl.create({
      content:"Signing You Up ..."
    });
    loading.present();
    this.authService.signUp(form.value.email,form.value.password)
      .then(data => {loading.dismiss();})
      .catch(error => {loading.dismiss();
      const alert = this.alertCtrl.create({
        title:"Sign Up Failed",
        message: error.message,
        buttons:["Understand"]
      });
      alert.present();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

}
