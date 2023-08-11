import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(public authService : AuthService, public apiService : ApiService,private router: Router){}

  logout(): void{
    this.authService.logout()
  }

  goToAbout(){
    this.router.navigate(['/about']);
  }

  goToMain(){
    this.router.navigate(['/main']);
  }

  goToCatalogue(){
    this.router.navigate(['/catalogue']);
  }
}
