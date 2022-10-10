import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces';
import { AuthService } from '../services/auth.service';
import { DataTransferService } from '../services/data-transfer.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  user: IUser | undefined;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private transfer: DataTransferService
    ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isAuthenticated()) {
      this.transfer.currentUserSubject.subscribe((value) => {
        if (value) {
          this.user = value;
        }
      });
      if (this.user?.is_staff || this.user?.is_superuser) {
        return true;
      }
    }
    this.router.navigate([''])
    return false;
  }
  
}
