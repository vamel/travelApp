import { Weekday } from "../enums/Weekday";

export interface OpeningHours {
    weekday: Weekday;
    openingTime: string;
    closingTime: string;
}
