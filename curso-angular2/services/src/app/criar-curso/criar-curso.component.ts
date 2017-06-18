import { Component, OnInit } from '@angular/core';

import { CursosService } from "app/cursos/cursos.service";

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
  ,providers: [CursosService]//escopo de instancia
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];

  constructor(private service: CursosService) { }

  ngOnInit() {
    this.cursos = this.service.getCursos();
  }

  onAddCurso(curso: string) {
    this.service.addCurso(curso);
  }

}
