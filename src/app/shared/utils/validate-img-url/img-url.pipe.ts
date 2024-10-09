import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'imgUrl',
    standalone: true,
})
export class ImgUrlPipe implements PipeTransform {
    baseUrl = 'https://icherniakov.ru/yt-course/';

    transform(value: string): string {
        return value !== null ? `${this.baseUrl}${value}` : '';
    }
}
