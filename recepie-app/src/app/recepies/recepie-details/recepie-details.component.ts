import { Component, OnInit, Input } from '@angular/core';
import { Recepie } from '../recepie.model';
import { RecepieServices } from 'src/app/shared/services/recepie.service';

@Component({
    selector: 'app-recepie-details',
    templateUrl: 'recepie-details.component.html',
    styleUrls: ['recepie-details.component.css']
})
export class RecepieDetailsComponent implements OnInit {
    itemDisplay: Recepie;
    constructor(private recepieService: RecepieServices) { }

    addToCart() {
        this.recepieService.addToCart(this.itemDisplay.ingList);
    }

    ngOnInit(): void {
        this.recepieService.selectRecepie
        .subscribe((rec: Recepie) => {
            this.itemDisplay = rec;
        });
    }
}
