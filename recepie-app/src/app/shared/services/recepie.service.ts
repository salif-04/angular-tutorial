import { Recepie } from 'src/app/recepies/recepie.model';

export class RecepieServices {
    private recepies: Recepie[] = [
        new Recepie('Burger',
        'A tasty li\'l Burger',
        'https://www.seriouseats.com/assets_c/2015/07/20150702-sous-vide-hamburger-anova-16-thumb-1500xauto-424812.jpg'),
        new Recepie('Pizza',
        'Yummy Black Olive pizza',
        'https://www.seriouseats.com/assets_c/2015/07/20150702-sous-vide-hamburger-anova-16-thumb-1500xauto-424812.jpg')
    ];

    getRecepies() {
        return this.recepies.slice();
    }

    constructor() { }
}
