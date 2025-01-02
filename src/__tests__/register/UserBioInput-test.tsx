import {fireEvent, render, screen} from "@testing-library/react-native";
import UserBioInput from "../../components/register/UserBioInput";

describe("UserBioInput tests", () => {
    test("Should be rendered", () => {
       const input = render(<UserBioInput onChangeText={() => {}}/>);

       expect(screen.getByText("Be creative!")).toBeDefined();
       expect(screen.getByPlaceholderText("But keep it short, max 1000 characters allowed!")).toBeDefined();
    });

    test("Should change text", () => {
        let textShown = "";
        const onEventMock = jest.fn((value) => {textShown = value});

        const input = render(<UserBioInput onChangeText={onEventMock}/>);

        fireEvent(screen.getByPlaceholderText("But keep it short, max 1000 characters allowed!"), "onChangeText", "input");
        expect(textShown).toBe("input");
    });
});