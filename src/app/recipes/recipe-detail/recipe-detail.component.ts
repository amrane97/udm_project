import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {

  recipe : Recipe;
  id : number;

  constructor(private rs:RecipeService, private route:ActivatedRoute, private router:Router) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params['id'];
        this.recipe = this.rs.getRecipe(this.id);
      }
    )
  }


  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo:this.route})
  }

}
