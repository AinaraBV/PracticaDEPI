import { Component, OnInit } from '@angular/core';
import { ResidenciasService, Residencia } from 'src/app/services/residencias.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-residencias',
  templateUrl: './lista-residencias.component.html',
  styleUrls: ['./lista-residencias.component.scss']
})
export class ListaResidenciasComponent implements OnInit {

  Residencias:Residencia[] = [];

  constructor(private _residencias:ResidenciasService, private route:Router) { }

  ngOnInit() {
    this.Residencias = this._residencias.getResidencias();
  }

  loadImage(res:Residencia){
    const styles = {'background-image' : 'url('+res.img+')'};
    return styles;
  }

  loadPacientes(res:Residencia) {
    res.seleccionada = true;
    this.route.navigate(['pacientes']);
  }

}
