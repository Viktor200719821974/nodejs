import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { urls } from '../configs';

import { IAuth, IToken, IUser } from '../interfaces';
import { DataTransferService } from './data-transfer.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessTokenKey = 'access';
  private refreshTokenKey = 'refresh';
  // private httpOptions = {
  //   headers: new HttpHeaders({ 'Authorization': `${this.getRefreshToken()}` })
  // };

  constructor(
    private httpClient: HttpClient, 
    private transferService: DataTransferService,
    private userService: UserService,
    ) {}

  login (userLogin: IAuth): Observable<IToken> {
    return this.httpClient.post<IToken>(`${urls.auth}/login`, userLogin)
    .pipe(
      tap((token: IToken) => {
        this.setTokens(token);
        localStorage.setItem('userId', token.userId + '');
        this.userService.getUserById(token.userId).subscribe(value => {
          this.transferService.currentUserSubject.next(value);
        })
      }
    )
  );
  }

  registration(user: any): Observable<IUser> {
    return this.httpClient.post<IUser>(`${urls.auth}/registration`, user);
  }

  logOut():void {
    localStorage.removeItem(this.accessTokenKey);
    localStorage.removeItem(this.refreshTokenKey);
    this.httpClient.post(`${urls.auth}/logout`, '');
  }

  activateUser(token: string | null):any {
    return this.httpClient.get(`${urls.users}/activateUser/${token}`);
  }

  refreshToken(): Observable<IToken> {
    // return this.httpClient.post<IToken>(`${urls.auth}/refresh`, {}, this.httpOptions)
    return this.httpClient.post<IToken>(`${urls.auth}/refresh`, {refreshToken: this.getRefreshToken()})
    .pipe(
      tap((tokens: IToken) => {
        this.setTokens(tokens);
      })
    );
  }

  isAuthenticated(): boolean {
    return !!this.getAccessToken();
  }

  private setAccessToken(access: string): void {
    localStorage.setItem(this.accessTokenKey, access);
  }

  private setRefreshToken(refresh: string): void {
    localStorage.setItem(this.refreshTokenKey, refresh);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.accessTokenKey);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshTokenKey);
  }

  private setTokens(tokens: IToken): void {
    const {accessToken, refreshToken} = tokens;
    this.setAccessToken(accessToken);
    this.setRefreshToken(refreshToken);
  }

}
