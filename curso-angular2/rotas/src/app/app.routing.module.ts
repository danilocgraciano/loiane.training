import { NgModule } from "@angular/core";
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "app/home/home.component";
import { LoginComponent } from "app/login/login.component";
import { AuthGuard } from "app/guards/auth.guard";

const APP_ROUTES: Routes = [
    { path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule', canActivate: [AuthGuard] },
    { path: 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule', canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}