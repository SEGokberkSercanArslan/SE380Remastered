import {Component, ViewChild} from '@angular/core';
import {App, NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import {LogInPage} from "../pages/log-in/log-in";
import {TabsPage} from "../pages/tabs/tabs";
import {AddStagePage} from "../pages/add-stage/add-stage";


@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  rootPage:any = AddStagePage;
  isAuthenticated = false;
  @ViewChild('nav') nav:NavController;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    firebase.initializeApp({
      apiKey: "AIzaSyDGAXfi7Hbo4WXPBZDzPs9rO53Ky-4mFmY",
      authDomain: "recipeapp-a474c.firebaseapp.com"
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user){
        this.isAuthenticated = true;
        this.nav.setRoot(TabsPage);
      }else {
        this.isAuthenticated = false;
        this.nav.setRoot(LogInPage);
      }
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

