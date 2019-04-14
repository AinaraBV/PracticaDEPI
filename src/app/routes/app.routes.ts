import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from '../components/login-form/login-form.component'
import { ListaResidenciasComponent } from '../components/lista-residencias/lista-residencias.component';
import { ListaPacientesComponent } from '../components/lista-pacientes/lista-pacientes.component';
import { PacienteComponent } from '../components/paciente/paciente.component';

const APP_ROUTES: Routes = [
    { path: 'detalle', component: PacienteComponent},
    { path: 'pacientes', component: ListaPacientesComponent},
    { path: 'residencias', component: ListaResidenciasComponent},
    { path: '', component: LoginFormComponent },
    { path: '**', pathMatch:'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);