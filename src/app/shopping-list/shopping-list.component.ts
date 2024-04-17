import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {

  

  ingredients : Ingredient[] = [
    new Ingredient ('Apples', 3),
    new Ingredient ('Tomatoes', 2)
  ]

  ngOnInit () {
    
  }

  onIngredientAdded(ingredient : Ingredient) {
    this.ingredients.push(ingredient)
  }

  
}
