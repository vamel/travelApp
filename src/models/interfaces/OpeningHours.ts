import { Weekday } from "../enums/weekday";

export interface OpeningHours {
    weekday: Weekday;
    openingTime: string;
    closingTime: string;
}