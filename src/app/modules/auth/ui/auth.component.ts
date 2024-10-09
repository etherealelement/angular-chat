import {Component, inject, signal} from '@angular/core';
import { HeadingComponent } from '../../../shared/ui-kit/heading/heading.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/ui-kit/button/button.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [HeadingComponent, CommonModule, ButtonComponent, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  authService = inject(AuthService)


  errorText = this.authService.errorText
  isPasswordVisible = signal<boolean>(false);

  form = new FormGroup({
    username: new FormControl<string | null>(null, Validators.required),
    password: new FormControl<string | null>(null, Validators.required),
  });

  ngOnInit() {
    this.form.valueChanges.subscribe(() => {
      this.errorText.set(null)
    })
  }

  onSubmit(event: Event) {
    event.preventDefault()
    if (this.form.valid) {
      // @ts-ignore
      this.authService.login(this.form.value)
    }
  }
}
