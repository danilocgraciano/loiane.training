import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private alunos: any[] = [
    { id: 1, nome: 'Aluno 01', email: 'aluno01@email.com' },
    { id: 2, nome: 'Aluno 02', email: 'aluno02@email.com' },
    { id: 3, nome: 'Aluno 03', email: 'aluno03@email.com' },
  ];

  constructor() { }

  getAlunos(): any[] {
    return this.alunos;
  }

  getAluno(id: number) {
    return this.getAlunos().filter((aluno) => aluno.id == id)[0];
  }

}
