import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { BuscadorComponent } from './shared/buscador/buscador.component';
import { PacienteComponent } from './components/paciente/paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    PacienteComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
