import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from './user/user.model';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  register(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers });
    return this.http
      .post('/register', body, options)
      .map(res => res.json())
      .catch((error: Response) => Observable.throw(error));
  }

  login(user: User) {
      const body = JSON.stringify(user);
      const headers = new Headers({'Content-Type': 'application/json'});
      return this.http
            .post('/login', body, {headers: headers})
            .map(response => response.json())
            .catch((error: Response) => {
                return Observable.throw(error)
            });
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

}
