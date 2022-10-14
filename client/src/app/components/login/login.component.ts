import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  customValidator(control: AbstractControl): null | object {
    return control.value.includes('huck') ? {ahtung: 'Error'} : null;
  }
  
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        this.customValidator
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        this.customValidator
      ])
    });
  }

  login(): void {
    this.authService.login(this.loginForm.getRawValue()).subscribe(value => {
      if (value) {
        this.router.navigate(['']);
      }
    });
    // .subscribe(() => {}, error => console.log(error));
  }

  registration() {
    this.router.navigate(['registration']);
  }

}