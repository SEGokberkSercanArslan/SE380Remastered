import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseListObservable} from "angularfire2/database-deprecated";
import { FirebaseProvider } from './../../providers/firebase/firebase';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
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
  recipeItems: FirebaseListObservable<any>;
  newItem = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    this.recipeItems = this.firebaseProvider.getRecipeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeListPage');
  }

  navigateAddRecipe() {
    this.navCtrl.push(AddRecipePage);
  }

  addItem() {
    this.firebaseProvider.addItem(this.newItem);
  }
    removeItem(id) {
      this.firebaseProvider.removeItem(id);
    }

  }

