import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A test recipe", "this is sympli a test", "https://www.seriouseats.com/thmb/Z6NDbu7DIMqykB4s8zw5gyycbnk=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__10__20140930-cassoulet-recipe-food-lab-new-6-02f6e483b0a841fc8a4395ca1e77d484.jpg"),
     new Recipe("A test recipe2", "this is sympli a test2", "https://www.seriouseats.com/thmb/Z6NDbu7DIMqykB4s8zw5gyycbnk=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__10__20140930-cassoulet-recipe-food-lab-new-6-02f6e483b0a841fc8a4395ca1e77d484.jpg",
    )
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
