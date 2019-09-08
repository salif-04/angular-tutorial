import { Component, OnInit } from '@angular/core';
import { Recepie } from './recepie.model';
import { RecepieServices } from '../shared/services/recepie.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
  providers: [RecepieServices]
})
export class RecepiesComponent implements OnInit {
  itemSelected: Recepie;

  constructor() { }

  ngOnInit() {
  }

}
