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
        let pass = localStorage.getItem('senha');

        if (user == "marcos" && pass == "") {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }
}

export default CheckLogged;