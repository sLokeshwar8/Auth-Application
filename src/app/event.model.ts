export class EventModel{
    public activityName : string;
    public amount : string;
    public dateEvent : string;
    public description : string;
    public location : string;
    public imageUrl : string;

    constructor(activityName:string, amount:string, formatted:string, description:string, location:string, imageUrl:string){
            this.activityName = activityName;
            this.amount = amount;
            this.dateEvent = formatted;
            this.description = description;
            this.location = location;
            this.imageUrl = imageUrl;
    }


}