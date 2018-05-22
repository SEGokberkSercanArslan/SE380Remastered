import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipeListPage } from './recipe-list';

@NgModule({
  declarations: [
    RecipeListPage,
  ],
  imports: [
    IonicPageModule.forChild(RecipeListPage),
  ],
})
export class RecipeListPageModule {}
