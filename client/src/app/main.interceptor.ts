import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { IToken } from './interfaces';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router,
    ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): any {
    const isAuthenticated = this.authService.isAuthenticated();
    if (isAuthenticated) {
      request = this.addToken(request, this.authService.getAccessToken());
    }
    return next.handle(request).pipe(
        catchError((res: HttpErrorResponse) => {
        if (res) {
          if (res.status === 401) {
            return this.handle401Error(request, next)
          }
          if (res.status === 403) {
            this.router.navigate(['login'], {
              queryParams: {
                sessionFiled: true
              }
            })
          }
        }
      })
    )   
  }

  addToken(request: HttpRequest<any>, token: string | null): HttpRequest<any> {
    return request.clone({
      setHeaders: {Authorization: `Bearer ${token}`}
    })
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): any {
    return this.authService.refreshToken().pipe(
      switchMap((tokens: IToken) => {
        return next.handle(this.addToken(request, tokens.refreshToken))
      })
    )
  }
}
