import {render} from "@testing-library/react-native";
import OpeningHoursInfo from "../../components/attraction/OpeningHoursInfo";
import {OpeningHours} from "../../models/classes/OpeningHours";

describe("TicketPricesInfo", () => {
    const openingHours: OpeningHours = new OpeningHours("closed", "10:00 - 18:00", "10:00 - 18:00", "10:00 - 18:00",
        "10:00 - 18:00", "10:00 - 20:00", "10:00 - 16:00")

    test("renders correctly", () => {
        const { getByText } = render(<OpeningHoursInfo openingHours={openingHours}/>);

        getByText("Opening Hours: ");
    });

    test("shows monday opening hours", () => {
        const { getByText } = render(<OpeningHoursInfo openingHours={openingHours}/>);

        getByText("Monday: Closed");
    });

    test("shows tuesday opening hours", () => {
        const { getByText } = render(<OpeningHoursInfo openingHours={openingHours}/>);

        getByText("Tuesday: 10:00 - 18:00");
    });

    test("shows wednesday opening hours", () => {
        const { getByText } = render(<OpeningHoursInfo openingHours={openingHours}/>);

        getByText("Wednesday: 10:00 - 18:00");
    });


    test("shows thursday opening hours", () => {
        const { getByText } = render(<OpeningHoursInfo openingHours={openingHours}/>);

        getByText("Thursday: 10:00 - 18:00");
    });

    test("shows friday opening hours", () => {
        const { getByText } = render(<OpeningHoursInfo openingHours={openingHours}/>);

        getByText("Friday: 10:00 - 18:00");
    });

    test("shows saturday opening hours", () => {
        const { getByText } = render(<OpeningHoursInfo openingHours={openingHours}/>);

        getByText("Saturday: 10:00 - 20:00");
    });

    test("shows Sunday opening hours", () => {
        const { getByText } = render(<OpeningHoursInfo openingHours={openingHours}/>);

        getByText("Sunday: 10:00 - 16:00");
    });


})