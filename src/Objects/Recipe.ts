import {Stage} from "./Stage";

export class Recipe{

  private stageArray:Stage[];
  private recipeTitle:string;

  constructor(recipeTitle:string){
    this.recipeTitle=recipeTitle;
  }

  addNewStage(stage:Stage){
    this.stageArray.push(stage);
  }

}
