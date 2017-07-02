import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos() {
    return [
      { id: 1, nome: 'Angular 2' },
      { id: 2, nome: 'Java' }
    ]
  }

  getCurso(id: number) {
    return this.getCursos().filter((curso) => curso.id == id)[0];
  }

}
