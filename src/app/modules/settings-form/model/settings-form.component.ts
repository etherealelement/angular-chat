import { Component } from '@angular/core';
import { InputComponent } from '../../../shared/ui/input/input.component';

@Component({
    selector: 'app-settings-form',
    standalone: true,
    imports: [InputComponent],
    templateUrl: '../ui/settings-form.component.html',
    styleUrl: '../ui/settings-form.component.scss',
})
export class SettingsFormComponent {}
