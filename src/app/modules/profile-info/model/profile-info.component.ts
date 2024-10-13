import { Component } from '@angular/core';
import { SvgIconComponent } from '../../../shared/ui/svg-icon/svg-icon.component';

@Component({
    selector: 'app-profile-info',
    standalone: true,
    imports: [SvgIconComponent],
    templateUrl: '../ui/profile-info.component.html',
    styleUrl: '../ui/profile-info.component.scss',
})
export class ProfileInfoComponent {}
