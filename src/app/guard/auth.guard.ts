import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private _router : Router,private authService : AuthService ){}

    canActivate(route: ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean{

      if(this.authService.loggedIn()){
        return true
      }else{
          this._router.navigate(["/login"])
          return false
      }

    }

}

//ActivatedRouteSnapshot, RouterStateSnapshot mostly used 