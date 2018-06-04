import {Storage} from "@ionic/storage";
import {Recipe} from "../Objects/Recipe";
import {Injectable} from "@angular/core";


@Injectable()
export class RecipeStorageService{

  public recipes:Recipe[]=[];

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


  getRecipeFromStorage(){
    return this.recipes.slice();
  }

  fetchRecipes(){
    return this.storage.get('recipes')
      .then((recipes:Recipe[])=>{
        this.recipes=recipes != null ? recipes : [];
        return this.recipes;})
      .catch(err=>console.log(err));
  }

}
