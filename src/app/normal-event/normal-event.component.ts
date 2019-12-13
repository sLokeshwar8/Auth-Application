import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-normal-event',
  templateUrl: './normal-event.component.html',
  styleUrls: ['./normal-event.component.css']
})
export class NormalEventComponent implements OnInit {

  events = [];
  constructor(private event : EventService) { }

  ngOnInit() {

    this.event.getEvents()
    .subscribe(
      res => {
        this.events = res
        console.log(this.events)
      }
    )

  }

}
