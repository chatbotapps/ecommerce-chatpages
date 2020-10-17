import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../model/product';
import {map,filter} from 'rxjs/operators';

@Component({
  selector: 'app-dairy-products',
  templateUrl: './dairy-products.component.html',
  styleUrls: ['./dairy-products.component.css']
})
export class DairyProductsComponent implements OnInit {

  dairyProduct: Product[];
  product: Product[];

  constructor(private categoriesService: CategoriesService,
    private productsService: ProductsService) {
     }

  ngOnInit() {
    this.productsService.getProducts()
    .pipe
    (map(items => items.filter(item => item.category === 'Dairy Products') ))
    .subscribe(data => this.dairyProduct = data)
  }

}
