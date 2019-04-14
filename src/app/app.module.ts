import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ListaResidenciasComponent } from './components/lista-residencias/lista-residencias.component'
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';
import { PacienteComponent } from './components/paciente/paciente.component';

//Rutas
import { APP_ROUTING } from './routes/app.routes';

//Servicios
import { LoginService } from './services/login.service';
import { ResidenciasService } from './services/residencias.service';
import { PacientesService } from './services/pacientes.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginFormComponent,
    ListaResidenciasComponent,
    ListaPacientesComponent,
    PacienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    APP_ROUTING
  ],
  providers: [
    LoginService,
    ResidenciasService,
    PacientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
