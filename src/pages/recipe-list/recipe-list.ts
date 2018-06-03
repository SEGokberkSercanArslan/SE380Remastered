import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddRecipePage} from "../add-recipe/add-recipe";
import {RecipesService} from "../../Service/recipes.service";

@IonicPage()
@Component({
  selector: 'page-recipe-list',
  templateUrl: 'recipe-list.html',
})
export class RecipeListPage {
recipes: {title: string} [] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private recipesService : RecipesService) {
  }

/**
  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeListPage');
  }
 */

  ionViewWillEnter(){
    this.recipes = this.recipesService.getRecipes();
  }

  navigateAddRecipe(){
    this.navCtrl.push(AddRecipePage);
  }

}
