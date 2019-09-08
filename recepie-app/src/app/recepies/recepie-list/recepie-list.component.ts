import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Recepie } from '../recepie.model';
import { RecepieServices } from 'src/app/shared/services/recepie.service';

@Component({
    selector: 'app-recepie-list',
    templateUrl: 'recepie-list.component.html',
    styleUrls: ['recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
    @Output() selectedItem = new EventEmitter<Recepie>();
    recepies: Recepie[];

    constructor(private recepieService: RecepieServices) { }

    selectItem(itemSelected: Recepie) {
        this.selectedItem.emit(itemSelected);
    }

    ngOnInit(): void {
        this.recepies = this.recepieService.getRecepies();
    }
}
