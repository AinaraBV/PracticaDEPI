import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResidenciasService, Residencia } from '../../../services/residencias.service';

 
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  constructor(private router:Router, private _residenciaService: ResidenciasService) { }

  ngOnInit() {



  }

  buscar(value: string){
    let rutaActual: String = this.router.url;

    if(rutaActual=='/residencias' || rutaActual.indexOf('/buscar/') >= 0){

      this.router.navigate(['/buscar', value])
      //let residenciaEncontrada: Residencia[] = this._residenciaService.getResidenciaByName(value);


    }
  }

}
