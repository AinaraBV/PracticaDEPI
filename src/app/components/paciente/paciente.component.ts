import { Component, OnInit } from '@angular/core';
import { PacientesService, Paciente } from '../../services/pacientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {

  paciente:Paciente;

  constructor(private _PacientesService:PacientesService, private route:Router) { }

  ngOnInit() {
    this.paciente = this._PacientesService.getPacienteSelected();
  }

  loadListaPacientes(){
    this.paciente.selected = false;
    this.route.navigate(['pacientes']);
  }

  removePaciente(){
    this._PacientesService.removeOne(this.paciente);
    this.route.navigate(['pacientes']);
  }

}
