import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-user-sub',
    standalone: true,
    imports: [],
    templateUrl: './user-sub.component.html',
    styleUrl: './user-sub.component.scss',
})
export class UserSubComponent {
    @Input() avatar = '';
    @Input() firstName = '';
    @Input() lastName = '';
}
