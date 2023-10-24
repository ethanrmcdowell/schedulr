import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupEmail: string = '';
  signupPass: string = '';
  signupPass2: string = '';
  userAuthenticated: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.userAuthenticated$.subscribe(isAuthenticated => {
      this.userAuthenticated = isAuthenticated;
    });
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
}
