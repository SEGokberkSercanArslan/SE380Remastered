import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseServiceProvider} from "../../providers/firebase-service/firebase-service";
import {FirebaseListObservable} from "angularfire2/database";
import {AddRecipePage} from "../add-recipe/add-recipe";


/**
 * Generated class for the RecipeListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipe-list',
  templateUrl: 'recipe-list.html',
})
export class RecipeListPage {
  recipeItems: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseService: FirebaseServiceProvider) {
    this.recipeItems = this.firebaseService.getRecipeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeListPage');
  }

  navigateAddRecipe() {
    this.navCtrl.push(AddRecipePage);
  }
    removeItem(id) {
      this.firebaseService.removeRecipeItem(id);
    }

  }

