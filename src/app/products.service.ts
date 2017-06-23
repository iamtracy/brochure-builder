import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllProducts() {
    return this.http.get('http://localhost:3000/products')
      .map(res => res.json());
  }
}
