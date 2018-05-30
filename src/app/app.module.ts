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

import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {HttpModule} from "@angular/http";


const FirebaseConfig = {
  apiKey: "AIzaSyBmAdOSJiYTCRD9hyfHcQzPLLDiCepuEXQ",
  authDomain: "se380-remastered.firebaseapp.com",
  databaseURL: "https://se380-remastered.firebaseio.com",
  projectId: "se380-remastered",
  storageBucket: "se380-remastered.appspot.com",
  messagingSenderId: "841160187923"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogInPage,
    SignUpPage,
    ForgetPasswordPage,
    TabsPage,
    MyFavoriteRecipesPage,
    RecipeListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    IonicModule.forRoot(MyApp)
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
    RecipeListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider
  ]
})
export class AppModule {}
