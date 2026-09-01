import { Routes } from '@angular/router';
import { Products } from './pages/products/products';
import { NotFound } from './pages/not-found/not-found';
import { ProductDetail } from './components/product-detail/product-detail';

export const routes: Routes = [
    { path: "", component:  Products },
    { path: "produto/:id", component:  ProductDetail },
    { path: "**", component:  NotFound },
];
