import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-event',
  templateUrl: './special-event.component.html',
  styleUrls: ['./special-event.component.css']
})
export class SpecialEventComponent implements OnInit { 
  specialEvent = []
  
  constructor(private event : EventService,
              private _router : Router) { }

  ngOnInit() {
    this.event.getSpecialEvent()
    .subscribe(
      res => {
        this.specialEvent = res
       
      },
      err => {
          if(err instanceof HttpErrorResponse){
            if(err.status === 401){
              this._router.navigate(['/login'])
            }
          }
      }
    )

  }

}
