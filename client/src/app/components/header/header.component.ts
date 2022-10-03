import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: IUser | undefined;
  isLogin: boolean = false;
  
  constructor(
    private transfer: DataTransferService, 
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.transfer.currentUserSubject.subscribe(value =>{
      if (value) {
        this.user = value;
        this.isLogin = true;
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

}
