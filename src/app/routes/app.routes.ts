import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from '../components/login-form/login-form.component'
import { ListaResidenciasComponent } from '../components/lista-residencias/lista-residencias.component';

const APP_ROUTES: Routes = [
    { path: 'residencias', component: ListaResidenciasComponent},
    { path: 'login', component: LoginFormComponent },
    { path: '**', pathMatch:'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);