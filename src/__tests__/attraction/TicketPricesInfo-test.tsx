import {render} from "@testing-library/react-native";
import TicketPricesInfo from "../../components/attraction/TicketPricesInfo";
import {TicketPrices} from "../../models/classes/TicketPrices";

describe("TicketPricesInfo", () => {
    const ticketPrices: TicketPrices = new TicketPrices("20.00", "15.00", "10.00", "12.00", "zł")

    test("renders correctly", () => {
        const { getByText } = render(<TicketPricesInfo ticketPrices={ticketPrices} />);

        getByText("Ticket prices:");
    });

    test("shows regular ticket prices", () => {
        const { getByText } = render(<TicketPricesInfo ticketPrices={ticketPrices} />);

        getByText("Regular ticket: 20.00 zł");
    });

    test("shows reduced ticket prices", () => {
        const { getByText } = render(<TicketPricesInfo ticketPrices={ticketPrices} />);

        getByText("Reduced ticket: 15.00 zł");
    });

    test("shows student ticket prices", () => {
        const { getByText } = render(<TicketPricesInfo ticketPrices={ticketPrices} />);

        getByText("Student ticket: 10.00 zł");
    });

    test("shows group ticket prices", () => {
        const { getByText } = render(<TicketPricesInfo ticketPrices={ticketPrices} />);

        getByText("Group ticket: 12.00 zł");
    });
})