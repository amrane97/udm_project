import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInpputRef:ElementRef;
  @ViewChild('amountInput') amountInpputRef:ElementRef;
  @Output() ingredientAdded = new EventEmitter<{name:string, amount:number}>();

  ngOnInit(): void {
    
  }

  onAddItem() {
    const newIngredient = new Ingredient(this.nameInpputRef.nativeElement.value, this.amountInpputRef.nativeElement.value);
    this.ingredientAdded.emit(newIngredient);
  }

}
