import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userProfile: any;
  isAuthenticated = false;

constructor(private oidcSecurityService: OidcSecurityService,  private router: Router){
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken, idToken }) => {
        
        this.userProfile = userData;
        this.isAuthenticated = isAuthenticated;

      });
    }
  

    login() {
      this.oidcSecurityService.authorize();
    }
  
    logout() {
      this.oidcSecurityService.logoff().subscribe((result) => console.log(result));
    }

}