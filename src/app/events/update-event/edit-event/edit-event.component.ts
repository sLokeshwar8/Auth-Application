import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { AlertService } from 'ngx-alerts';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { Event } from '../../../share/Event.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EventModel } from '../../../event.model';
import { Location } from "@angular/common";
import { DeleteEventModalComponent } from 'src/app/share/delete-event-modal/delete-event-modal.component';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  updateEventObj :Event;
  @Input('createEventObj') createEventObj
  @Input() isSelectedInfo : Boolean;
  navigationSubscription
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
    private eventService : EventService, 
    private router : Router,
    private matDialog : MatDialog,
    private route:ActivatedRoute) {
  }

  ngOnInit() {
  }

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
  };
  

  showAlerts(): void{
       // For normal messages
       this.alertService.success('Event Updated Successfully !!');
  } 
  showError(error): void{
      // For normal messages
      this.alertService.danger('Error !!'+ error);
  }

  onSubmit(value: any,eventId){
    console.log(value)
    console.log(value.dateEvent.formatted)
    this.updateEventObj = {
      "activityName": value.activityName, 
      "amount":value.amount, 
      "dateEvent":value.dateEvent.formatted, 
      "description":value.description, 
      "location": value.location, 
      "imageUrl": value.imageUrl 
    }
    this.eventService.updateExistingEvent(this.updateEventObj,eventId)
    .subscribe(res => {
      this.showAlerts();
      setTimeout(()=>{
        window.location.reload();
      },3000)
      
      console.log(res)
    },err => {
      this.showError(err)
        console.log(err)
    })
  }

  onDeleteEvent(id){
    let dialogRef = this.matDialog.open(DeleteEventModalComponent);
    dialogRef.afterClosed().subscribe( result => {
      if(result != 'false'){
      this.eventService.deleteExistingEvent(id)
      .subscribe(res => {
        console.log(res)
        location.reload();
        })
      }     
    })
  }

}
