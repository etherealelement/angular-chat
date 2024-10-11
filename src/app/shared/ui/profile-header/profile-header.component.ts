import { Component, Input } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
    selector: 'app-profile-header',
    standalone: true,
    imports: [SvgIconComponent],
    templateUrl: './profile-header.component.html',
    styleUrl: './profile-header.component.scss',
})
export class ProfileHeaderComponent {
    @Input() avatar = '';
    @Input() firstName = '';
    @Input() lastName = '';
    @Input() username = '';
}
