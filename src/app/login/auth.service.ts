import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private _router: Router) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'teste@teste.com' && usuario.senha === 'marofa20') {
        this.usuarioAutenticado = true;
        this.mostrarMenuEmitter.emit(true);
        this._router.navigate(['/']);
    } else {
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

}
