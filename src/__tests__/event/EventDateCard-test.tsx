import {render, screen} from "@testing-library/react-native";
import EventDateCard from "../../components/event/EventDateCard";
import moment from "moment";

describe("EventDateCard tests", () => {
    test("Should be rendered", () => {
        const eventDateCard = render(<EventDateCard date={moment("2020-01-01")} />);
        expect(screen.getByText("Jan 1st")).toBeDefined();
    })
})