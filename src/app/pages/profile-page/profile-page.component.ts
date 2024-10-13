import { Component, inject, signal, OnInit } from '@angular/core';
import { ProfileHeaderComponent } from '../../shared/ui/profile-header/profile-header.component';
import { UserService } from '../../entities/me/services/me.service';
import { AsyncPipe } from '@angular/common';
import { SpinnerComponent } from '../../shared/ui/spinner/spinner.component';
import { Profile } from '../../entities/me/interfaces/profile';

@Component({
    selector: 'app-profile-page',
    standalone: true,
    imports: [ProfileHeaderComponent, AsyncPipe, SpinnerComponent],
    templateUrl: './profile-page.component.html',
    styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent {
    userService = inject(UserService);

    profile = signal<Profile | null>(null);

    profile$ = this.userService.getMe().subscribe({
        next: (res) => this.profile.set(res),
        error: (err) => console.log(`Errr ${err}`),
    });
}
