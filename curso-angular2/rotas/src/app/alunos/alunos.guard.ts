import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";

@Injectable()
export class AlunosGuard implements CanActivateChild {

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log('AlunosGuard.canActivateChild()');

    // if (state.url.includes('editar')){
    //   alert('Usuário sem permissão!')
    //   return false;
    // }
    return true;
  }

  constructor() { }

}
