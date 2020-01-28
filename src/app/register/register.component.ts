import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertService } from 'ngx-alerts';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userRegisterObj={}
  constructor(private auth : AuthService,
              private alertService : AlertService) { }

  ngOnInit() {
  }

  onSubmit(){
   this.auth.registerUser(this.userRegisterObj)
   .subscribe(
     res => {
      localStorage.setItem('token',res.token)
      localStorage.setItem('username',res.username)
      //this._router.navigate(['/special-events'])
      console.log(res)
     },
     err => {
      console.log(err.error.text)
      this.showAlert(err.error.text)
     }
   )
  }

  showAlert(err){
    this.alertService.info(err)
  }

}
