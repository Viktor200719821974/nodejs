import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm!: FormGroup;

  constructor(
    private authService: AuthService, 
    private router: Router,
    ) { }

  customValidator(control: AbstractControl): null | object {
    return control.value.includes('huck') ? {ahtung: 'Error'} : null;
  }
  
  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        this.customValidator
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        this.customValidator
      ]),
      age: new FormControl('18', [
        Validators.required,
        this.customValidator
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.maxLength(12),
        this.customValidator
      ]),
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
    console.log(this.registrationForm.controls['age'].errors);
  }

  registration() {
    this.authService.registration(this.registrationForm.getRawValue())
    .subscribe(value => {
      if (value) {
        this.router.navigate(['']);
      }
    });
  }

}
