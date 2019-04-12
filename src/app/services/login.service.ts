import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    private users:User[] = [
        {
          Nombre: "Miguel",
          Apellidos: "De Arriba Moreno",
          img: "../../../assets/Miguel.jpg",
          usuario: "migueldam",
          pwd: "123456",
          rol: "Farmaceutico",
          sesion: false
        },
        {
          Nombre: "Ainara",
          Apellidos: "Del Barco Ventura",
          img: "../../../assets/Ainara.jpg",
          usuario: "adelbarc",
          pwd: "123456",
          rol: "Médico",
          sesion: false
        }
    ]
    
    constructor() { 
        console.log("Servicio de login")
    }

    getUsers():User[]{
        return this.users;
    }

    getLoginUser():User{

        let logued_user = null;

        for(let i = 0; i<this.users.length; i++){
            if(this.users[i].sesion == true){
                logued_user = this.users[i];
            }
        }
        
        return logued_user;
    }

}

export interface User{
    Nombre:String;
    Apellidos:String;
    img:String;
    usuario:String;
    pwd:String;
    rol:String;
    sesion:boolean;
}
