import { Component, inject } from '@angular/core';
import { SvgIconComponent } from '../../shared/ui/svg-icon/svg-icon.component';
import { UserSubComponent } from '../../shared/ui/user-sub/user-sub.component';
import { SidebarService } from './services/sidebar.service';
import { CommonModule } from '@angular/common';
import { ImgUrlPipe } from '../../shared/utils/validate-img-url/img-url.pipe';
import { SpinnerComponent } from '../../shared/ui/spinner/spinner.component';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [
        SvgIconComponent,
        UserSubComponent,
        CommonModule,
        ImgUrlPipe,
        SpinnerComponent,
    ],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
    sidebarService = inject(SidebarService);

    subscribers$ = this.sidebarService.getSubscribersList();

    protected menuItems: {
        label: string;
        icon: string;
        link: string;
    }[] = [
        {
            label: 'Моя страница',
            icon: 'home',
            link: '',
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
