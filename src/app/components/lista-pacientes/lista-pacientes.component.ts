import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MdbTablePaginationComponent,MdbTableService } from 'angular-bootstrap-md'
import { Paciente, PacientesService } from 'src/app/services/pacientes.service';
import { ResidenciasService, Residencia } from '../../services/residencias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.scss']
})
export class ListaPacientesComponent implements OnInit {
  @ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;

  
  firstItemIndex;
  lastItemIndex;

  Pacientes:Paciente[] = [];
  previous:Paciente[] = [];

  Residencia:Residencia;
  private sorted = false;

  constructor(private tableService: MdbTableService, private cdRef: ChangeDetectorRef, private _pacientes: PacientesService, private _residencia: ResidenciasService, private route:Router) {}

  ngOnInit() {  
    this.Pacientes = this._pacientes.getPacientes();
    this.Residencia = this._residencia.getResidenciaSeleccionada();

    this.tableService.setDataSource(this.Pacientes);
    this.Pacientes = this.tableService.getDataSource();
    this.previous = this.tableService.getDataSource();
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(6);
    this.firstItemIndex = this.mdbTablePagination.firstItemIndex;
    this.lastItemIndex = this.mdbTablePagination.lastItemIndex;

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  onNextPageClick(data: any) {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }

  onPreviousPageClick(data: any) {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }

  sortBy(by: string | any): void {

    this.Pacientes.sort((a: any, b: any) => {
      if (a[by] < b[by]) {
        return this.sorted ? 1 : -1;
      }
      if (a[by] > b[by]) {
        return this.sorted ? -1 : 1;
      }

      return 0;
    });

    this.sorted = !this.sorted;
  }

  loadResidencias(){
    this.Residencia.seleccionada = false;
    this.route.navigate(['residencias']);
  }

}
