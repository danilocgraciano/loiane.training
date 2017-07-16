
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AlunosComponent } from "./alunos.component";
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRotuingModule } from "./alunos.routing.module";

@NgModule({
    imports: [AlunosRotuingModule],
    exports: [],
    declarations: [AlunosComponent, AlunoFormComponent, AlunoDetalheComponent],
    providers: []
})
export class AlunosModule { }