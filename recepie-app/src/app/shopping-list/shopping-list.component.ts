import { Component, OnInit } from '@angular/core';
import { Ingredients } from './ingredients.model';
import { IngredientsServices } from '../shared/services/ingredients.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[];

  constructor(private ingredientService: IngredientsServices) { }

  ngOnInit() {
    this.ingredients = this.ingredientService.getIngredients();
    this.ingredientService.ingredientChangeEvent
    .subscribe((ingArr: Ingredients[]) => {
      this.ingredients = ingArr;
    });
  }

}
