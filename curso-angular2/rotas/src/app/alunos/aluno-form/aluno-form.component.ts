import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { AlunosService } from "app/alunos/alunos.service";
import { IFormDeactivate } from "../../guards/iform-deactivate";

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IFormDeactivate {

  id: number;
  inscricao: Subscription;
  aluno: any;
  formMudou: boolean;

  constructor(private route: ActivatedRoute, private alunosService: AlunosService) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.aluno = this.alunosService.getAluno(this.id);

      if (this.aluno == null) {
        this.aluno = {};
      }
    }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
  }

  canDeactivate() {
    if (this.formMudou) {
      return confirm('Tem certeza que deseja sair?');
    }
    return true;

  }

}

