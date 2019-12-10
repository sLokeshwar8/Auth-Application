import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userRegisterObj={}
  constructor(private auth : AuthService,
              private _router : Router) { }

  ngOnInit() {
  }

  onSubmit(){
   this.auth.registerUser(this.userRegisterObj)
   .subscribe(
     res => {
      localStorage.setItem('token',res.token)
      this._router.navigate(['/special-events'])
      console.log(res)
     },
     err => {
      console.log(err)
     }
   )
  }

}
