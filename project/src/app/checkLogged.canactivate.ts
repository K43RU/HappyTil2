import { getLocaleDayPeriods } from "@angular/common";
import { Injectable, Input } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
class CheckLogged implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
        console.log('DENTRO')

        let user = localStorage.getItem('nome');
        let senha = localStorage.getItem('senha');

        if (user == undefined && senha == undefined) {
            this.router.navigate(['/']);
            return false;
        } else{   
            return true;
        }
    }
}

export default CheckLogged;