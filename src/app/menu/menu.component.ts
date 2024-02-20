import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private router: Router
    ) {

    } 

  navigateToLogin() {
    console.log('Navigate to Login');
    this.router.navigate(['/login']);
    alert('Go to Login Page');
  }
}
