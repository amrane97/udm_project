import { Component,  EventEmitter,  OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})

export class RecipeListComponent implements OnInit {
  recipes : Recipe [] = [
    new Recipe('first recipe', 'its delicious', 'https://www.ideemiam.com/upload/images/article/768x400/img_259.jpg'),
    new Recipe('second recipe', 'its delicious', 'https://www.ideemiam.com/upload/images/article/768x400/img_259.jpg')
  ];

  @Output() onRecipeIsSelected = new EventEmitter <Recipe>();

  ngOnInit(): void {
    
  }

  onRecipeSelected (r : Recipe) {
    this.onRecipeIsSelected.emit(r);
  }

}
