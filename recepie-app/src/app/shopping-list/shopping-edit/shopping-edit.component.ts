import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredients } from '../ingredients.model';
import { IngredientsServices } from 'src/app/shared/services/ingredients.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name', {static: false}) name: ElementRef;
  @ViewChild('amt', {static: false}) amt: ElementRef;
  @Output() itemAdded = new EventEmitter<Ingredients>();
  constructor(private ingredientService: IngredientsServices) { }

  onAddItem() {
    if (this.name.nativeElement.value && this.amt.nativeElement.value) {
      const newIngredient = new Ingredients(this.name.nativeElement.value, this.amt.nativeElement.value);
      // this.itemAdded.emit(newIngredient);
      this.ingredientService.onAddItem(newIngredient);
    } else {
      alert('Enter Name and Amount');
    }
  }

  ngOnInit() {
  }

}
