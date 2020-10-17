import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './categories/categories.component';
import {CategoriesService} from './services/categories.service';
import {ProductsService} from './services/products.service';
import { DairyProductsComponent } from './productList/dairy-products/dairy-products.component';
import { ConsumerProductsComponent } from './productList/consumer-products/consumer-products.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    DairyProductsComponent,
    ConsumerProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    CategoriesService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
