import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from '../components/login-form/login-form.component'
import { PacienteComponent } from '../components/paciente/paciente.component';

const APP_ROUTES: Routes = [
    { path: 'paciente', component: PacienteComponent },
    { path: 'login', component: LoginFormComponent },
    { path: '**', pathMatch:'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);