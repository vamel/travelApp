import {render} from "@testing-library/react-native";
import OpeningHoursInfo from "../../components/attraction/OpeningHoursInfo";
import {OpeningHours} from "../../models/classes/OpeningHours";

describe("TicketPricesInfo tests", () => {
    const openingHours: OpeningHours = new OpeningHours("closed", "10:00 - 18:00", "10:00 - 18:00", "10:00 - 18:00",
        "10:00 - 18:00", "10:00 - 20:00", "10:00 - 16:00");

    test("Should be rendered", () => {
        const { getByText } = render(<OpeningHoursInfo openingHours={openingHours}/>);
        getByText("Opening Hours: ");
    });

    test("Should show monday opening hours", () => {
        const { getByText } = render(<OpeningHoursInfo openingHours={openingHours}/>);
        getByText("Monday: Closed");
    });

    test("Should show tuesday opening hours", () => {
        const { getByText } = render(<OpeningHoursInfo openingHours={openingHours}/>);
        getByText("Tuesday: 10:00 - 18:00");
    });

    test("Should show wednesday opening hours", () => {
        const { getByText } = render(<OpeningHoursInfo openingHours={openingHours}/>);
        getByText("Wednesday: 10:00 - 18:00");
    });


    test("Should show thursday opening hours", () => {
        const { getByText } = render(<OpeningHoursInfo openingHours={openingHours}/>);
        getByText("Thursday: 10:00 - 18:00");
    });

    test("Should show friday opening hours", () => {
        const { getByText } = render(<OpeningHoursInfo openingHours={openingHours}/>);
        getByText("Friday: 10:00 - 18:00");
    });

    test("Should show saturday opening hours", () => {
        const { getByText } = render(<OpeningHoursInfo openingHours={openingHours}/>);
        getByText("Saturday: 10:00 - 20:00");
    });

    test("Should show Sunday opening hours", () => {
        const { getByText } = render(<OpeningHoursInfo openingHours={openingHours}/>);
        getByText("Sunday: 10:00 - 16:00");
    });
})