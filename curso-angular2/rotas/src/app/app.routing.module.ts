import { NgModule } from "@angular/core";
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "app/home/home.component";
import { LoginComponent } from "app/login/login.component";
import { CursosComponent } from "app/cursos/cursos.component";
import { CursoDetalheComponent } from "app/cursos/curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "app/cursos/curso-nao-encontrado/curso-nao-encontrado.component";

const APP_ROUTES: Routes = [
    { path: 'cursos', component: CursosComponent },
    { path: 'cursos/:id', component: CursoDetalheComponent },
    { path: 'login', component: LoginComponent },
    { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    { path: '', component: HomeComponent }
];

@NgModule({
    imports:[RouterModule.forRoot(APP_ROUTES)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}