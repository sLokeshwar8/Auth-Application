import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { AlertService } from 'ngx-alerts';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { Event } from '../../share/Event.model';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  updateEventObj :Event;
  @Input('createEventObj') createEventObj
  @Input() isSelectedInfo : Boolean;
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
    private alertService: AlertService,
    private eventService : EventService ) {
  }

  ngOnInit() {
  }

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
  };

  showAlerts(): void{
       // For normal messages
       this.alertService.info('Event Created Successfully !!');
  } 
  showError(error): void{
      // For normal messages
      this.alertService.info('Error !!'+ error);
  }

  onSubmit(value: any){
    console.log(value)
    this.updateEventObj = value
    this.eventService.updateExistingEvent(this.updateEventObj)
    .subscribe(res => {
        console.log(res)
    },err => {
        console.log(err)
    })
  }

}
