import { Injectable } from "@angular/core";

@Injectable()
export class CursosService {

    private cursos: string[] = ['Angular 2', 'Java', 'PhoneGap'];

    constructor() {
        console.log('CursosService.constructor()');
    }

    getCursos(): string[] {
        return this.cursos;
    }

    addCurso(curso: string): void {
        this.cursos.push(curso);
    }
}