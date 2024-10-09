import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pageble } from '../interfaces/pageble';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SidebarService {
    httpClient = inject(HttpClient);

    protected baseUrl = 'https://icherniakov.ru/yt-course/';

    getSubscribersList() {
        return this.httpClient
            .get<Pageble>(`${this.baseUrl}account/subscriptions/`)
            .pipe(
                map((res) =>
                    res.items.filter((user) => user.firstName !== 'Test'),
                ),
            );
    }
}
