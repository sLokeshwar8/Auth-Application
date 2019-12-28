import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { Injector } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector : Injector,private authService : AuthService) { }

  intercept(req,next){
    //let authService = this.injector.get(AuthService);
    let tokenizedReq = req.clone({
      setHeaders : {
          Authorization : `Bearer ${this.authService.getToken()}`
      }
    });
    return next.handle(tokenizedReq)

  }

}
