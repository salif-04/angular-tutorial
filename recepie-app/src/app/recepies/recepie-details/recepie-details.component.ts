import { Component, OnInit, Input } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
    selector: 'app-recepie-details',
    templateUrl: 'recepie-details.component.html',
    styleUrls: ['recepie-details.component.css']
})
export class RecepieDetailsComponent implements OnInit {
    @Input() itemDisplay: Recepie;
    constructor() { }

    ngOnInit(): void { }
}