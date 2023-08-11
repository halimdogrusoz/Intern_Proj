import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(public oidcSecurityService: OidcSecurityService, public authServe: AuthService) {}

  login() {
    this.authServe.login();
  }
}


