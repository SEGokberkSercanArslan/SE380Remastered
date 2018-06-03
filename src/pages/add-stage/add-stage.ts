import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NgForm} from "@angular/forms";

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
export class AddStagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddStagePage');
  }

  addNewStage(form:NgForm){
    console.log(form);
    console.log(form.value.hour);
  }

}
