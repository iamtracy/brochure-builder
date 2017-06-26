import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './auth/user/user.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { CreateComponent } from './products/create/create.component';
import { ResultComponent } from './products/result/result.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/results', pathMatch: 'full' },
  { path: 'results', component: ResultComponent },
  { path: 'create', component: CreateComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);