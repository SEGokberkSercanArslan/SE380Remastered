import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AddStagePage} from "../add-stage/add-stage";
import {Recipe} from "../../Objects/Recipe";
import {NgForm} from "@angular/forms";
import {RecipeStorageService} from "../../Service/RecipeStorageService";
import {Stage} from "../../Objects/Stage";

/**
 * Generated class for the AddRecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 *
 */

@IonicPage()
@Component({
  selector: 'page-add-recipe',
  templateUrl: 'add-recipe.html',
})
export class AddRecipePage {

  private recipeObject:Recipe = null;

  constructor(public navCtrl: NavController, public navParams: NavParams , private  alert:AlertController,private storage:RecipeStorageService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRecipePage');
  }

  navigateAddStage(strTitle:string){
    if (this.recipeObject == null){
      this.recipeObject= new Recipe(strTitle);
    }
    console.log(this.recipeObject.recipeTitle);
    const alert = this.alert.create({
      title:"Saved",
      message:"Recipe Name Saved Successfully, Now you can add stages for your recipe.",
      buttons:["Understand"]
    });
    alert.present();
    console.log("Array Lenght: "+this.recipeObject.stageArray.length);
    this.navCtrl.push(AddStagePage,{recipe:this.recipeObject});

  }
  saveRecipe(){
    //Database e objeyi gönder
    this.storage.addRecipeToStorage(this.recipeObject);
    const alert = this.alert.create({
      title:"Recipe Saved",
      message:"Recipe Saved Successfully",
      buttons:["Understand"]
    });
    alert.present();
    this.navCtrl.pop();
    this.recipeObject=null;
  }

  addNewStageToAddRecipePageObject(stage:Stage){
    this.recipeObject.addStage(stage);
  }

}
