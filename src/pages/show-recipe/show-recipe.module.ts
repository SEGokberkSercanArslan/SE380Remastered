import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowRecipePage } from './show-recipe';

@NgModule({
  declarations: [
    ShowRecipePage,
  ],
  imports: [
    IonicPageModule.forChild(ShowRecipePage),
  ],
})
export class ShowRecipePageModule {}
