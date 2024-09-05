import {Coords} from "./Coords";
import {TicketPrices} from "./TicketPrices";
import {OpeningHours} from "./OpeningHours";

export class Attraction {
    constructor(name: string, city: string, images_url: string[], description: string, isAccessible: boolean) {
        this.name = name;
        this.city = city;
        this.images_url = images_url;
        this.description = description;
        this.isAccessibleForDisabled = isAccessible;
    }
    
    name: string;
    city: string;
    images_url: string[];
    description: string;
    isAccessibleForDisabled: boolean;
    coords: Coords;
    ticket_prices: TicketPrices;
    opening_hours: OpeningHours;
}
