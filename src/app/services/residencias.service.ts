import { Injectable } from '@angular/core';

@Injectable()
export class ResidenciasService {

    private residencias:Residencia[] = [
        {
            Nombre: "Ultimo Suspiro",
            img: '../../../assets/Residencias/res1.jpg',
            localizacion: 'Carranque (Toledo), C/Final, nº 89, CP: 45216',
            telefono: '925529089',
            email: 'ultimo.suspiro@gmail.com',
            numero: 145,
            last_update: '3 horas',
            seleccionada: false,
        },
        {
            Nombre: "Nueva Juventud",
            img: '../../../assets/Residencias/res2.jpg',
            localizacion: 'Alcorcón (Madrid), C/Jabonería, nº 77, CP: 10025',
            telefono: '956321984',
            email: 'nueva.juventud@gmail.com',
            numero: 213,
            last_update: '15 horas',
            seleccionada: false,
        },
        {
            Nombre: "La Gran Retirada",
            img: '../../../assets/Residencias/res3.jpg',
            localizacion: 'Leganés (Madrid), Av/Universidad, nº 15, CP: 12034',
            telefono: '958743625',
            email: 'gran.retirada@gmail.com',
            numero: 95,
            last_update: '2 días',
            seleccionada: false,
        },
        {
            Nombre: "El Remanso",
            img: '../../../assets/Residencias/res4.jpg',
            localizacion: 'Las Rozas (Madrid), C/Cara, nº 52, CP: 32687',
            telefono: '914258736',
            email: 'el.remanso@gmail.com',
            numero: 320,
            last_update: '40 minutos',
            seleccionada: false,
        },
        {
            Nombre: "Abuelito Dime Tu",
            img: '../../../assets/Residencias/res5.jpg',
            localizacion: 'Carabanchel (Madrid), C/Zurbarán, nº 62, CP: 74152',
            telefono: '984236571',
            email: 'abuelito.dime.tu@gmail.com',
            numero: 83,
            last_update: '5 días',
            seleccionada: false,
        },
        {
            Nombre: "Buscando El Paraíso",
            img: '../../../assets/Residencias/res6.jpg',
            localizacion: 'Móstoles (Madrid), C/Piedra, nº 14, CP: 32541',
            telefono: '966345524',
            email: 'buscando.paraiso@gmail.com',
            numero: 124,
            last_update: '3 minutos',
            seleccionada: false,
        }
    ]

    constructor() { }

    getResidencias():Residencia[]{
        return this.residencias;
    }

    getResidenciaSeleccionada():Residencia{

        for(let i = 0; i<this.residencias.length; i++){
            if(this.residencias[i].seleccionada==true){
                return this.residencias[i];
            }
        }

        return null;
    }

    getResidenciaByName(nombre: string): Residencia[]{    
        nombre = nombre.toLowerCase();

        let residenciasArr: Residencia[] = [];

        for(let i=0; i<this.residencias.length; i++){
            if(this.residencias[i].Nombre.toLowerCase().indexOf(nombre) >= 0){
                residenciasArr.push(this.residencias[i]);
            }
        }

        return residenciasArr;
    }
}

export interface Residencia{
    Nombre:String;
    img:String;
    localizacion:String;
    telefono:String;
    email:String;
    numero:Number;
    last_update:String;
    seleccionada:boolean;
}
