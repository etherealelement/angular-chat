import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LayoutComponent } from './shared/ui/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
  { path: 'login', component: LoginPageComponent },
];
