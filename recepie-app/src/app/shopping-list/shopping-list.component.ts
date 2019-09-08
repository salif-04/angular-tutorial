import { Component, OnInit } from '@angular/core';
import { Ingredients } from './ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Bun', 2),
    new Ingredients('Butter', 1)
  ];
  constructor() { }

  addIngredient(ing: Ingredients) {
    this.ingredients.push(ing);
  }

  ngOnInit() {
  }

}
