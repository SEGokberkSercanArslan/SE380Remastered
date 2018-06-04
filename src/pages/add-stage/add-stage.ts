import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {Recipe} from "../../Objects/Recipe";
import {Stage} from "../../Objects/Stage";

/**
 * Generated class for the AddStagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-stage',
  templateUrl: 'add-stage.html',
})
export class AddStagePage implements OnInit{

  stageRecipeObject:Recipe = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddStagePage');
  }

  addNewStage(form:NgForm){
    this.stageRecipeObject.addStage(new Stage(<string>form.value.stageTitle,<string>form.value.procedure,<string>form.value.hour,<string>form.value.minute));
    const alert = this.alert.create({
      title:"Save",
      message:"Stage Saved Successfully",
      buttons:["Understand"]
    });
    alert.present();
    this.navCtrl.pop();
  }

  ngOnInit(): void {
    this.stageRecipeObject = this.navParams.get('recipe')
    //console.log(this.recipeObject == null);
  }

}
