import { Routes, RouterModule } from '@angular/router';

import { prodRouting } from './products/product-routes';

import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './auth/register/register.component';
import { CreateComponent } from './products/create/create.component';
import { ResultComponent } from './products/result/result.component';

const APP_ROUTES: Routes = [
  { path: '', component: ProductsComponent, children: [
    { path: '', redirectTo: '/result', pathMatch: 'full' },
    { path: 'result', component: ResultComponent },
    { path: 'create', component: CreateComponent },
  ] },
  { path: 'register', component: RegisterComponent }
];

export default APP_ROUTES;