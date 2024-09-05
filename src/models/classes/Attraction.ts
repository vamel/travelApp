import {Coords} from "./Coords";
import {TicketPrices} from "./TicketPrices";
import {OpeningHours} from "./OpeningHours";

export class Attraction {
    constructor(name: string, city: string, images_url: string[], description: string, is_accessible_for_disabled: boolean,
                coords: Coords, ticket_prices: TicketPrices, opening_hours: OpeningHours) {
        this.name = name;
        this.city = city;
        this.images_url = images_url;
        this.description = description;
        this.is_accessible_for_disabled = is_accessible_for_disabled;
        this.coords = coords;
        this.ticket_prices =ticket_prices;
        this.opening_hours = opening_hours;
    }
    
    name: string;
    city: string;
    images_url: string[];
    description: string;
    is_accessible_for_disabled: boolean;
    coords: Coords;
    ticket_prices: TicketPrices;
    opening_hours: OpeningHours;
}
