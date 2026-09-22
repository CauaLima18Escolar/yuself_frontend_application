import { Component } from '@angular/core';
import { ShowProducts } from '../../components/show-products/show-products';
import { ShoppingCart } from '../../components/shopping-cart/shopping-cart';

@Component({
  imports: [ShowProducts, ShoppingCart],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {}
