import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from "./usuario";
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  doLogin(usuario: Usuario) {

    if (usuario.nome === 'danilocgraciano@gmail.com' && usuario.senha === '123') {
      this.mostrarMenuEmitter.emit(true);
      this.usuarioAutenticado = true;
      this.router.navigate(['/']);
    }else{
      this.mostrarMenuEmitter.emit(false);
      this.usuarioAutenticado = false;
    }

  }

}
