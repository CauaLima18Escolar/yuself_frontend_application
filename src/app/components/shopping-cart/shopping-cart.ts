import { Component, inject, signal } from '@angular/core';
import { CartService } from '../../service/cart-service';

@Component({
  imports: [],
  selector: 'app-shopping-cart',
  styleUrl: './shopping-cart.css',
  templateUrl: './shopping-cart.html',
})
export class ShoppingCart {
  #cartService = inject(CartService);

  public getItensAmount(): number {
    return this.#cartService.getTotalOfItems();
  }
}
