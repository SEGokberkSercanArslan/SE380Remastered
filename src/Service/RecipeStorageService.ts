import {Storage} from "@ionic/storage";
import {Recipe} from "../Objects/Recipe";
import {Injectable} from "@angular/core";


@Injectable()
export class RecipeStorageService{

  private recipes:Recipe[]=[];
  private favorite:Recipe[]=[];

  constructor(private storage:Storage){

  }

  addRecipeToStorage(recipe:Recipe){
    this.recipes.push(recipe);
    this.storage.set('recipes',this.recipes)
      .then()
      .catch(err => {
        this.recipes.splice(this.recipes.indexOf(recipe),1);
      });
  }

  addRecipeToFavoriteStorage(recipe:Recipe){
    this.favorite.push(recipe);
    console.log(this.favorite.length);
    this.storage.set('favorite',this.favorite)
      .then()
      .catch(err => {
        this.favorite.splice(this.favorite.indexOf(recipe),1);
      });
  }


  deleteRecipe(recipe:Recipe){
    let index = this.recipes.indexOf(recipe);
    this.recipes.splice(index,1);
  }

  deleteFavorite(favorite:Recipe){
    let index = this.favorite.indexOf(favorite);
    this.favorite.splice(index,1);
  }


  getRecipeFromStorage(){
    return this.recipes;
  }

  getFavoriteRecipeFromStorage(){
    return this.favorite;
  }

  fetchRecipes(){
    return this.storage.get('recipes')
      .then((recipes:Recipe[])=>{
        this.recipes=recipes != null ? recipes : [];
        return this.recipes;})
      .catch(err=>console.log(err));
  }

  fetchFavorite(){
    return this.storage.get('favorite')
      .then((favorite:Recipe[]) => {
        this.favorite = favorite != null ? favorite : [];
        return this.favorite;})
      .catch(err => console.log(err));

  }

}
