import { Component } from '@angular/core';
import { AuthService } from './auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AuthProject';
  navShow = false;
  dropD1 = false;
  constructor(private _authService : AuthService){}

  navShowToggle(){
      this.navShow = !this.navShow;
  }
  dropdownShowToggle(){
    this.dropD1 = !this.dropD1;
}

}
