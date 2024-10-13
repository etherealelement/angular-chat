import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    protected httpClient = inject(HttpClient);
    protected baseUrl = 'https://icherniakov.ru/yt-course/account/me';

    getMe() {
        return this.httpClient.get<Profile>(this.baseUrl);
    }

    getAccount(id: string) {
        return this.httpClient.get<Profile>(`${this.baseUrl}/${id}`);
    }
}
