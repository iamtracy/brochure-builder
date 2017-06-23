import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';

const APP_ROUTES: Routes = [
  { path: '', component: ProductsComponent }
];

export default APP_ROUTES;