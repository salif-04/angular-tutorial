import { Ingredients } from "src/app/shopping-list/ingredients.model";
import { EventEmitter } from "@angular/core";

export class IngredientsServices {
    ingredients: Ingredients[] = [
        new Ingredients('Bun', 2),
        new Ingredients('Butter', 1)
    ];
    ingredientChangeEvent = new EventEmitter<Ingredients[]>();

    getIngredients() {
        return this.ingredients.slice();
    }

    onAddItem(ingredient: Ingredients) {
        this.ingredients.push(ingredient);
        this.ingredientChangeEvent.emit(this.ingredients.slice());
    }

    constructor() { }
}
