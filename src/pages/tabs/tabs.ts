import { Component } from '@angular/core';

import {RecipeListPage} from "../../../../SE380Remastered/src/pages/recipe-list/recipe-list";
import {MyFavoriteRecipesPage} from "../../../../SE380Remastered/src/pages/my-favorite-recipes/my-favorite-recipes";
import {HomePage} from "../../../../SE380Remastered/src/pages/home/home";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = RecipeListPage;
  tab3Root: any = MyFavoriteRecipesPage;


  constructor() {

  }
}
