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
    console.log(body);
    return this.http
      .post('/auth/register', body, options)
      .map(res => res.json())
      .catch((error: Response) => Observable.throw(error));
  }

}
