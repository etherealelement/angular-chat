import { Component, Input } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { Profile } from '../../../entities/me/interfaces/profile';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-profile-header',
    standalone: true,
    imports: [SvgIconComponent, RouterLink],
    templateUrl: './profile-header.component.html',
    styleUrl: './profile-header.component.scss',
})
export class ProfileHeaderComponent {
    @Input() profile!: Profile;
}
