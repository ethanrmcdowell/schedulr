import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'schedulr-app';
  loginEmail: string = '';
  loginPass: string = '';
  signupEmail: string = '';
  signupPass: string = '';
  signupPass2: string = '';
  loginVisible: boolean = false;
  signupVisible: boolean = false;

  constructor(private authService: AuthService) {}

  loginBtn() {
    this.authService.loginUser(this.loginEmail, this.loginPass, async (response) => {
      if (response.success) {
        console.log("SUCCESS:", response);
      } else {
        console.log("FAILURE:", response);
      }
    })
  }

  signupBtn() {
    this.authService.registerUser(this.signupEmail, this.signupPass, async (response) => {
      if (response.success) {
        console.log("SUCCESS:", response);
      } else {
        console.log("FAILURE:", response);
      }
    })
  }

  showLogin() {
    if (this.signupVisible) {
      this.signupVisible = false;
    }
    this.loginVisible = !this.loginVisible;
  }

  showSignup() {
    if (this.loginVisible) {
      this.loginVisible = false;
    }
    this.signupVisible = !this.signupVisible;
  }
}
