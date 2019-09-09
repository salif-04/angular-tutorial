import { Recepie } from 'src/app/recepies/recepie.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from 'src/app/shopping-list/ingredients.model';
import { IngredientsServices } from './ingredients.service';

@Injectable()
export class RecepieServices {
    private recepies: Recepie[] = [
        new Recepie('Burger',
        'A tasty li\'l Burger',
        'https://www.seriouseats.com/assets_c/2015/07/20150702-sous-vide-hamburger-anova-16-thumb-1500xauto-424812.jpg', [
            new Ingredients('Bun', 2),
            new Ingredients('Butter', 1)
        ]),
        new Recepie('Pizza',
        'Yummy Black Olive pizza',
        'https://www.seriouseats.com/assets_c/2015/07/20150702-sous-vide-hamburger-anova-16-thumb-1500xauto-424812.jpg', [
            new Ingredients('Pizza Base', 1),
            new Ingredients('Butter', 2)
        ])
    ];
    selectRecepie = new EventEmitter<Recepie>();

    getRecepies() {
        return this.recepies.slice();
    }

    addToCart(ingList: Ingredients[]) {
        ingList.forEach((ing: Ingredients) => {
            this.ingredientService.onAddItem(ing);
        });
    }

    constructor(private ingredientService: IngredientsServices) { }
}
