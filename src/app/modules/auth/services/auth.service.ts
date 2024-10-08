import {inject, Injectable, signal} from '@angular/core';
import { HttpClient, HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { LoginAuthPayload, LoginAuthResponse } from '../interfaces/auth';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { catchError, switchMap, tap, throwError, Observable } from 'rxjs';

let isRefreshing = false;

export const authTokenInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<any> => {

  const addToken = (req: HttpRequest<any>, token: string): HttpRequest<any> => {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const refreshAndProceed = (authService: AuthService, req: HttpRequest<any>, next: HttpHandlerFn): Observable<any> => {
    if (!isRefreshing) {
      isRefreshing = true;

      return authService.refreshAuthToken().pipe(
        switchMap((res: LoginAuthResponse) => {
          isRefreshing = false;
          return next(addToken(req, res.access_token));
        })
      );
    }

    return next(addToken(req, authService.token!));
  };

  const authService = inject(AuthService);
  const token = authService.token;
  const refreshToken = authService.refreshToken;

  if (!token) {
    return next(req);
  }

  if (isRefreshing) {
    return refreshAndProceed(authService, req, next);
  }

  return next(addToken(req, token)).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 403) {
        return refreshAndProceed(authService, req, next);
      }
      return throwError(error);
    })
  );
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private httpClient = inject(HttpClient);
  private baseApiUrl = 'https://icherniakov.ru/yt-course/auth/';
  private router = inject(Router);
  private cookieService = inject(CookieService);

  token: string | null = null;
  refreshToken: string | null = null;

  errorText = signal<string | null >(null)

  get isAuth(): boolean {
    if (!this.token) {
      this.token = this.cookieService.get('token');
      this.refreshToken = this.cookieService.get('refreshToken');
    }
    return !!this.token;
  }

  login(payload: LoginAuthPayload): void {
    const formData = new FormData();
    formData.append('username', payload.username);
    formData.append('password', payload.password);

    this.httpClient.post<LoginAuthResponse>(`${this.baseApiUrl}token`, formData).pipe(
      tap((res: LoginAuthResponse) => this.saveTokens(res))
    ).subscribe({
      next: (response: LoginAuthResponse) => {
        const { refresh_token, access_token } = response;

        this.token = access_token;
        this.refreshToken = refresh_token;
        this.router.navigate(['/']);
        this.cookieService.set('token', this.token);
        this.cookieService.set('refreshToken', this.refreshToken);
        this.errorText.set(null);
      },
      error: (error: any) => {
        this.errorText.set(error.error.detail || 'Что-то пошло не так');
        console.log(error);
      }
    });
  }

  refreshAuthToken(): Observable<LoginAuthResponse> {
    return this.httpClient.post<LoginAuthResponse>(`${this.baseApiUrl}refresh`, { refresh_token: this.refreshToken }).pipe(
      tap((res: LoginAuthResponse) => this.saveTokens(res)),
      catchError((error: HttpErrorResponse) => {
        this.logout();
        return throwError(error);
      })
    );
  }

  logout(): void {
    this.cookieService.deleteAll();
    this.token = null;
    this.refreshToken = null;
    this.router.navigate(['/login']);
  }

  private saveTokens(val: LoginAuthResponse): void {
    this.token = val.access_token;
    this.refreshToken = val.refresh_token;

    this.cookieService.set('token', this.token);
    this.cookieService.set('refreshToken', this.refreshToken);
  }
}
