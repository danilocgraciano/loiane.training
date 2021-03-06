import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
  , providers: [CursosService]//escopo de instancia
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  // cursosService: CursosService;

  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    // Pode-se criar uma classe global da aplicação, para emitir mensagens
    //Tipo Crud Created (freshdesk timeline)
    CursosService.criouNovoCurso.subscribe(
      novoCurso => this.cursos.push(novoCurso)
    );
  }

}
