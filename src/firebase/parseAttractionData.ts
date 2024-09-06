import {Attraction} from "../models/classes/Attraction";
import {OpeningHours} from "../models/classes/OpeningHours";
import {TicketPrices} from "../models/classes/TicketPrices";
import {Coords} from "../models/classes/Coords";

export const parseAttractionData = (attractionData) => {
    try {
        return new Attraction(
            attractionData.name, attractionData.city, attractionData.images_url, attractionData.description,
            attractionData.is_accessible_for_disabled, attractionData.coords, attractionData.ticket_prices,
            attractionData.opening_hours
        );
    } catch(err) {
        return null as Attraction;
    }
}

export const parseOpeningHours = (openingHoursData) => {
    try {
        return new OpeningHours(
            openingHoursData.monday, openingHoursData.tuesday, openingHoursData.wednesday,
            openingHoursData.thursday, openingHoursData.friday, openingHoursData.saturday,
            openingHoursData.sunday);
    } catch(err) {
        return null as OpeningHours;
    }
}

export const parseTicketPrices = (ticketPricesData) => {
    try {
        return new TicketPrices(
            ticketPricesData.regular, ticketPricesData.reduced, ticketPricesData.student,
            ticketPricesData.group, ticketPricesData.currency);
    } catch(err) {
        return null as TicketPrices;
    }
}

export const parseCoords = (coordinates) => {
    try {
        return new Coords(coordinates.lat, coordinates.lon);
    } catch(err) {
        return null as Coords;
    }
}
