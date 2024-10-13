import { Component } from '@angular/core';
import { SvgIconComponent } from '../../../shared/ui/svg-icon/svg-icon.component';
import { HeadingComponent } from '../../../shared/ui-kit/heading/heading.component';
import { ProfileTagComponent } from '../../../shared/ui/profile-tag/profile-tag.component';

@Component({
    selector: 'app-profile-info',
    standalone: true,
    imports: [SvgIconComponent, HeadingComponent, ProfileTagComponent],
    templateUrl: '../ui/profile-info.component.html',
    styleUrl: '../ui/profile-info.component.scss',
})
export class ProfileInfoComponent {}
