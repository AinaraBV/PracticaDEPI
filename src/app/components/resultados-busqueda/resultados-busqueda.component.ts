import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenciasService, Residencia } from '../../services/residencias.service';

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.component.html',
  styleUrls: ['./resultados-busqueda.component.scss']
})
export class ResultadosBusquedaComponent implements OnInit {

  residenciasEncontradas:any[] = [];
  termino:string = "";

  constructor( private activatedRoute: ActivatedRoute, private _residenciasService:ResidenciasService, private route:Router) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.residenciasEncontradas = this._residenciasService.getResidenciaByName(params['termino'])
    });

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
