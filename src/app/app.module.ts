import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LogInPage} from "../pages/log-in/log-in";
import {SignUpPage} from "../pages/sign-up/sign-up";
import {ForgetPasswordPage} from "../pages/forget-password/forget-password";
import {TabsPage} from "../pages/tabs/tabs";
import {MyFavoriteRecipesPage} from "../pages/my-favorite-recipes/my-favorite-recipes";
import {RecipeListPage} from "../pages/recipe-list/recipe-list";
import {AddStagePage} from "../pages/add-stage/add-stage";
import {AddRecipePage} from "../pages/add-recipe/add-recipe";
import {AngularFireModule} from "angularfire2";
import {FIREBASE_CONFIG} from "./app.firebase.config";
import {AngularFireAuthModule} from "angularfire2/auth";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogInPage,
    SignUpPage,
    ForgetPasswordPage,
    TabsPage,
    MyFavoriteRecipesPage,
    RecipeListPage,
    AddStagePage,
    AddRecipePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LogInPage,
    SignUpPage,
    ForgetPasswordPage,
    TabsPage,
    MyFavoriteRecipesPage,
    RecipeListPage,
    AddStagePage,
    AddRecipePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
