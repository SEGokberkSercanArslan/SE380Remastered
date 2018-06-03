import {Storage} from "@ionic/storage";
import {Injectable} from "@angular/core";
import {Recipe} from "../../Objects/Recipe";


@Injectable()
export class RecipesService{

  constructor(){}

  addRecipe(recipe: {title: string}){
    this.recipeTitle.push(recipe);
  }

  getRecipes(){
return this.recipeTitle.slice();
  }
}
