import { Injectable, EventEmitter } from "@angular/core";
import { LogService } from "app/shared/log.service";

@Injectable()
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();

    private cursos: string[] = ['Angular 2', 'Java', 'PhoneGap'];

    constructor(private logService: LogService) {
        console.log('CursosService.constructor()');
    }

    getCursos(): string[] {
        this.logService.consoleLog('CursosService.getCursos()');
        return this.cursos;
    }

    addCurso(curso: string): void {
        this.logService.consoleLog(`CursosService.addCurso(${curso})`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}