import { Service, signal } from '@angular/core';

@Service()
export class CartService {
    readonly itens = signal<CartItem[]>([]);

    add(product: ProductType): void {
        this.itens.update(itens => {
            const itemExistente = itens.find(item => item.product.id === product.id);

            if (itemExistente) {
                return itens.map(item => item.product.id === product.id ? { ...item, amount: item.amount + 1 } : item);
            }

            return [...itens, { id: product.id, product, amount: 1 }];
        });
    }

    increaseQuantity(productId: number): void {
        this.itens.update(itens =>
            itens.map(item => item.product.id === productId ? { ...item, amount: item.amount + 1 } : item)
        );
    }

    decreaseQuantity(productId: number): void {
        this.itens.update(itens =>
            itens.map(item => item.product.id === productId ? { ...item, amount: item.amount - 1 } : item).filter(item => item.amount > 0)
        );
    }

    remove(productId: number): void {
        this.itens.update(itens =>
            itens.filter(item => item.product.id !== productId)
        );
    }

    getPaymentTotal(): number {
        return this.itens().reduce((total, item) => total + item.product.price * item.amount, 0);
    }

    getTotalOfItems(): number {
        return this.itens().reduce((total, item) => total + item.amount, 0);
    }
}
