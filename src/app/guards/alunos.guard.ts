import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AlunosGuard implements CanActivateChild {

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        /* console.log(childRoute);*/
        console.log('AlunosGuard: Guarda de rota filha');
        if (state.url.includes('editar')) {
            /* alert('Usuario sem acesso para editar');
            return false; */
        }
        return true;
    }

}
