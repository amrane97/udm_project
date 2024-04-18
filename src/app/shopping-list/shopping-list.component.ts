import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {

  ingredients !: Ingredient[];

  constructor(private sListService : ShoppingListService) {

  }

  ngOnInit () {
    this.ingredients = this.sListService.getIngredients();
    this.sListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  
}
