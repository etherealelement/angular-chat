import { Component, inject, Input } from '@angular/core';
import { SvgIconComponent } from '../../../shared/ui/svg-icon/svg-icon.component';
import { RouterLink } from '@angular/router';
import { AccountService } from '../../../entities/account/_model/account.service';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-profile-header',
    standalone: true,
    imports: [SvgIconComponent, RouterLink, AsyncPipe],
    templateUrl: '../ui/profile-header.component.html',
    styleUrl: '../ui/profile-header.component.scss',
})
export class ProfileHeaderComponent {
    protected accountService = inject(AccountService);
    protected profile$ = this.accountService.getMe();
    @Input() isProfile = true;
}
