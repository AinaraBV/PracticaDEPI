import { Component, OnInit } from '@angular/core';
import { ResidenciasService, Residencia } from 'src/app/services/residencias.service';


@Component({
  selector: 'app-lista-residencias',
  templateUrl: './lista-residencias.component.html',
  styleUrls: ['./lista-residencias.component.scss']
})
export class ListaResidenciasComponent implements OnInit {

  Residencias:Residencia[] = [];

  constructor(private _residencias:ResidenciasService) { }

  ngOnInit() {
    this.Residencias = this._residencias.getResidencias();
  }

  loadImage(res:Residencia){
    const styles = {'background-image' : 'url('+res.img+')'};
    return styles;
  }

}
