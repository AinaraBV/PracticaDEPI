import { Component, OnInit } from '@angular/core';
import { LoginService, User } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  User:User;

  constructor(private _LoginService:LoginService,  private route:Router) { }

  ngOnInit() {
    this.User = this._LoginService.getLoginUser();
    console.log(this.User)
  }

  closeSession(){
    this.User.sesion = false;
    this.route.navigate(['login']);
  }

}
