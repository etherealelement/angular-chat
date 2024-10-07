import {Component, inject} from '@angular/core';
import { HeadingComponent } from '../../../shared/ui-kit/heading/heading.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/ui-kit/button/button.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {from, map} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [HeadingComponent, CommonModule, ButtonComponent, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  authService = inject(AuthService)
  router = inject(Router)

  form = new FormGroup({
    username: new FormControl<string | null>(null, Validators.required),
    password: new FormControl<string | null>(null, Validators.required),
  });

  onSubmit(event: Event) {
    event.preventDefault()
    if (this.form.valid) {
      // @ts-ignore
      this.authService.login(this.form.value)
    }
  }
}
