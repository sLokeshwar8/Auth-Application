import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoginObj = {}
  constructor(private auth : AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    //console.log(this.userLoginObj)
    this.auth.loginUser(this.userLoginObj)
    .subscribe(
      res => {
        localStorage.setItem('token',res.token)
        this.router.navigate(['/special-events'])
        return 'sucess'
      },
      err => {
        console.log(err)
      }
    )
  }

}
