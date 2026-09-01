import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Service()
export class ProductService {
    readonly API_URL = 'http://localhost:3000';
    #httpClient = inject(HttpClient);

    public getAll(): Observable<ProductType[]> {
        return this.#httpClient.get<ProductType[]>(`${this.API_URL}/products`);
    }

    public getById(id: number): Observable<ProductType> {
        return this.#httpClient.get<ProductType>(`${this.API_URL}/products/${id}`);
    }
}
