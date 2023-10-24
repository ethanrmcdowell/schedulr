import { Component, ViewChild } from '@angular/core';
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
  loginVisible: boolean = true;
  signupVisible: boolean = false;
  userAuthenticated: boolean = false;
  sideNavOpen: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.userAuthenticated$.subscribe(isAuthenticated => {
      this.userAuthenticated = isAuthenticated;
    });
  }

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
    if (this.signupVisible) this.signupVisible = false;
    if (this.sideNavOpen) this.sideNavOpen = false;

    this.loginVisible = true;
  }

  showSignup() {
    if (this.loginVisible) this.loginVisible = false;
    if (this.sideNavOpen) this.sideNavOpen = false;
    this.signupVisible = true;
  }

  userLogout() {
    this.authService.logOutUser((response) => {
      console.log(response);
    })
  }

  openNavMenu() {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
