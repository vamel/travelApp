import {render, screen} from "@testing-library/react-native";
import EventCard from "../../components/event/EventCard";
import {Event} from "../../models/classes/Event";
import {Coords} from "../../models/classes/Coords";
import moment from "moment";

describe("EventCard tests", () => {
    const eventData: Event = {
        city: "Warsaw",
        coords: new Coords("50", "24"),
        date: moment("2020-01-01"),
        description: "test event",
        name: "Event",
        organiser: "Jest"
    }

   test("Should be rendered", () => {
       const eventCard = render(
           <EventCard eventData={eventData} onPress={() => {}}/>);
       expect(screen.getByText("Event")).toBeDefined();
   });
});