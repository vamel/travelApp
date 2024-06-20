import { OpeningHours } from "./OpeningHours";
import { TicketType } from "./TicketType";

export class Attraction {
    name: string;
    description: string;
    images_url: string[];

    // constructor() {
    //     this.name = "";
    //     this.description = "";
    //     this.images_url = [];
    // }

    constructor(name, desc, images) {
        this.name = name;
        this.description = desc;
        this.images_url = images;
    }

    // ticketTypes: TicketType[];
    // holiday: Date[];
    // openingTimes: OpeningHours[];
}
