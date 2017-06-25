import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from './user/user.model';

@Injectable()
export class AuthService {

  constructor(private http: Http, private router: Router) { }

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
            .map(response => {
              this.router.navigateByUrl('/');
              return response.json();
            })
            .catch((error: Response) => {
                return Observable.throw(error)
            });
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  isAdmin() {
    return localStorage.getItem('admin') !== "true";
  }

}
