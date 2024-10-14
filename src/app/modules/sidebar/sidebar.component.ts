import { Component, inject, OnInit, signal } from '@angular/core';
import { SvgIconComponent } from '../../shared/ui/svg-icon/svg-icon.component';
import { UserSubComponent } from '../../shared/ui/user-sub/user-sub.component';
import { SidebarService } from './services/sidebar.service';
import { CommonModule } from '@angular/common';
import { ImgUrlPipe } from '../../shared/utils/validate-img-url/img-url.pipe';
import { SpinnerComponent } from '../../shared/ui/spinner/spinner.component';
import { AccountService } from '../../entities/account/_model/account.service';
import { Profile } from '../../entities/account/_domain/account';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [
        SvgIconComponent,
        UserSubComponent,
        CommonModule,
        ImgUrlPipe,
        SpinnerComponent,
        RouterLink,
        RouterLinkActive,
    ],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
    sidebarService = inject(SidebarService);
    userService = inject(AccountService);

    userService$ = this.userService.getMe();
    subscribers$ = this.sidebarService.getSubscribersList();

    profile = signal<Profile | null>(null);

    ngOnInit() {
        this.userService$.subscribe({
            next: (res) => this.profile.set(res),
        });
    }

    protected menuItems: {
        label: string;
        icon: string;
        link: string;
    }[] = [
        {
            label: 'Моя страница',
            icon: 'home',
            link: '/profile/me',
        },
        {
            label: 'Чаты',
            icon: 'chat',
            link: 'chats',
        },
        {
            label: 'Поиск',
            icon: 'search',
            link: 'search',
        },
    ];
}
