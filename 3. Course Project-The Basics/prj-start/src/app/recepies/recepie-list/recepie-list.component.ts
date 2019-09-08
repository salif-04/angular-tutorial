import { Component, OnInit } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
    selector: 'app-recepie-list',
    templateUrl: 'recepie-list.component.html',
    styleUrls: ['recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
    recepies: Recepie[] = [
        new Recepie('Burger',
        'A tasty li\'l Burger',
        'https://www.seriouseats.com/assets_c/2015/07/20150702-sous-vide-hamburger-anova-16-thumb-1500xauto-424812.jpg'),
        new Recepie('Pizza',
        'Yummy Black Olive pizza',
        'https://www.seriouseats.com/assets_c/2015/07/20150702-sous-vide-hamburger-anova-16-thumb-1500xauto-424812.jpg')
    ];
    constructor() { }

    ngOnInit(): void { }
}
