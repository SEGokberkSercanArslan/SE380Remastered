import {Stage} from "./Stage";

export class Recipe{

  public stageArray:Stage[] = [];
  private recipeTitle:string;

  constructor(recipeTitle:string){
    this.recipeTitle=recipeTitle;
  }

  addStage = function(stage:Stage){
    this.stageArray.push(stage);
  }

}
