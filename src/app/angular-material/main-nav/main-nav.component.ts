import { Component, OnInit, ElementRef, DoCheck, SimpleChanges } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit, DoCheck{
  username : string
  role : string
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
     
    );
  constructor(private breakpointObserver: BreakpointObserver,
    private _authService : AuthService,
    private _el : ElementRef) {
      
    }

  ngOnInit(){
    if(this.username == null){
      this.username = "Signup/login";
      this.role = "Visitor"
    }else{
      this.username = window.localStorage.getItem('username');
      this.role = "Pro user"
    }
  }    
  
  ngDoCheck(){
    
      if(this.username == null){
        this.username = "Signup/login";
        this.role = "Visitor"
      }else{
        this.username = window.localStorage.getItem('username');
        this.role = "Pro user"
      }
    
  }
}
