import { Component, inject } from '@angular/core';
import { ProfileHeaderComponent } from '../../../shared/ui/profile-header/profile-header.component';
import { AccountService } from '../../../entities/account/_model/account.service';
import { AsyncPipe } from '@angular/common';
import { SpinnerComponent } from '../../../shared/ui/spinner/spinner.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { ButtonComponent } from '../../../shared/ui-kit/button/button.component';
import { ProfileInfoComponent } from '../../../modules/profile-info/model/profile-info.component';

@Component({
    selector: 'app-profile-page',
    standalone: true,
    imports: [
        ProfileHeaderComponent,
        AsyncPipe,
        SpinnerComponent,
        ButtonComponent,
        RouterLink,
        ProfileInfoComponent,
    ],
    templateUrl: '../ui/profile-page.component.html',
    styleUrl: '../ui/profile-page.component.scss',
})
export class ProfilePageComponent {
    userService = inject(AccountService);
    route = inject(ActivatedRoute);

    profile$ = this.route.params.pipe(
        switchMap(({ id }) =>
            id === 'me'
                ? this.userService.getMe()
                : this.userService.getAccount(id),
        ),
    );
}
