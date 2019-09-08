import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() loadedComp = new EventEmitter<string>();
  constructor() { }

  loadComp(selectedComp: string) {
    this.loadedComp.emit(selectedComp);
  }

  ngOnInit() {
  }

}
