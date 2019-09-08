import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedComp: string = 'recepie';
  constructor() { }
  navigate(comp: string) {
    this.selectedComp = comp;
  }
}
