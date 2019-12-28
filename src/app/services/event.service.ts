import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  _eventAPI = 'http://localhost:3003/api/events';
  _specialEventAPI = 'http://localhost:3003/api/special';
  _createNewEvent = 'http://localhost:3003/api/saveNewEvent';
  _updateEvent = 'http://localhost:3003/api/updateEvent'

  constructor(private http : HttpClient) { }

  getEvents(){
    return this.http.get<any>(this._eventAPI)
  }

  getSpecialEvent(){
    return this.http.get<any>(this._specialEventAPI)
  }

  createNewEvent(eventObj){
    console.log(eventObj)
    return this.http.post<any>(this._createNewEvent,eventObj)
  }

  updateExistingEvent(eventObj){
    return this.http.put<any>(this._updateEvent+"/"+eventObj._id,eventObj);
  }

}
