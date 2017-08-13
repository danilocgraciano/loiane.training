import { NgModule } from "@angular/core";
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "app/home/home.component";
import { LoginComponent } from "app/login/login.component";

const APP_ROUTES: Routes = [
    { path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule' },
    { path: 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule' },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}