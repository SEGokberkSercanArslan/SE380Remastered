import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddRecipePage} from "../add-recipe/add-recipe";
import {RecipeStorageService} from "../../Service/RecipeStorageService";

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

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:RecipeStorageService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeListPage');
  }

  navigateAddRecipe(){
    this.navCtrl.push(AddRecipePage);
  }

}
