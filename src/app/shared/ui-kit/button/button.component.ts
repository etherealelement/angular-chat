import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonProps, ButtonSize } from './types/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() type: ButtonProps = 'primary';
  @Input() size: ButtonSize = 'large';
  @Input() text: string = 'Button';

  get buttonClasses() {
    return {
      'btn-primary': this.type === 'primary',
      'btn-small': this.size === 'small',
      'btn-large': this.size === 'large',
    };
  }
}
