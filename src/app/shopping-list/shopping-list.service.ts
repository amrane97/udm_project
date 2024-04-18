import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";

@Injectable()
export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients : Ingredient[] = [
        new Ingredient ('Apples', 3),
        new Ingredient ('Tomatoes', 2)
      ]

    getIngredients () {
        return this.ingredients.slice();
    }

    addIngredient (ing : Ingredient) {
        this.ingredients.push(ing);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}