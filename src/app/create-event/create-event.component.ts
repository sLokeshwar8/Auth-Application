import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DatePicker } from 'angular2-datetimepicker';
import { EventService } from '../event.service'

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  createEventObj = {};

  stateObjArr = [
        {
            "id": "1",
            "name": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "id": "8",
            "name": "Goa",
            "state": "Goa"
        },
        {
            "id": "2",
            "name": "Delhi",
            "state": "Delhi"
        },
        {
            "id": "3",
            "name": "Bengaluru",
            "state": "Karnataka"
        },
        {
            "id": "5",
            "name": "Hyderabad",
            "state": "Telangana"
        },
        {
            "id": "6",
            "name": "Chennai",
            "state": "Tamil Nadu"
        },
        {
            "id": "8",
            "name": "Pune",
            "state": "Maharashtra"
        }
    ]
    
  constructor(private http : HttpClient,private eventService : EventService) {

   }

  ngOnInit() {

  }

  onSubmit(){
      console.log(this.createEventObj)
     this.eventService.createNewEvent(this.createEventObj)
     .subscribe( (res) => {
        console.log(res)
     })
  }

}
