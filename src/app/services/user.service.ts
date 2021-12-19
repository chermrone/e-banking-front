import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Env} from '../models/env';
import {AuthRequest} from '../models/auth-request';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private cookie: CookieService) { }

  private url = Env.url;

  public all() {
    return this.http.get(`${this.url}/users/all`, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwt')}});
  }
}
