import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos(): string[] {
    return ['Angular 2.x e 4.x', 'Fundamentos Ext JS 4', 'Estrutura de Dados e Algoritmos com Java', 'Java II (Intermediário)'];
  }

}
