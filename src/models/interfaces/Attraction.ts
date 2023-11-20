import { OpeningHours } from "./OpeningHours";
import { TicketType } from "./TicketType";

export interface Attraction {
    name: string;
    description: string;
    imagesUrl: string[];
    // ticketTypes: TicketType[];
    // holiday: Date[];
    // openingTimes: OpeningHours[];
}