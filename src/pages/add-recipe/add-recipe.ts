import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AddStagePage} from "../add-stage/add-stage";
import {Recipe} from "../../Objects/Recipe";
import {RecipeStorageService} from "../../Service/RecipeStorageService";

/**
 * Generated class for the AddRecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-recipe',
  templateUrl: 'add-recipe.html',
})
export class AddRecipePage {

  private recipeObject:Recipe[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams , private  alert:AlertController, private storage:RecipeStorageService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRecipePage');
  }

  navigateAddStage(){
    this.navCtrl.push(AddStagePage,{recipe:this.recipeObject[0]});
  }

  addNewRecipe(strTitle:string){

    this.recipeObject.push(new Recipe(strTitle));
    const alert = this.alert.create({
      title:"Saved",
      message:"Recipe Name Saved Successfully",
      buttons:["Understand"]
    });
    alert.present()

  }

  saveRecipe(){
    //Database e objeyi gönder
    this.storage.addRecipeToStorage(this.recipeObject[0]);
    const alert = this.alert.create({
      title:"Recipe Saved",
      message:"Recipe Saved Successfully",
      buttons:["Understand"]
    });
    alert.present();
    this.navCtrl.pop();
    this.recipeObject = null;
  }

}
