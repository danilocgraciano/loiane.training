
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlunosComponent } from "./alunos.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunosGuard } from "./alunos.guard";

const ALUNOS_ROUTES: Routes = [
    {
        path: '', component: AlunosComponent, canActivateChild: [AlunosGuard],
        children: [
            { path: 'novo', component: AlunoFormComponent },
            { path: ':id', component: AlunoDetalheComponent },
            { path: ':id/editar', component: AlunoFormComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(ALUNOS_ROUTES)],
    exports: [RouterModule]
})
export class AlunosRotuingModule { }