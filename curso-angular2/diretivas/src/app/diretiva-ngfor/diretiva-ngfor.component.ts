import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.scss']
})
export class DiretivaNgforComponent implements OnInit {

  cursos: string[] = ["Angular 2.x e 4.x", "Fundamentos Ext JS 4", "Estrutura de Dados e Algoritmos com Java", "Java II (Intermediário)"];

  constructor() { }

  ngOnInit() {
  }

}
