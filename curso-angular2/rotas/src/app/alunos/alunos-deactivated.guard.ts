import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AlunoFormComponent } from "./../alunos/aluno-form/aluno-form.component";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AlunosDeactivatedGuard implements CanDeactivate<AlunoFormComponent>{

  canDeactivate(component: AlunoFormComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return component.podeMudarRota();
  }


}
