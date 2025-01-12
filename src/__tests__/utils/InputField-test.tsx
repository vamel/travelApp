import { render, screen } from "@testing-library/react-native";
import InputField from "../../components/utils/InputField";

describe("InputField tests", () => {
    test("Should be rendered", () => {
        const userProfileInput = render(
            <InputField title={"Change your name"} value={"User"} maxLength={20} keyboardType={"default"} onChangeText={() => {}} />);
        expect(userProfileInput).toBeDefined();
        screen.getByText("Change your name");
        screen.getByDisplayValue("User");
    });
})