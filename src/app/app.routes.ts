import { Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/ui/auth.component';
import { LayoutComponent } from './shared/ui/layout/layout.component';
import { canActivateAuth } from './shared/utils/access-guard/access-guard';
import { ProfilePageComponent } from './pages/profile/model/profile-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [{ path: 'profile/:id', component: ProfilePageComponent }],
        canActivate: [canActivateAuth],
    },
    { path: 'login', component: AuthComponent },
];
