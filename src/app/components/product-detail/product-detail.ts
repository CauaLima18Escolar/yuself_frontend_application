import { Component, inject, input, OnInit, signal } from '@angular/core';
import { ProductService } from '../../service/product-service';

@Component({
  imports: [],
  selector: 'app-product-detail',
  styleUrl: './product-detail.css',
  templateUrl: './product-detail.html',
})
export class ProductDetail implements OnInit {
  #productService = inject(ProductService);
  protected product = signal<ProductType | null>(null);
  protected isLoading = signal<boolean>(false);
  protected id = input.required<number>();

  ngOnInit(): void {
    this.loadProduct();
  }

  public loadProduct() {
    this.isLoading.set(true);
    this.#productService.getById(this.id()).subscribe({
      next: (res) => {
        this.product.set(res);
      },
      error: (err) => {
        console.error("Ocorreu um erro ao buscar produto por ID: " + err);
      },
      complete: () => {
        this.isLoading.set(false);
      }
    })
  }
}
