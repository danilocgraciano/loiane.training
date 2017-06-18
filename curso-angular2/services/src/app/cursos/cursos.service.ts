import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();

    private cursos: string[] = ['Angular 2', 'Java', 'PhoneGap'];

    constructor() {
        console.log('CursosService.constructor()');
    }

    getCursos(): string[] {
        return this.cursos;
    }

    addCurso(curso: string): void {
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}