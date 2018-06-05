import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import * as firebase from "firebase";
import Auth = firebase.auth.Auth;
import {AuthService} from "../../Service/auth";
import {LogInPage} from "../log-in/log-in";


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  url: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private inAppBrowser: InAppBrowser,private auth:AuthService) {
  }
  openKitchen(url: string){
    const browser = this.inAppBrowser.create(url,`_self`);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  signOut(){
    this.auth.logout();
    this.navCtrl.setRoot(LogInPage);
    this.navCtrl.popToRoot();
  }

}
