import { Routes } from '@angular/router';
import { Products } from './pages/products/products';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    { path: "", component:  Products },
    { path: "**", component:  NotFound },
];
