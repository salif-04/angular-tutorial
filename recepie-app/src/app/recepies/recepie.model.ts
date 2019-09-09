import { Ingredients } from '../shopping-list/ingredients.model';

export class Recepie {
    constructor(public name: string, public desc: string, public imgUrl: string, public ingList: Ingredients[]) {
    }
}
