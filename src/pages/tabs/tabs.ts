import { Component } from '@angular/core';



import {RecipeListPage} from "../recipe-list/recipe-list";
import {MyFavoriteRecipesPage} from "../my-favorite-recipes/my-favorite-recipes";
import {HomePage} from "../home/home";

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
