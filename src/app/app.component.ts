import { Component } from '@angular/core';
import {App, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {LogInPage} from "../pages/log-in/log-in";
import {SignUpPage} from "../pages/sign-up/sign-up";
import {ForgetPasswordPage} from "../pages/forget-password/forget-password";
import {TabsPage} from "../pages/tabs/tabs";
import {AddStagePage} from "../pages/add-stage/add-stage";
import {MyFavoriteRecipesPage} from "../pages/my-favorite-recipes/my-favorite-recipes";
import {RecipeListPage} from "../pages/recipe-list/recipe-list";
@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  rootPage:any = RecipeListPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

