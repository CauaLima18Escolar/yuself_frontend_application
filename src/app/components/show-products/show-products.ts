import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../service/product-service';

@Component({
  imports: [],
  selector: 'app-show-products',
  styleUrl: './show-products.css',
  templateUrl: './show-products.html',
})
export class ShowProducts {
  #productService = inject(ProductService);
  protected products = signal<ProductType[]>([]);
  protected isLoading = signal<boolean>(false);

  constructor() { this.loadProducts() }

  public loadProducts() {
    this.isLoading.set(true);
    this.#productService.getAll().subscribe({
      next: (res) => {
        this.products.set(res);
      },
      error: (err) => {
        console.error("Ocorreu um erro ao tentar carregar os produtos: " + err);
      },
      complete: () => {
        this.isLoading.set(false)
      }
    });
  }
}
