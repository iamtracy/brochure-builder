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

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';

import { ProductsService } from './products/products.service';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResultComponent } from './products/result/result.component';
import { CreateComponent } from './products/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    RegisterComponent,
    CreateComponent,
    ResultComponent
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
    routing
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
