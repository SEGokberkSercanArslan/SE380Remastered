import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  constructor(public afd: AngularFireDatabase) { }

  getRecipeItems() {
    return this.afd.list('/recipeItems/');
  }

  addRecipeItem(name) {
    this.afd.list('/recipeItems/').push(name);
  }

  removeRecipeItem(id) {
    this.afd.list('/recipeItems/').remove(id);
  }

}
