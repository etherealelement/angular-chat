import { Component, signal } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { DndDirective } from '../../utils/dnd/dnd.directive';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-upload-photo',
    standalone: true,
    imports: [SvgIconComponent, DndDirective, FormsModule],
    templateUrl: './upload-photo.component.html',
    styleUrl: './upload-photo.component.scss',
})
export class UploadPhotoComponent {
    preview = signal<string>('/assets/svg/avatar-placeholder.svg');

    avatar: File | null = null;

    processFile(file: File | null) {
        if (!file || !file.type.match('image')) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            this.preview.set(event.target?.result?.toString() ?? '');
        };

        reader.readAsDataURL(file);
    }

    fileBrowserHandler(event: Event) {
        const file = (event?.target as HTMLInputElement).files?.[0] as File;
        this.processFile(file);
    }

    onFileDropped(file: File) {
        this.preview.set(URL.createObjectURL(file));
    }
}
