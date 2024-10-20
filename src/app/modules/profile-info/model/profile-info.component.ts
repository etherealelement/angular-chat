import { Component, inject } from '@angular/core';
import { SvgIconComponent } from '../../../shared/ui/svg-icon/svg-icon.component';
import { HeadingComponent } from '../../../shared/ui-kit/heading/heading.component';
import { ProfileTagComponent } from '../../../shared/ui/profile-tag/profile-tag.component';
import { SpinnerComponent } from '../../../shared/ui/spinner/spinner.component';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { AccountService } from '../../../entities/account/_model/account.service';
import { ImgUrlPipe } from '../../../shared/utils/validate-img-url/img-url.pipe';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-profile-info',
    standalone: true,
    imports: [
        SvgIconComponent,
        HeadingComponent,
        ProfileTagComponent,
        SpinnerComponent,
        AsyncPipe,
        JsonPipe,
        ImgUrlPipe,
        RouterLink,
    ],
    templateUrl: '../ui/profile-info.component.html',
    styleUrl: '../ui/profile-info.component.scss',
})
export class ProfileInfoComponent {
    profile = inject(AccountService);

    profileInfo$ = this.profile.getMe();

    subscriptions$ = this.profile.getSubscriptions();
}
