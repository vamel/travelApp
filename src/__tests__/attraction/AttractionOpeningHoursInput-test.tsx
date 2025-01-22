import {render, screen} from "@testing-library/react-native";
import AttractionOpeningHoursInput from "../../components/attraction/AttractionOpeningHoursInput";

describe("AttractionOpeningHoursInput tests", () => {
    test("Monday should be seen", () => {
        const input = render(<AttractionOpeningHoursInput />);

        expect(screen.getByText("Monday")).toBeDefined();
    });

    test("Tuesday should be seen", () => {
        const input = render(<AttractionOpeningHoursInput />);

        expect(screen.getByText("Tuesday")).toBeDefined();
    });

    test("Wednesday should be seen", () => {
        const input = render(<AttractionOpeningHoursInput />);

        expect(screen.getByText("Wednesday")).toBeDefined();
    });

    test("Thursday should be seen", () => {
        const input = render(<AttractionOpeningHoursInput />);

        expect(screen.getByText("Thursday")).toBeDefined();
    });

    test("Friday should be seen", () => {
        const input = render(<AttractionOpeningHoursInput />);

        expect(screen.getByText("Friday")).toBeDefined();
    });

    test("Saturday should be seen", () => {
        const input = render(<AttractionOpeningHoursInput />);

        expect(screen.getByText("Saturday")).toBeDefined();
    });

    test("Sunday should be seen", () => {
        const input = render(<AttractionOpeningHoursInput />);

        expect(screen.getByText("Sunday")).toBeDefined();
    });
});