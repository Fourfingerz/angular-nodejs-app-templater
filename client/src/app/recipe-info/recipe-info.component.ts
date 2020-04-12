import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit {

  recipe: any;

  constructor(public route: ActivatedRoute, public search: SearchService) { }

  ngOnInit() {
    this.recipe = this.search.getRecipe(this.route.snapshot.paramMap.get("name"));
  }

}
