import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AddStagePage} from "../add-stage/add-stage";
import {Recipe} from "../../Objects/Recipe";
import {NgForm} from "@angular/forms";
import {RecipesService} from "../../Service/recipes.service";

@IonicPage()
@Component({
  selector: 'page-add-recipe',
  templateUrl: 'add-recipe.html',
})
export class AddRecipePage {

  private recipeObject:Recipe = null;

  constructor(public navCtrl: NavController, public navParams: NavParams , private  alert:AlertController, private recipesService: RecipesService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRecipePage');
  }

  navigateAddStage(){
    this.navCtrl.push(AddStagePage,{recipe:this.recipeObject});
  }
/*
  addNewRecipe(strTitle:string){

    this.recipeObject= new Recipe(strTitle);
    const alert = this.alert.create({
      title:"Saved",
      message:"Recipe Name Saved Successfully",
      buttons:["Understand"]
    });
    alert.present()

  }

  saveRecipe(){
    //Database e objeyi gönder
    const alert = this.alert.create({
      title:"Recipe Saved",
      message:"Recipe Saved Successfully",
      buttons:["Understand"]
    });
    alert.present();
    this.navCtrl.pop();
    this.recipeObject=null;
  }
  */

  onAddRecipe(value: {title: string}) {
    this.recipesService.addRecipe(value);
    this.navCtrl.pop();
  }

}
