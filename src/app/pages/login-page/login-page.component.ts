import { Component } from '@angular/core';
import { HeadingComponent } from '../../shared/ui-kit/heading/heading.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/ui-kit/button/button.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [HeadingComponent, CommonModule, ButtonComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {}
