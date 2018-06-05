import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddRecipePage} from "../add-recipe/add-recipe";
import {RecipeStorageService} from "../../Service/RecipeStorageService";
import {Recipe} from "../../Objects/Recipe";
import {ShowRecipePage} from "../show-recipe/show-recipe";
import {EditRecipePage} from "../edit-recipe/edit-recipe";

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

  private recipeArray:Recipe[] = this.storage.getRecipeFromStorage();

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:RecipeStorageService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeListPage');
  }

  addRecipeToFavorite(recipe:Recipe) {
    if (this.storage.getFavoriteRecipeFromStorage().indexOf(recipe) == -1){
      this.storage.addRecipeToFavoriteStorage(recipe);
    }
  }

  showRecipeDetails(recipe:Recipe){
    this.navCtrl.push(ShowRecipePage,{recipe:recipe})
  }

  navigateAddRecipe(){
    this.navCtrl.push(AddRecipePage);
  }

  editRecipe(recipe:Recipe){
    this.navCtrl.push(EditRecipePage,{recipe:recipe});
  }

}
