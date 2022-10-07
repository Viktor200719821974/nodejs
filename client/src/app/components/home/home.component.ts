import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
    // const token = localStorage.getItem('refresh');
    // console.log(token);
    // if (token){
    //   this.authService.refreshToken().subscribe(value => console.log(value));
    // } else {
    //   alert('no refresh token');
    // }
    // const id = localStorage.getItem('userId');
    // this.userService.getUserById(Number(id)).subscribe()
    // this.authService.refreshToken().subscribe(value => console.log(value));
  }

}
