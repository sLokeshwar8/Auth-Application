import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoginObj = {}
  constructor(private auth : AuthService,
              private router: Router,
              private alertService: AlertService) { }

  ngOnInit() {
  }

  
  showError(): void{
    this.alertService.success('Error !!');
  }
  onSubmit(){
    //console.log(this.userLoginObj)
    this.auth.loginUser(this.userLoginObj)
    .subscribe(
      res => {
        localStorage.setItem('token',res.token)
        localStorage.setItem('username',res.username.username)
        this.router.navigate(['/events'])
        return 'sucess'
      },
        err => {
          console.log(err.error)
          this.showError();
        }
      )
    }

}
