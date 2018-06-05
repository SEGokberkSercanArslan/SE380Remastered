import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {RecipeStorageService} from "../../Service/RecipeStorageService";
import {Stage} from "../../Objects/Stage";
import {AddStagePage} from "../add-stage/add-stage";
import {Recipe} from "../../Objects/Recipe";

/**
 * Generated class for the EditRecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipePage implements OnInit{

  private recipeObject:Recipe;

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

  ngOnInit(): void {
    this.recipeObject = this.navParams.get('recipe');
  }

}
