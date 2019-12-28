import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from  '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _registerAPI = "http://localhost:3003/api/register"
  _loginAPI = "http://localhost:3003/api/login"

  constructor(private http : HttpClient,
              private _router : Router) { }

  registerUser(user){
    return this.http.post<any>(this._registerAPI, user)
  }

  loginUser(user){
    return this.http.post<any>(this._loginAPI,user)
  }

  loggedIn(){
    // console.log(!!localStorage.getItem('token'))
    return !!localStorage.getItem('token');
  }

  loggedOut(){
    this._router.navigate(['/events']);
    return localStorage.removeItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
