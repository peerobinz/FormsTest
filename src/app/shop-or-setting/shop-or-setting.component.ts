import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-or-setting',
  templateUrl: './shop-or-setting.component.html',
  styleUrls: ['./shop-or-setting.component.scss']
})
export class ShopOrSettingComponent {
  constructor(
    
     private router: Router
    
    ) {

    }

  navigateToMenu() {
    console.log('Navigate to Menu');
    this.router.navigate(['/menu']);
    alert('เข้าสู่หน้าเมนู');
  }

}
