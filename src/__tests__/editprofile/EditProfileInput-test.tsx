import { render, screen } from "@testing-library/react-native";
import EditProfileInput from "../../components/editprofile/EditProfileInput";

describe("EditProfileInput tests", () => {
    test("Should be rendered", () => {
        const userProfileInput = render(
            <EditProfileInput title={"Change your name"} value={"User"} maxLength={20} keyboardType={"default"} onChangeText={() => {}} />);
        expect(userProfileInput).toBeDefined();
        screen.getByText("Change your name");
        screen.getByDisplayValue("User");
    });
})