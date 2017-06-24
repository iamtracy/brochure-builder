import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from './../user/user.model';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        })
  }



  onSubmit() {
    
    const user = new User(        
      this.registerForm.value.firstName,
      this.registerForm.value.lastName,
      this.registerForm.value.email,
      this.registerForm.value.password
    );
    console.log(this.registerForm, user)
    this.authService
        .register(user)
        .subscribe(res => console.log(res));
  }

}
