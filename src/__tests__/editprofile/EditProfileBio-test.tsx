import {fireEvent, render, screen} from "@testing-library/react-native";
import EditProfileBio from "../../components/editprofile/EditProfileBio";

describe("EditProfileBio tests", () => {
    test("Should be rendered", () => {
        const userBio = render(<EditProfileBio value={"Bio"} onChangeText={() => {}} />);
        screen.getByText('Change your bio');
    });

    test("Should fire event on change text", () => {
        const onEventMock = jest.fn((value) => value);

        const textInput = render(<EditProfileBio value={"Bio"} onChangeText={onEventMock} />);
        fireEvent(screen.getByDisplayValue('Bio'), 'onChangeText', 'Bio');
        expect(onEventMock).toHaveBeenCalledWith("Bio");
    });

    test("Should change text", () => {
        const onEventMock = jest.fn((value) => value + " edited");

        const textInput = render(<EditProfileBio value={"Bio"} onChangeText={onEventMock} />);
        fireEvent(screen.getByDisplayValue('Bio'), 'onChangeText', 'Bio');
        expect(onEventMock).toHaveLastReturnedWith("Bio edited");
    });
})