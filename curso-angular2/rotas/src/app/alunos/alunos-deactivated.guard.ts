import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { IFormDeactivate } from "../guards/iform-deactivate";

@Injectable()
export class AlunosDeactivatedGuard implements CanDeactivate<IFormDeactivate>{

  canDeactivate(component: IFormDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return component.canDeactivate();
  }


}
