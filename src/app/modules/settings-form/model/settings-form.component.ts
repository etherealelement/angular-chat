import { Component, inject } from '@angular/core';
import { InputComponent } from '../../../shared/ui/input/input.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SvgIconComponent } from '../../../shared/ui/svg-icon/svg-icon.component';

@Component({
    selector: 'app-settings-form',
    standalone: true,
    imports: [InputComponent, ReactiveFormsModule, SvgIconComponent],
    templateUrl: '../ui/settings-form.component.html',
    styleUrl: '../ui/settings-form.component.scss',
})
export class SettingsFormComponent {
    fb = inject(FormBuilder);

    form = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        username: ['', Validators.required],
        description: [''],
        stack: [''],
    });
}
