import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {IonicStorageModule, Storage} from "@ionic/storage";
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
import {AuthService} from "../Service/auth";
import {RecipeStorageService} from "../Service/RecipeStorageService";


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
    IonicStorageModule.forRoot()
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    RecipeStorageService,
  ]
})
export class AppModule {}
