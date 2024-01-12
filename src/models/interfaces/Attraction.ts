import { OpeningHours } from "./OpeningHours";
import { TicketType } from "./TicketType";

export interface Attraction {
    name: string;
    description: string;
    images_url: string[];
    // ticketTypes: TicketType[];
    // holiday: Date[];
    // openingTimes: OpeningHours[];
}