import {fireEvent, render, screen} from "@testing-library/react-native";
import InvitationMessageInput from "../../components/invitations/InvitationMessageInput";

describe("InvitationMessageInput tests", () => {
    test("Should be rendered", () => {
       const input = render(<InvitationMessageInput onChangeText={() => {}} />);

       expect(screen.getByPlaceholderText("Write something nice")).toBeDefined();
    });

    test("Should fire event on text change", () => {
        let text = "";
        const onEventMock = jest.fn((val) => {text = val});

        const input = render(<InvitationMessageInput onChangeText={onEventMock} />);

        fireEvent(screen.getByPlaceholderText("Write something nice"), "onChangeText", "message");
        expect(text).toBe("message");
        expect(onEventMock).toBeCalledWith("message");
    });
});