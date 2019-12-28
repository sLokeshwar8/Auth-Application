import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';


@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  events = [];
  isSelected = false;
  singleEvent = [];
  constructor(private eventService : EventService) { }
  
  ngOnInit() {
    this.eventService.getEvents()
    .subscribe(res => {
      this.events = res;
    },err => {
      console.log(err)
    }) 

  }
  onSelected(event){
    this.singleEvent = event;
    this.isSelected = true;
    console.log(this.singleEvent)
  }

}
