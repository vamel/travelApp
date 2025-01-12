import {render, screen} from "@testing-library/react-native";
import AttractionTicketTypesInput from "../../components/attraction/AttractionTicketTypesInput";
import {TicketPrices} from "../../models/classes/TicketPrices";

describe("AttractionTicketTypesInput tests", () => {
    const prices: TicketPrices = {
        currency: "",
        regular: "",
        reduced: "",
        student: "",
        group: ""
    };

    const onEventMock = jest.fn((field, value) => {prices[field] = value});

    test("Should be rendered", () => {
       const inputs = render(<AttractionTicketTypesInput onPriceChange={onEventMock} />);

       expect(screen.getByText("Student ticket")).toBeDefined();
    });

    test("Should change regular ticket price", () => {
        const inputs = render(<AttractionTicketTypesInput onPriceChange={onEventMock} />);
        onEventMock("regular", "10.00");

        expect(prices["regular"]).toBe("10.00");
    });

    test("Should change reduced ticket price", () => {
        const inputs = render(<AttractionTicketTypesInput onPriceChange={onEventMock} />);
        onEventMock("reduced", "10.00");

        expect(prices["reduced"]).toBe("10.00");
    });

    test("Should change student ticket price", () => {
        const inputs = render(<AttractionTicketTypesInput onPriceChange={onEventMock} />);
        onEventMock("student", "10.00");

        expect(prices["student"]).toBe("10.00");
    });

    test("Should change group ticket price", () => {
        const inputs = render(<AttractionTicketTypesInput onPriceChange={onEventMock} />);
        onEventMock("group", "10.00");

        expect(prices["group"]).toBe("10.00");
    });
});