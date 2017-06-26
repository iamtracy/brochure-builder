import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  constructor(private http: Http) { }

  getAllProducts(): Observable<any> {
    return this.http
      .get('products')
      .map(res => res.json())
      .catch((error: Response) => Observable.throw(error));
  }

  createProduct(product: Product): Observable<void> {
    this.products.push(product);
    const body = JSON.stringify(product);
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers });
    return this.http
      .post('/products', body, options)
      .map(res => res.json())
      .catch((error: Response) => Observable.throw(error));

  }

  //product: Product
  deleteProduct(id) {
    return this.http
      .delete('/products/' + id)
      .map(res => res.json())
      .catch((error: Response) => Observable.throw(error));
  }

}
