import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'simple test',
      'https://inteng-storage.s3.amazonaws.com/img/iea/zBwgmajpGK/sizes/speed-test-tools_resize_md.jpg'
    ),
    new Recipe('A test recipe', 'simple test',
      'https://inteng-storage.s3.amazonaws.com/img/iea/zBwgmajpGK/sizes/speed-test-tools_resize_md.jpg'
    ),
    new Recipe('A test recipe', 'simple test',
      'https://inteng-storage.s3.amazonaws.com/img/iea/zBwgmajpGK/sizes/speed-test-tools_resize_md.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
