import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './../auth.service';

import { User } from './../user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password: new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    const user = new User(this.loginForm.value.email, this.loginForm.value.password);
    this.authService
        .login(user)
        .subscribe(res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('userId', res.userId);
          this.router.navigateByUrl('/')
        });
  }

}
