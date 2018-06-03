import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AddStagePage} from "../add-stage/add-stage";
import {Recipe} from "../../Objects/Recipe";
import {NgForm} from "@angular/forms";

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

  private recipeObject:Recipe = null;

  constructor(public navCtrl: NavController, public navParams: NavParams , private  alert:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRecipePage');
  }

  navigateAddStage(){
    this.navCtrl.push(AddStagePage,{recipe:this.recipeObject});
  }

  addNewRecipe(strTitle:string){

    this.recipeObject= new Recipe(strTitle);
    const alert = this.alert.create({
      title:"Saved",
      message:"Recipe Name Saved Successfully",
      buttons:["Understand"]
    });
    alert.present()

  }

  saveRecipe(form:NgForm){


  }


}
