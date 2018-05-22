import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyFavoriteRecipesPage } from './my-favorite-recipes';

@NgModule({
  declarations: [
    MyFavoriteRecipesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyFavoriteRecipesPage),
  ],
})
export class MyFavoriteRecipesPageModule {}
