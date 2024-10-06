import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginAuthPayload, LoginAuthResponse} from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private httpClient = inject(HttpClient)
  private baseApiUrl = 'https://icherniakov.ru/yt-course/auth/'

  token: string | null = null
  refreshToken: string | null = null

  get isAuth() {
    return !!this.token
  }

  login(payload: LoginAuthPayload){
    const formData = new FormData()

    formData.append('username', payload.username)
    formData.append('password', payload.password)
      return this.httpClient.post<LoginAuthResponse>(`${this.baseApiUrl}token`, formData)
        .subscribe({
          next: (response) => {
            this.token = response.access_token
            this.refreshToken = response.refresh_token
          },
          error: (error) => {
            console.log(error)
          }
        })
  }
}
