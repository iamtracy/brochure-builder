import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routing } from './app-routes';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MdToolbarModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdProgressSpinnerModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';

import { AuthService } from './auth/auth.service';
import { ProductsService } from './products/products.service';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResultComponent } from './products/result/result.component';
import { CreateComponent } from './products/create/create.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './auth/user/user.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    RegisterComponent,
    CreateComponent,
    ResultComponent,
    AuthComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdMenuModule,
    MdCardModule,
    MdButtonModule,
    FlexLayoutModule,
    MdProgressSpinnerModule,
    routing
  ],
  providers: [ProductsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
