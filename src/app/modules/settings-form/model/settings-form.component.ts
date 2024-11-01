import {
    Component,
    effect,
    inject,
    ViewChild,
    AfterViewInit,
} from '@angular/core';
import { InputComponent } from '../../../shared/ui/input/input.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SvgIconComponent } from '../../../shared/ui/svg-icon/svg-icon.component';
import { UploadPhotoComponent } from '../../../shared/ui/upload-photo/upload-photo.component';
import { AccountService } from '../../../entities/account/_model/account.service';
import { firstValueFrom } from 'rxjs';

@Component({
    selector: 'app-settings-form',
    standalone: true,
    imports: [
        InputComponent,
        ReactiveFormsModule,
        SvgIconComponent,
        UploadPhotoComponent,
    ],
    templateUrl: '../ui/settings-form.component.html',
    styleUrls: ['../ui/settings-form.component.scss'],
})
export class SettingsFormComponent implements AfterViewInit {
    fb = inject(FormBuilder);
    accountService = inject(AccountService);

    @ViewChild(UploadPhotoComponent) avatarUploader: any;

    form = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        username: ['', Validators.required],
        description: [''],
        stack: [''],
    });

    constructor() {
        effect(() => {
            this.form.patchValue({
                ...this.accountService.getMe(),
                stack: this.mergeStack(this.accountService.getMe()?.stack),
            });
        });
    }

    ngAfterViewInit() {
        this.avatarUploader?.avatar;
    }

    onSave() {
        this.form.markAllAsTouched();
        this.form.updateValueAndValidity();

        if (this.form.invalid) return;
    }

    splitStack(stack: string | null | string[] | undefined): string[] | [] {
        if (!stack) return [];
        if (Array.isArray(stack)) return stack;

        return stack.split(',');
    }

    mergeStack(stack: string | null | string[] | undefined): string[] | string {
        if (!stack) return '';
        if (Array.isArray(stack)) return stack.join(',');

        return stack;
    }
}
