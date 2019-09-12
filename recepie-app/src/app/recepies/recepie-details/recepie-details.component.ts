import { Component, OnInit, Input } from '@angular/core';
import { Recepie } from '../recepie.model';
import { RecepieServices } from 'src/app/shared/services/recepie.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-recepie-details',
    templateUrl: 'recepie-details.component.html',
    styleUrls: ['recepie-details.component.css']
})
export class RecepieDetailsComponent implements OnInit {
    itemDisplay: Recepie;
    constructor(private recepieService: RecepieServices,
        private route: ActivatedRoute) { }

    addToCart() {
        this.recepieService.addToCart(this.itemDisplay.ingList);
    }

    ngOnInit(): void {
        this.route.params.subscribe((param: Params) => {
            this.itemDisplay = this.recepieService.getRecepie(+param['id']);
        });
    }
}
