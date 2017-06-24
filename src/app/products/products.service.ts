import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Product } from './product.model';

@Injectable()
export class ProductsService {

  constructor(private http: Http) { }

  getAllProducts(): Observable<any> {
    return this.http
      .get('products')
      .map(res => {
        return res.json()}
      ).catch((error: Response) => {
        return Observable.throw(error)
      });
  }

  createProduct(product: Product): Observable<void> {
    const body = JSON.stringify(product);
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers });

    return this.http
      .post('/products', body, options)
      .map(res => res.json())
      .catch((error: Response) => Observable.throw(error));
  }

}
