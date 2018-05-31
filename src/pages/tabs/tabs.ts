import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from "ionic-angular";

import {RecipeListPage} from "../../../../SE380Remastered/src/pages/recipe-list/recipe-list";
import {MyFavoriteRecipesPage} from "../../../../SE380Remastered/src/pages/my-favorite-recipes/my-favorite-recipes";
import {HomePage} from "../../../../SE380Remastered/src/pages/home/home";

import {AngularFireAuth} from "angularfire2/auth";

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = RecipeListPage;
  tab3Root: any = MyFavoriteRecipesPage;


  constructor(private afAuth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid) {
        this.toast.create({
          message: 'Welcome to Cook Organizer, ${data.email}',
          duration: 3000
        }).present();
      }
      else {
        this.toast.create({
          message: 'Could not find authentication details.',
          duration: 3000
        }).present();
      }
    });
  }
}
