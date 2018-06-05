import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Recipe} from "../../Objects/Recipe";

/**
 * Generated class for the ShowRecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-recipe',
  templateUrl: 'show-recipe.html',
})
export class ShowRecipePage {

  private recipe:Recipe = this.navParams.get('recipe');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowRecipePage');
  }

}
