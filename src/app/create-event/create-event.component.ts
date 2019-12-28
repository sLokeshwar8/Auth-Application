import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service'
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { AlertService } from 'ngx-alerts';
import { Event } from '../share/Event.model';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  createEventObj:Event;
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
    
  constructor(
              private eventService : EventService,
              private alertService: AlertService) {

   }

  ngOnInit() {
  }

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
  };


  onSubmit(value:any,ngForm){
      
      this.createEventObj = value
      this.eventService.createNewEvent(this.createEventObj)
      .subscribe(res => {
      this.showAlerts()
      ngForm.reset();
     },
     err => {
       this.showError(err)
         console.log(err)
     })
  }

  showAlerts(): void{
        // For normal messages
        this.alertService.success('Event Created Successfully !!');
    } 
  showError(error): void{
        // For normal messages
        this.alertService.info('Error !!'+ error);
    }

}
