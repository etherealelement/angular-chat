import {Component, inject} from '@angular/core';
import { HeadingComponent } from '../../../shared/ui-kit/heading/heading.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/ui-kit/button/button.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {from, map} from 'rxjs';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [HeadingComponent, CommonModule, ButtonComponent, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  authService = inject(AuthService)

  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  onSubmit(event: Event) {
    event.preventDefault()
    if (this.form.valid) {
      // @ts-ignore
      this.authService.login(this.form.value);
    }
  }
}
