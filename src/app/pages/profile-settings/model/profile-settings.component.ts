import { Component } from '@angular/core';
import { ProfileHeaderComponent } from '../../../modules/profile-header/model/profile-header.component';

@Component({
    selector: 'app-ui',
    standalone: true,
    imports: [ProfileHeaderComponent],
    templateUrl: '../ui/profile-settings.component.html',
    styleUrl: '../ui/profile-settings.component.scss',
})
export class ProfileSettingsComponent {}
