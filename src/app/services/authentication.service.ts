import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {AuthRequest} from '../models/auth-request';
import {Env} from '../models/env';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  private url = Env.url;

  public login(coordonnees: AuthRequest) {
    return this.http.post(`${this.url}/api/auth/signin`, coordonnees);
  }
}
