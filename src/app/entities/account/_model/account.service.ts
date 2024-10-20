import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../_domain/account';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AccountService {
    protected httpClient = inject(HttpClient);
    protected baseUrl = 'https://icherniakov.ru/yt-course/account/';

    getMe() {
        return this.httpClient.get<Profile>(`${this.baseUrl}me`);
    }

    getSubscriptions(page = 1, size = 50) {
        return this.httpClient
            .get<{
                items: Profile[];
            }>(`${this.baseUrl}subscriptions/?page=${page}&size=${size}`)
            .pipe(map((res) => res.items));
    }

    getAccount(id: string) {
        return this.httpClient.get<Profile>(`${this.baseUrl}me/${id}`);
    }
}
