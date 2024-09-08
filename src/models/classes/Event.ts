import {Coords} from "./Coords";

export class Event {
    constructor(city: string, name: string, date: Date, description: string, organiser: string, coords: Coords) {
        this.city = city;
        this.name = name;
        this.date = date;
        this.description = description;
        this.organiser = organiser;
        this.coords = coords;
    }

    city: string;
    name: string;
    date: Date;
    description: string;
    organiser: string;
    coords: Coords;
}
