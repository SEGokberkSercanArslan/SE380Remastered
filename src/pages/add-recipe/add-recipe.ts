import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddStagePage} from "../add-stage/add-stage";
import {FirebaseServiceProvider} from "../../providers/firebase-service/firebase-service";
import {FirebaseListObservable} from "angularfire2/database";

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
  recipeItems: FirebaseListObservable<any[]>;
  newItem = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,public firebaseService: FirebaseServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRecipePage');
  }

  navigateAddStage(){
    this.navCtrl.push(AddStagePage);
  }

  addItem() {
    this.firebaseService.addRecipeItem(this.newItem);
  }

}
