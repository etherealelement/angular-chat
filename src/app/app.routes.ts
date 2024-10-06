import { Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/ui/auth.component';
import { LayoutComponent } from './shared/ui/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
  { path: 'login', component: AuthComponent },
];
