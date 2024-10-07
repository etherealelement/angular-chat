import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from '../../modules/auth/ui/auth.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, AuthComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
