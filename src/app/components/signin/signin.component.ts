import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthRequest} from '../../models/auth-request';
import {AuthenticationService} from '../../services/authentication.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  authRequest: AuthRequest;

  constructor(private authenticationSerice: AuthenticationService, private cookie: CookieService) {
    this.authRequest = new AuthRequest();
  }

  ngOnInit(): void {
  }

  login(f: NgForm) {
    this.authRequest.username = f.value.username;
    this.authRequest.password = f.value.password;
    this.authenticationSerice.login(this.authRequest).subscribe((token: any) => {
      this.cookie.set('jwt', token.accessToken);
        console.log(token.accessToken);
      });
  }
}
