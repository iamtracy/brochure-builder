import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {

  constructor(private http: Http) { }

  getAllProducts() {
    return this.http.get('http://localhost:3000/products')
      .map(res => {
        return res.json()}
      );
  }

}
