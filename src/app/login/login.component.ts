import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showPassword: boolean = false;
  username: string = '';
  password: string = '';
  passwordVisible: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onLogin() {
    const registeredUsers = this.userService.getRegisteredUsers();
    const user = registeredUsers.find(u => u.username === this.username && u.password === this.password);
    if (user) {
      alert('เข้าสู่ระบบสำเร็จ');
    } else {
      alert('เข้าสู่ระบบไม่สำเร็จ');
    }
  }

  navigateToRegister() {
    console.log('Navigate to Register');
    this.router.navigate(['/register']);
    alert('เข้าสู่หน้าลงทะเบียน');
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }
}

