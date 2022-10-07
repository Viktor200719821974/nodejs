import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IUser } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: IUser | undefined;
  isLogin: boolean = false;
  isAdmin: boolean = false;
  
  constructor(
    private transfer: DataTransferService, 
    private authService: AuthService,
    private router: Router,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.userService.getUserById(Number(userId)).subscribe(value => {
        this.transfer.currentUserSubject.next(value);
      });
    }
    this.transfer.currentUserSubject.subscribe(value =>{
      if (value) {
        this.user = value;
        this.isLogin = true;
        if (value.is_staff || value.is_superuser) {
          this.isAdmin = true;
        }
      }
    });
  }

  login(): void {
    this.router.navigate(['login']);
  }

  logOut():void {
    this.authService.logOut();
    this.isLogin = false;
  }

  home() {
    this.router.navigate(['']);
  }

  admin() {
    this.router.navigate(['admin']);
  }

}
