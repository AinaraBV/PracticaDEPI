import { Component, OnInit } from '@angular/core';
import { LoginService, User } from '../../services/login.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  users:User[] = [];

  user:string = '';
  pwd:string = '';


  constructor(private _loginService:LoginService, private route:Router) { }

  ngOnInit() {
    this.users = this._loginService.getUsers();
  }

  login(){

    let login_success = false;
    //Miramos si coincide y lo ponemos logueado a true
    this.users.forEach(user => {
      if(user.usuario == this.user && user.pwd == this.pwd){
        user.sesion = true;
        login_success = true;
      }
    });

    if (login_success){
      this.route.navigate(['paciente']);
    }

  }

}
