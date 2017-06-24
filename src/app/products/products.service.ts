import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Product } from './product.model';

@Injectable()
export class ProductsService {

  constructor(private http: Http) { }

  getAllProducts(): Observable<any> {
    return this.http.get('http://localhost:3000/products')
      .map(res => {
        return res.json()}
      );
  }

  createProduct(product: Product): Observable<void> {
    const body = JSON.stringify(product);
    console.log(product);
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers });
    
    return this.http.post('http://localhost:3000/products', body, options)
      .map(res => {
        return res.json()}
      ).catch((error: Response) => {
        return Observable.throw(error)
      });
  }

}
