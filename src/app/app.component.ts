import { Component, HostListener, ElementRef, OnInit} from '@angular/core';
import { AuthService } from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AuthProject';
  navShow = false;
  dropD1 = false;
  constructor(private _authService : AuthService, private _el : ElementRef){}

  navShowToggle(){
      this.navShow = !this.navShow;
  }
  dropdownShowToggle(){
    this.dropD1 = !this.dropD1;
  }

  @HostListener( 'document:click',  ['$event']) clickout(event){
    this._el.nativeElement.contains(event.target) ? !this.navShow : false;
  }

  ngOnInit(){
  }
  
}
