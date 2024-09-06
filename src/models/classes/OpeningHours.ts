import {toTitle} from "../../utils/stringUtils";

export class OpeningHours {
    constructor(monday: string, tuesday: string, wednesday: string,
                thursday: string, friday: string, saturday: string, sunday: string) {
        this.monday = toTitle(monday);
        this.tuesday = toTitle(tuesday);
        this.wednesday = toTitle(wednesday);
        this.thursday = toTitle(thursday);
        this.friday = toTitle(friday);
        this.saturday = toTitle(saturday);
        this.sunday = toTitle(sunday);
    }
    
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
}
