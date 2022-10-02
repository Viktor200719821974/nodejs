import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      age: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });
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
