import { Component } from '@angular/core';
import { ProfileHeaderComponent } from '../../../modules/profile-header/model/profile-header.component';
import { SettingsFormComponent } from '../../../modules/settings-form/model/settings-form.component';

@Component({
    selector: 'app-ui',
    standalone: true,
    imports: [ProfileHeaderComponent, SettingsFormComponent],
    templateUrl: '../ui/profile-settings.component.html',
    styleUrl: '../ui/profile-settings.component.scss',
})
export class ProfileSettingsComponent {}
