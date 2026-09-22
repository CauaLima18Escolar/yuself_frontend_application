import { Component, inject } from '@angular/core';
import { CartService } from '../../service/cart-service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-shopping-cart',
  styleUrl: './shopping-cart.css',
  templateUrl: './shopping-cart.html',
})
export class ShoppingCart {
  #cartService = inject(CartService);
  protected isOpen = false

  public onClose() {
    this.isOpen = false
  }

  public onOpen() {
    this.isOpen = true
  }

  public getItensAmount(): number {
    return this.#cartService.getTotalOfItems();
  }

  public getService(): CartService {
    return this.#cartService
  }
}
