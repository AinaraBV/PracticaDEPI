import { Injectable } from '@angular/core';

@Injectable()
export class PacientesService {

    private pacientes:Paciente[] = [
        {
            "Changed": 0,
            "Nombre": "Raphael",
            "Apellidos": "Valdez",
            "Inicio_toma": "08/04/20",
            "Fin_toma": "04/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Suki",
            "Apellidos": "Mcknight",
            "Inicio_toma": "17/04/20",
            "Fin_toma": "10/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Gil",
            "Apellidos": "Stout",
            "Inicio_toma": "10/04/20",
            "Fin_toma": "02/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Daryl",
            "Apellidos": "Marsh",
            "Inicio_toma": "03/04/20",
            "Fin_toma": "02/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Cathleen",
            "Apellidos": "Luna",
            "Inicio_toma": "01/04/20",
            "Fin_toma": "07/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Axel",
            "Apellidos": "Jones",
            "Inicio_toma": "24/04/20",
            "Fin_toma": "02/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Paki",
            "Apellidos": "Merrill",
            "Inicio_toma": "24/04/20",
            "Fin_toma": "03/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Merritt",
            "Apellidos": "Bernard",
            "Inicio_toma": "30/04/20",
            "Fin_toma": "04/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Kaitlin",
            "Apellidos": "Marshall",
            "Inicio_toma": "18/04/20",
            "Fin_toma": "03/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Joan",
            "Apellidos": "Bishop",
            "Inicio_toma": "26/04/20",
            "Fin_toma": "03/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Glenna",
            "Apellidos": "Snider",
            "Inicio_toma": "20/04/20",
            "Fin_toma": "01/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Anne",
            "Apellidos": "Gill",
            "Inicio_toma": "24/04/20",
            "Fin_toma": "11/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Camille",
            "Apellidos": "Osborne",
            "Inicio_toma": "01/04/20",
            "Fin_toma": "02/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Jin",
            "Apellidos": "Patel",
            "Inicio_toma": "13/04/20",
            "Fin_toma": "06/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Aiko",
            "Apellidos": "Salinas",
            "Inicio_toma": "12/04/20",
            "Fin_toma": "02/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Aladdin",
            "Apellidos": "Wooten",
            "Inicio_toma": "04/04/20",
            "Fin_toma": "05/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Rosalyn",
            "Apellidos": "Saunders",
            "Inicio_toma": "28/04/20",
            "Fin_toma": "02/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Xerxes",
            "Apellidos": "Rivers",
            "Inicio_toma": "10/04/20",
            "Fin_toma": "06/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Autumn",
            "Apellidos": "Wells",
            "Inicio_toma": "17/04/20",
            "Fin_toma": "03/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Veronica",
            "Apellidos": "Luna",
            "Inicio_toma": "06/04/20",
            "Fin_toma": "02/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Georgia",
            "Apellidos": "Levy",
            "Inicio_toma": "21/04/20",
            "Fin_toma": "07/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Kylie",
            "Apellidos": "Velasquez",
            "Inicio_toma": "18/04/20",
            "Fin_toma": "02/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Bertha",
            "Apellidos": "Ray",
            "Inicio_toma": "05/04/20",
            "Fin_toma": "01/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Zenaida",
            "Apellidos": "Erickson",
            "Inicio_toma": "07/04/20",
            "Fin_toma": "06/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Uriah",
            "Apellidos": "Cline",
            "Inicio_toma": "25/04/20",
            "Fin_toma": "07/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Oleg",
            "Apellidos": "Hill",
            "Inicio_toma": "09/04/20",
            "Fin_toma": "13/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Michael",
            "Apellidos": "Britt",
            "Inicio_toma": "07/04/20",
            "Fin_toma": "09/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Shelby",
            "Apellidos": "Gates",
            "Inicio_toma": "02/04/20",
            "Fin_toma": "07/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Charlotte",
            "Apellidos": "Merrill",
            "Inicio_toma": "24/04/20",
            "Fin_toma": "13/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Mohammad",
            "Apellidos": "Pennington",
            "Inicio_toma": "17/04/20",
            "Fin_toma": "08/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Steven",
            "Apellidos": "Ray",
            "Inicio_toma": "24/04/20",
            "Fin_toma": "06/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Roary",
            "Apellidos": "Cantu",
            "Inicio_toma": "04/04/20",
            "Fin_toma": "04/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Sylvia",
            "Apellidos": "Malone",
            "Inicio_toma": "02/04/20",
            "Fin_toma": "05/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Ciara",
            "Apellidos": "Craig",
            "Inicio_toma": "09/04/20",
            "Fin_toma": "07/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Wyatt",
            "Apellidos": "Mcbride",
            "Inicio_toma": "21/04/20",
            "Fin_toma": "05/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Graham",
            "Apellidos": "Bender",
            "Inicio_toma": "16/04/20",
            "Fin_toma": "02/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Abdul",
            "Apellidos": "Ray",
            "Inicio_toma": "02/04/20",
            "Fin_toma": "10/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Lilah",
            "Apellidos": "Rosario",
            "Inicio_toma": "25/04/20",
            "Fin_toma": "06/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Cairo",
            "Apellidos": "Henson",
            "Inicio_toma": "08/04/20",
            "Fin_toma": "03/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Alexandra",
            "Apellidos": "Mccormick",
            "Inicio_toma": "12/04/20",
            "Fin_toma": "09/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Stacey",
            "Apellidos": "Knight",
            "Inicio_toma": "30/04/20",
            "Fin_toma": "07/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Ross",
            "Apellidos": "Winters",
            "Inicio_toma": "24/04/20",
            "Fin_toma": "03/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Aaron",
            "Apellidos": "Ayers",
            "Inicio_toma": "14/04/20",
            "Fin_toma": "12/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Ishmael",
            "Apellidos": "Barron",
            "Inicio_toma": "28/04/20",
            "Fin_toma": "04/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Ebony",
            "Apellidos": "Franklin",
            "Inicio_toma": "24/04/20",
            "Fin_toma": "02/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Garth",
            "Apellidos": "Winters",
            "Inicio_toma": "07/04/20",
            "Fin_toma": "13/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Amaya",
            "Apellidos": "Mathis",
            "Inicio_toma": "18/04/20",
            "Fin_toma": "10/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Illana",
            "Apellidos": "Barber",
            "Inicio_toma": "22/04/20",
            "Fin_toma": "08/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Iola",
            "Apellidos": "Gomez",
            "Inicio_toma": "03/04/20",
            "Fin_toma": "03/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Jorden",
            "Apellidos": "Harrell",
            "Inicio_toma": "25/04/20",
            "Fin_toma": "01/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Kylee",
            "Apellidos": "Bradshaw",
            "Inicio_toma": "09/04/20",
            "Fin_toma": "10/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Iola",
            "Apellidos": "Bird",
            "Inicio_toma": "03/04/20",
            "Fin_toma": "06/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Salvador",
            "Apellidos": "Conway",
            "Inicio_toma": "03/04/20",
            "Fin_toma": "06/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Ciara",
            "Apellidos": "Raymond",
            "Inicio_toma": "13/04/20",
            "Fin_toma": "07/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Tara",
            "Apellidos": "Small",
            "Inicio_toma": "14/04/20",
            "Fin_toma": "06/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "India",
            "Apellidos": "Reed",
            "Inicio_toma": "22/04/20",
            "Fin_toma": "09/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Jonah",
            "Apellidos": "Hart",
            "Inicio_toma": "01/04/20",
            "Fin_toma": "01/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Luke",
            "Apellidos": "Edwards",
            "Inicio_toma": "25/04/20",
            "Fin_toma": "12/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "McKenzie",
            "Apellidos": "Morris",
            "Inicio_toma": "16/04/20",
            "Fin_toma": "05/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Jesse",
            "Apellidos": "Goodman",
            "Inicio_toma": "17/04/20",
            "Fin_toma": "12/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Orlando",
            "Apellidos": "Mccormick",
            "Inicio_toma": "26/04/20",
            "Fin_toma": "09/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Fallon",
            "Apellidos": "Workman",
            "Inicio_toma": "04/04/20",
            "Fin_toma": "09/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Ferdinand",
            "Apellidos": "Coleman",
            "Inicio_toma": "07/04/20",
            "Fin_toma": "02/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Alyssa",
            "Apellidos": "Madden",
            "Inicio_toma": "27/04/20",
            "Fin_toma": "07/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Ulla",
            "Apellidos": "Hill",
            "Inicio_toma": "20/04/20",
            "Fin_toma": "01/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Dalton",
            "Apellidos": "Cross",
            "Inicio_toma": "21/04/20",
            "Fin_toma": "08/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Wyatt",
            "Apellidos": "Rowland",
            "Inicio_toma": "23/04/20",
            "Fin_toma": "12/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Lance",
            "Apellidos": "Conner",
            "Inicio_toma": "24/04/20",
            "Fin_toma": "10/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Gray",
            "Apellidos": "Marsh",
            "Inicio_toma": "21/04/20",
            "Fin_toma": "03/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Helen",
            "Apellidos": "Hinton",
            "Inicio_toma": "20/04/20",
            "Fin_toma": "02/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Ora",
            "Apellidos": "Savage",
            "Inicio_toma": "29/04/20",
            "Fin_toma": "12/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Caesar",
            "Apellidos": "Dean",
            "Inicio_toma": "08/04/20",
            "Fin_toma": "08/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Oleg",
            "Apellidos": "Reese",
            "Inicio_toma": "04/04/20",
            "Fin_toma": "09/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Joan",
            "Apellidos": "Frederick",
            "Inicio_toma": "20/04/20",
            "Fin_toma": "05/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Ann",
            "Apellidos": "Kidd",
            "Inicio_toma": "18/04/20",
            "Fin_toma": "07/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Aiko",
            "Apellidos": "Wilkinson",
            "Inicio_toma": "26/04/20",
            "Fin_toma": "05/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Jameson",
            "Apellidos": "Peterson",
            "Inicio_toma": "03/04/20",
            "Fin_toma": "02/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Chaim",
            "Apellidos": "Gonzales",
            "Inicio_toma": "17/04/20",
            "Fin_toma": "11/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Patience",
            "Apellidos": "Harmon",
            "Inicio_toma": "28/04/20",
            "Fin_toma": "07/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Desirae",
            "Apellidos": "Boyle",
            "Inicio_toma": "30/04/20",
            "Fin_toma": "01/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Zenia",
            "Apellidos": "Rojas",
            "Inicio_toma": "20/04/20",
            "Fin_toma": "07/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Inez",
            "Apellidos": "Mays",
            "Inicio_toma": "02/04/20",
            "Fin_toma": "07/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Tyrone",
            "Apellidos": "Robles",
            "Inicio_toma": "23/04/20",
            "Fin_toma": "04/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Michael",
            "Apellidos": "Guy",
            "Inicio_toma": "11/04/20",
            "Fin_toma": "02/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Keely",
            "Apellidos": "Arnold",
            "Inicio_toma": "27/04/20",
            "Fin_toma": "08/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Duncan",
            "Apellidos": "Joseph",
            "Inicio_toma": "27/04/20",
            "Fin_toma": "08/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Caleb",
            "Apellidos": "Henry",
            "Inicio_toma": "04/04/20",
            "Fin_toma": "01/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Nichole",
            "Apellidos": "Gould",
            "Inicio_toma": "13/04/20",
            "Fin_toma": "10/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Vielka",
            "Apellidos": "Pratt",
            "Inicio_toma": "28/04/20",
            "Fin_toma": "08/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Haviva",
            "Apellidos": "Strong",
            "Inicio_toma": "12/04/20",
            "Fin_toma": "05/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Jena",
            "Apellidos": "Cook",
            "Inicio_toma": "05/04/20",
            "Fin_toma": "04/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Minerva",
            "Apellidos": "Holmes",
            "Inicio_toma": "25/04/20",
            "Fin_toma": "02/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Conan",
            "Apellidos": "Barrera",
            "Inicio_toma": "09/04/20",
            "Fin_toma": "13/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Kelly",
            "Apellidos": "Kerr",
            "Inicio_toma": "22/04/20",
            "Fin_toma": "13/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Cameron",
            "Apellidos": "Allen",
            "Inicio_toma": "12/04/20",
            "Fin_toma": "03/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Tyler",
            "Apellidos": "Soto",
            "Inicio_toma": "13/04/20",
            "Fin_toma": "04/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Timon",
            "Apellidos": "Hodges",
            "Inicio_toma": "03/04/20",
            "Fin_toma": "13/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Yvonne",
            "Apellidos": "Camacho",
            "Inicio_toma": "30/04/20",
            "Fin_toma": "13/05/20",
			"selected":false
        },
        {
            "Changed": 1,
            "Nombre": "Wallace",
            "Apellidos": "Hayes",
            "Inicio_toma": "24/04/20",
            "Fin_toma": "04/05/20",
			"selected":false
        },
        {
            "Changed": 0,
            "Nombre": "Clark",
            "Apellidos": "Becker",
            "Inicio_toma": "25/04/20",
            "Fin_toma": "04/05/20",
			"selected":false
        }
    ]

    constructor() { }

    getPacientes():Paciente[]{
        return this.pacientes;
    }

    removeOne(p:Paciente):Boolean{
        var idx = this.pacientes.indexOf(p)
        if (idx != -1) {
            this.pacientes.splice(idx, 1);
            return true;
        }
        return false;
    }

    getPacienteSelected(){
        for(var i = 0; i<this.pacientes.length; i++){
            if (this.pacientes[i].selected == true){
                return this.pacientes[i];
            }
        }

        return null;
    }
}


export interface Paciente{
    Changed:Number;
    Nombre:String;
    Apellidos:String;
    Inicio_toma:String;
    Fin_toma:String;
    selected:boolean}