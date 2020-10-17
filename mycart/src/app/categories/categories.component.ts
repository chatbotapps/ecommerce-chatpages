import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CategoriesService} from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: [];
  constructor(private http: HttpClient , private categoryService: CategoriesService) { }

  ngOnInit() {

this.categoryService.getCategories()
.subscribe( data => this.categories = data)
  }
}
