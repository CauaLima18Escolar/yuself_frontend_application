import { Component } from '@angular/core';
import { ShowProducts } from '../../components/show-products/show-products';

@Component({
  imports: [ShowProducts],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {}
