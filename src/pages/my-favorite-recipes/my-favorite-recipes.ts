import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RecipeStorageService} from "../../Service/RecipeStorageService";
import {Recipe} from "../../Objects/Recipe";
import {ShowRecipePage} from "../show-recipe/show-recipe";

/**
 * Generated class for the MyFavoriteRecipesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-favorite-recipes',
  templateUrl: 'my-favorite-recipes.html',
})
export class MyFavoriteRecipesPage implements OnInit{

  private favorite:Recipe[]= this.storage.getFavoriteRecipeFromStorage();

  constructor(public navCtrl: NavController, public navParams: NavParams ,private storage:RecipeStorageService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyFavoriteRecipesPage');
  }

  showRecipeDetails(recipe:Recipe){
    this.navCtrl.push(ShowRecipePage,{recipe:recipe})
  }

  ngOnInit(): void {
  }

}
