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

  homeLink() {
    location.href = ".";
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
