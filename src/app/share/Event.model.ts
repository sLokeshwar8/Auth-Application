export class Event {
    public activityName : string;
    public amount : number;
    public dateEvent : string;
    public description : string;
    public imageUrl : string;
    public location : string;

    constructor(name: string, amount: number, dateEvent: string, desc: string, imageUrl: string, location: string){
        this.activityName = name;
        this.amount = amount;
        this.dateEvent = dateEvent;
        this.description = desc;
        this.imageUrl = imageUrl;
        this.location = location;
    }
}

