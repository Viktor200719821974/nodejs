import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  isActivate: boolean = false;

  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const token = this.route.snapshot.paramMap.get('token');
    this.authService.activateUser(token).subscribe((value: any) => {
      if (value === 'User active') {
        this.isActivate = false;
      }
    }, ((err: any) => {
      if(err) {
        this.isActivate = true;
      }
    }));
  }
}
