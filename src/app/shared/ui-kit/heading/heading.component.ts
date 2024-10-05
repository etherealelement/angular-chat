import { Component, Input } from '@angular/core';
import { HeadingProps } from './types/heading';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss',
})
export class HeadingComponent {
  @Input() headingType: HeadingProps = 'h1';
  @Input() text: string = 'Заголовок';
}
