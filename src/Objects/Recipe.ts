import {Stage} from "./Stage";

export class Recipe{

  public stageArray:Stage[] = [];
  public recipeTitle:string;

  constructor(recipeTitle:string){
    this.recipeTitle=recipeTitle;
  }

  addStage /*= function*/(stage:Stage){
    this.stageArray.push(stage);
  }

  deleteStage(stage:Stage){
    let index = this.stageArray.indexOf(stage);
    this.stageArray.splice(index,1);
  }

}
