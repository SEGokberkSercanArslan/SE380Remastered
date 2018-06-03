import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {SignUpPage} from "../sign-up/sign-up";
import {ForgetPasswordPage} from "../forget-password/forget-password";
import {TabsPage} from "../tabs/tabs";
import {AuthService} from "../../Service/auth";
import {NgForm} from "@angular/forms";
import {RecipeStorageService} from "../../Service/RecipeStorageService";
import {Recipe} from "../../Objects/Recipe";

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
export class LogInPage implements OnInit{

  constructor(public navCtrl: NavController,
              private authService:AuthService,
              private loadingCtrl:LoadingController,
              private alertCtrl:AlertController,
              private storageService:RecipeStorageService) {
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
      .then(data => {loading.dismiss();this.navCtrl.push(TabsPage)})
      .catch( error => {loading.dismiss();
      const alert = this.alertCtrl.create({
        title:"Sign In Failed",
        message:error.message,
        buttons:["Understand"]
      });
      alert.present();
      });
  }

  ngOnInit(): void {
    this.storageService.fetchRecipes();
  }

}
