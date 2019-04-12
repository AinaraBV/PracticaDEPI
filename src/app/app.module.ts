import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ListaResidenciasComponent } from './components/lista-residencias/lista-residencias.component'

//Rutas
import { APP_ROUTING } from './routes/app.routes';

//Servicios
import { LoginService } from './services/login.service';
import { ResidenciasService } from './services/residencias.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginFormComponent,
    ListaResidenciasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    APP_ROUTING
  ],
  providers: [
    LoginService,
    ResidenciasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
