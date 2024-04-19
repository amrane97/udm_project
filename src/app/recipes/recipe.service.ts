import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredients.model";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    
    private recipesService : Recipe [] = [
        new Recipe('first recipe',
         'its delicious', 
         'https://www.ideemiam.com/upload/images/article/768x400/img_259.jpg',
        [
            new Ingredient ('pasta', 200),
            new Ingredient ('tomatoes', 3),
            new Ingredient('Basilic', 100)
        ]),
        new Recipe('second recipe', 
        'its delicious', 
        'https://www.ideemiam.com/upload/images/article/768x400/img_259.jpg',
        [
            new Ingredient ('pasta', 200),
            new Ingredient ('parmeggiano', 75),
            new Ingredient ('capuccino', 1)
        ])
      ];


    getRecipes() {
        return this.recipesService.slice();
    }

    getRecipe(index:number) {
        return this.recipesService[index];
    }

}