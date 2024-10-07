import { Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/ui/auth.component';
import { LayoutComponent } from './shared/ui/layout/layout.component';
import {canActivateAuth} from './shared/utils/access-guard/access-guard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [canActivateAuth],
  },
  { path: 'login', component: AuthComponent },
];
