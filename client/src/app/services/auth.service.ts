import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { urls } from '../configs';

import { IAuth, IToken, ITokenData } from '../interfaces';
import { DataTransferService } from './data-transfer.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessTokenKey = 'access';
  private refreshTokenKey = 'refresh';

  constructor(
    private httpClient: HttpClient, 
    private transferService: DataTransferService,
    private userService: UserService
    ) {}

  login(user: IAuth) {
    return this.httpClient.post<IToken>(`${urls.auth}/login`, user)
    .pipe(
      tap((tokens:ITokenData['token']) => {
        this.userService.getUserById(tokens.userId).subscribe((value: any) => {
          this.transferService.currentUserSubject.next(value);
        });
        this.setTokens(tokens);
      }
    ));
  }

  refreshToken(): Observable<IToken> {
    return this.httpClient.post<IToken>(`${urls.auth}/refresh`, {refresh: this.getRefreshToken()})
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

  private getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshTokenKey);
  }

  private setTokens(token: IToken): void {
    const {accessToken, refreshToken} = token;
    this.setAccessToken(accessToken);
    this.setRefreshToken(refreshToken);
  }

}
