import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import APP_ROUTES from './header/app-routes.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MdMenuModule } from '@angular/material';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';

import { ProductsService } from './products.service';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdMenuModule,
    MdCardModule,
    MdButtonModule,
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
