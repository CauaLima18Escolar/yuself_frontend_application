import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoppingCart } from './components/shopping-cart/shopping-cart';

@Component({
  selector: 'app-root',
  imports: [RouterModule, ShoppingCart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('YuSelf');
}
