import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from '../components/login-form/login-form.component'

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginFormComponent },
    { path: '**', pathMatch:'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);