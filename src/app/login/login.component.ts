import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginEmail: string = '';
  loginPass: string = '';
  userAuthenticated: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.userAuthenticated$.subscribe(isAuthenticated => {
      this.userAuthenticated = isAuthenticated;
    });
  }

  loginBtn() {
    this.authService.loginUser(this.loginEmail, this.loginPass, async (response) => {
      if (response.success) {
        console.log("SUCCESS:", response);
        console.log('User Authenticated:', this.userAuthenticated);
        // location.href = "/users";
      } else {
        console.log("FAILURE:", response);
      }
    })
  }
}
