import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  fazerLogin() {
    console.log(this.usuario);
    this._authService.fazerLogin(this.usuario);
  }

}
