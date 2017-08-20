
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AlunosComponent } from "./alunos.component";
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRotuingModule } from "./alunos.routing.module";
import { AlunosService } from "./alunos.service";
import { AlunosGuard } from "./alunos.guard";
import { AlunosDeactivatedGuard } from "./alunos-deactivated.guard";

@NgModule({
    imports: [CommonModule,FormsModule,AlunosRotuingModule],
    exports: [],
    declarations: [AlunosComponent, AlunoFormComponent, AlunoDetalheComponent],
    providers: [AlunosService, AlunosGuard, AlunosDeactivatedGuard]
})
export class AlunosModule { }