import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName;
  password;
  loginInvalid = false;

  constructor(private authService: AuthService, private router: Router) {}

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password)
      .subscribe(response => {
        if (!response) {
          // This gets executed if the ibservable returns false
          this.loginInvalid = true;
        } else {
          this.router.navigate(['/events']);
        }
      });
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  ngOnInit() {}
}
